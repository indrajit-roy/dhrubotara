import { useState, useEffect } from 'react';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { testimonials as staticTestimonials, type Testimonial } from '../data/testimonials';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      if (isFirebaseConfigured && db) {
        // Fetch from Firebase
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        if (querySnapshot.empty) {
          // If DB is empty, check local storage for "Mock Updates" or fall back to static
          setTestimonials(staticTestimonials); 
        } else {
          const dbTestimonials = querySnapshot.docs.map(doc => ({ 
            id: doc.id, 
            ...doc.data() 
          })) as Testimonial[];
          setTestimonials(dbTestimonials);
        }
      } else {
        // Fallback: LocalStorage "Mock DB" for demo purposes
        const localData = localStorage.getItem('dhrubotara_testimonials');
        if (localData) {
          setTestimonials(JSON.parse(localData));
        } else {
          setTestimonials(staticTestimonials);
        }
      }
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setError("Failed to load testimonials");
      setTestimonials(staticTestimonials);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const saveTestimonial = async (testimonial: Testimonial) => {
    if (isFirebaseConfigured && db) {
      // Save to Firebase
      const ref = doc(collection(db, "testimonials"), testimonial.id);
      await setDoc(ref, testimonial, { merge: true });
    } else {
      // Save to LocalStorage (Mock)
      const newTestimonials = [...testimonials];
      const index = newTestimonials.findIndex(t => t.id === testimonial.id);
      if (index >= 0) {
        newTestimonials[index] = testimonial;
      } else {
        newTestimonials.push(testimonial);
      }
      localStorage.setItem('dhrubotara_testimonials', JSON.stringify(newTestimonials));
      setTestimonials(newTestimonials);
    }
    await fetchTestimonials(); // Refresh
  };

  const deleteTestimonial = async (id: string) => {
    if (isFirebaseConfigured && db) {
      await deleteDoc(doc(db, "testimonials", id));
    } else {
        const newTestimonials = testimonials.filter(t => t.id !== id);
        localStorage.setItem('dhrubotara_testimonials', JSON.stringify(newTestimonials));
        setTestimonials(newTestimonials);
    }
    await fetchTestimonials();
  };

  return { testimonials, loading, error, saveTestimonial, deleteTestimonial, refresh: fetchTestimonials };
}

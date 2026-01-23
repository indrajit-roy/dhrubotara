import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import type { Testimonial } from './types';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      if (!db) throw new Error("Firebase Firestore not initialized");

      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const dbTestimonials = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      })) as Testimonial[];
      setTestimonials(dbTestimonials);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setError("Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const saveTestimonial = async (testimonial: Testimonial) => {
    if (!db) throw new Error("Firebase Firestore not initialized");

    const ref = doc(collection(db, "testimonials"), testimonial.id);
    await setDoc(ref, testimonial, { merge: true });
    await fetchTestimonials(); // Refresh
  };

  const deleteTestimonial = async (id: string) => {
    if (!db) throw new Error("Firebase Firestore not initialized");

    await deleteDoc(doc(db, "testimonials", id));
    await fetchTestimonials();
  };

  return { testimonials, loading, error, saveTestimonial, deleteTestimonial, refresh: fetchTestimonials };
}
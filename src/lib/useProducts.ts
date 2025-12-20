import { useState, useEffect } from 'react';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { products as staticProducts, type Product } from '../data/products';

// This hook handles data fetching logic
// It gracefully falls back to static data if Firebase isn't set up yet
// This allows you to test the UI immediately

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      if (isFirebaseConfigured && db) {
        // Fetch from Firebase
        const querySnapshot = await getDocs(collection(db, "products"));
        if (querySnapshot.empty) {
          // If DB is empty, maybe seed it? For now, fall back or show empty
          // But to be helpful, if DB is empty, let's return static data so the site isn't blank
          // In a real app, you'd want empty state.
          // Let's check local storage for "Mock Updates" if not using Firebase
          setProducts(staticProducts); 
        } else {
          const dbProducts = querySnapshot.docs.map(doc => ({ 
            id: doc.id, 
            ...doc.data() 
          })) as Product[];
          setProducts(dbProducts);
        }
      } else {
        // Fallback: LocalStorage "Mock DB" for demo purposes
        const localData = localStorage.getItem('dhrubotara_products');
        if (localData) {
          setProducts(JSON.parse(localData));
        } else {
          setProducts(staticProducts);
        }
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products");
      setProducts(staticProducts); // Fallback on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const saveProduct = async (product: Product) => {
    if (isFirebaseConfigured && db) {
      // Save to Firebase
      const productRef = doc(collection(db, "products"), product.id);
      // Check if exists to determine update vs set, or just use setDoc with merge
      await setDoc(productRef, product, { merge: true });
    } else {
      // Save to LocalStorage (Mock)
      const newProducts = [...products];
      const index = newProducts.findIndex(p => p.id === product.id);
      if (index >= 0) {
        newProducts[index] = product;
      } else {
        newProducts.push(product);
      }
      localStorage.setItem('dhrubotara_products', JSON.stringify(newProducts));
      setProducts(newProducts);
    }
    await fetchProducts(); // Refresh
  };

  const deleteProduct = async (id: string) => {
    if (isFirebaseConfigured && db) {
      await deleteDoc(doc(db, "products", id));
    } else {
        const newProducts = products.filter(p => p.id !== id);
        localStorage.setItem('dhrubotara_products', JSON.stringify(newProducts));
        setProducts(newProducts);
    }
    await fetchProducts();
  };

  return { products, loading, error, saveProduct, deleteProduct, refresh: fetchProducts };
}

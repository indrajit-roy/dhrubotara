import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import type { Product } from './types';

// Sort products by sortPriority descending (higher values appear first)
// Only positive numbers are treated as valid priorities; 0, undefined, null fall back to default order
const sortProductsByPriority = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => {
    const aPriority = a.sortPriority;
    const bPriority = b.sortPriority;
    // Treat 0, undefined, null as no priority (use default order)
    const aValid = typeof aPriority === 'number' && aPriority > 0 ? aPriority : -Infinity;
    const bValid = typeof bPriority === 'number' && bPriority > 0 ? bPriority : -Infinity;
    return bValid - aValid;
  });
};

export function useProducts(initialData?: Product[] | null) {
  const [products, setProducts] = useState<Product[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      if (!db) throw new Error("Firebase Firestore not initialized");

      const querySnapshot = await getDocs(collection(db, "products"));
      const dbProducts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(sortProductsByPriority(dbProducts));
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialData) {
      fetchProducts();
    }
  }, [initialData]);

  const saveProduct = async (product: Product) => {
    if (!db) throw new Error("Firebase Firestore not initialized");

    const productRef = doc(collection(db, "products"), product.id);
    await setDoc(productRef, product, { merge: true });
    await fetchProducts(); // Refresh
  };

  const deleteProduct = async (id: string) => {
    if (!db) throw new Error("Firebase Firestore not initialized");
    
    await deleteDoc(doc(db, "products", id));
    await fetchProducts();
  };

  return { products, loading, error, saveProduct, deleteProduct, refresh: fetchProducts };
}
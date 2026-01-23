import { useState, useEffect } from 'react';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { products as staticProducts, type Product } from '../data/products';

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

// This hook handles data fetching logic
// It gracefully falls back to static data if Firebase isn't set up yet
// This allows you to test the UI immediately

export function useProducts(initialData?: Product[] | null) {
  const [products, setProducts] = useState<Product[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData);
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
          setProducts(sortProductsByPriority(staticProducts));
        } else {
          const dbProducts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Product[];
          setProducts(sortProductsByPriority(dbProducts));
        }
      } else {
        // Fallback: LocalStorage "Mock DB" for demo purposes
        const localData = localStorage.getItem('dhrubotara_products');
        if (localData) {
          const parsedProducts = JSON.parse(localData) as Product[];
          setProducts(sortProductsByPriority(parsedProducts));
        } else {
          setProducts(sortProductsByPriority(staticProducts));
        }
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products");
      setProducts(sortProductsByPriority(staticProducts)); // Fallback on error
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

import { db, isFirebaseConfigured } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { type Product } from '../data/products';

// Duplicate priority logic for server-side
const sortProductsByPriority = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => {
    const aPriority = a.sortPriority;
    const bPriority = b.sortPriority;
    const aValid = typeof aPriority === 'number' && aPriority > 0 ? aPriority : -Infinity;
    const bValid = typeof bPriority === 'number' && bPriority > 0 ? bPriority : -Infinity;
    return bValid - aValid;
  });
};

export async function getProductsServer(): Promise<Product[] | null> {
  // If not configured, return null so client can handle LocalStorage/Mock mode
  if (!isFirebaseConfigured || !db) {
    return null;
  }

  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    if (querySnapshot.empty) {
      return [];
    }
    
    const dbProducts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
    
    return sortProductsByPriority(dbProducts);
  } catch (err) {
    console.error("Error fetching products on server:", err);
    // On error, let client try or fallback
    return null;
  }
}

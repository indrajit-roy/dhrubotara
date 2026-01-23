import { useCollection } from './useCollection';
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
  const { 
    data: products, 
    loading, 
    error, 
    saveItem: saveProduct, 
    deleteItem: deleteProduct, 
    refresh 
  } = useCollection<Product>("products", {
    initialData,
    sort: sortProductsByPriority
  });

  return { products, loading, error, saveProduct, deleteProduct, refresh };
}
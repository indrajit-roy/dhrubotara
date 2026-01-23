"use client";
import { ProductCard } from './ProductCard';
import { useProducts } from '../lib/useProducts';
import { Skeleton } from './ui/Skeleton';

export function ProductSection() {
  const { products, loading } = useProducts();

  return (
    <section id="products" className="py-16 md:py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-emerald-800 font-sans tracking-[0.2em] text-xs md:text-sm uppercase block mb-4">
            Curated Collection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-950">
            Handpicked Goods
          </h2>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
             {[...Array(4)].map((_, i) => (
               <div key={i}>
                 <Skeleton className="aspect-square w-full mb-6" />
                 <Skeleton className="h-8 w-3/4 mb-2" />
                 <Skeleton className="h-16 w-full" />
               </div>
             ))}
           </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-stone-50 rounded-sm border border-dashed border-stone-200">
             <p className="text-stone-500 font-serif text-lg">Our collection is currently being curated.</p>
             <p className="text-stone-400 text-sm mt-2">Check back soon for new arrivals.</p>
          </div>
        )}
      </div>
    </section>
  );
}

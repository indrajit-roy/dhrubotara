import { ProductCard } from './ProductCard';
import { useProducts } from '../lib/useProducts';

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
           <div className="text-center text-stone-500 font-sans">Loading our collection...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

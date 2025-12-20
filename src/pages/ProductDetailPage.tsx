import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { useProducts } from '../lib/useProducts';
import { useEffect } from 'react';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useProducts();
  
  // Since useProducts is async in a real DB, we might need to wait, 
  // but for now it's fast enough or we show loading state
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
         <div className="font-sans text-emerald-900">Loading details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-emerald-950 mb-4">Product Not Found</h2>
          <Link to="/" className="text-emerald-800 hover:text-emerald-600 underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center text-stone-500 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans text-sm tracking-wide uppercase">Back to Collection</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 lg:p-8 shadow-sm"
          >
            <div className="aspect-square bg-stone-100 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-sans tracking-widest uppercase text-emerald-900">
                {product.tag}
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-4">
              {product.name}
            </h1>
            
            <p className="font-sans text-xl text-emerald-800 mb-8 font-medium">
              {product.price}
            </p>

            <div className="prose prose-stone mb-10 text-stone-600 font-sans leading-relaxed">
              <p>{product.longDescription}</p>
            </div>

            <div className="mb-10">
              <h3 className="font-serif text-lg text-emerald-950 mb-4">Key Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-stone-600 font-sans text-sm">
                    <span className="bg-emerald-100 text-emerald-800 p-1 rounded-full mr-3">
                      <Check size={14} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-stone-200">
               <a 
                 href="#contact" // In a real app, this might open a modal or specific order form
                 className="block w-full sm:w-auto bg-emerald-950 text-stone-50 text-center px-8 py-4 rounded-sm font-sans tracking-wide hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-900/10"
               >
                 Inquire to Order
               </a>
               <p className="mt-4 text-center sm:text-left text-xs text-stone-400 font-sans">
                 * Due to the artisanal nature of our products, stock is limited.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

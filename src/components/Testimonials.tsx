"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTestimonials } from '../lib/useTestimonials';
import { Skeleton } from './ui/Skeleton';

export function Testimonials() {
  const { testimonials, loading } = useTestimonials();

  return (
    <section id="testimonials" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-sans tracking-[0.2em] text-sm uppercase block mb-4">
            Words of Trust
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950">
            Stories of Healing
          </h2>
        </div>

        {loading ? (
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white p-8 shadow-sm rounded-sm flex flex-col h-full border border-stone-100">
                   <Skeleton className="h-5 w-24 mb-6" />
                   <Skeleton className="h-24 w-full mb-6" />
                   <div className="flex items-center mt-auto pt-4 border-t border-stone-100">
                      <Skeleton className="w-10 h-10 rounded-full mr-3" />
                      <div>
                         <Skeleton className="h-4 w-32 mb-1" />
                         <Skeleton className="h-3 w-20" />
                      </div>
                   </div>
                </div>
             ))}
           </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 shadow-sm rounded-sm relative flex flex-col h-full"
              >
                <Quote className="text-emerald-100 absolute top-6 left-6 w-10 h-10 -z-0" />
                
                <div className="relative z-10 flex-grow">
                  {t.category && (
                    <span className="inline-block px-2 py-1 mb-4 text-[10px] font-sans font-bold tracking-widest uppercase bg-emerald-50 text-emerald-900 rounded-sm">
                      {t.category}
                    </span>
                  )}
                  <p className="text-stone-600 font-serif italic text-base leading-relaxed mb-6">
                    &quot;{t.text}&quot;
                  </p>
                </div>

                <div className="flex items-center mt-4 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-900 text-stone-50 flex items-center justify-center font-serif text-lg mr-3 flex-shrink-0">
                      {t.name.charAt(0)}
                  </div>
                  <div>
                      <h4 className="font-sans font-medium text-emerald-950 text-sm">{t.name}</h4>
                      {t.role && <p className="text-stone-400 text-xs uppercase tracking-wider">{t.role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
           <div className="text-center text-stone-400 py-10 font-serif italic">
              No testimonials yet.
           </div>
        )}
      </div>
    </section>
  );
}

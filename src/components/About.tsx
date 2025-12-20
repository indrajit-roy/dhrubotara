import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="story" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
                <img 
                  src="https://picsum.photos/seed/dhrubotara1/800/1000" 
                  alt="Making process" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-50 -z-10 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-8">
              The Dhrubotara Promise
            </h2>
            <div className="space-y-6 text-stone-600 font-sans text-lg leading-relaxed">
              <p>
                Like the North Star that guides travelers, <strong>Dhrubotara</strong> stands as a beacon of authenticity in a world of mass production.
              </p>
              <p>
                We believe in the healing power of nature and the comfort of homemade traditions. Every bottle of coconut oil, every jar of pickle, and every remedy is crafted with the same care and love as if it were for our own family.
              </p>
              <p>
                Sourced directly from trusted growers and prepared using age-old recipes, our products bring the purest essence of the earth straight to your doorstep.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

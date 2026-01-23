"use client";
import { motion } from 'framer-motion';

export function Community() {
  return (
    <section className="py-20 md:py-32 bg-emerald-950 text-stone-100 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white tracking-tight">
            The Dhrubotara Community
          </h2>
          <div className="w-24 h-px bg-emerald-500/50 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Sabars Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-emerald-900/40 p-8 md:p-12 rounded-sm border border-emerald-800/30 backdrop-blur-sm hover:bg-emerald-900/60 transition-colors duration-500"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-emerald-200">
              The Sabars of Sundarban
            </h3>
            <div className="space-y-4 font-sans text-lg text-emerald-100/90 leading-relaxed">
              <p>
                The Sabars of Sundarban are an indigenous tribal community. Known for their deep connection with the forest and its resources, they thrive primarily by practicing skills that are daring and dangerous.
              </p>
              <p>
                At Dhrubotara, we value this commendable effort and have committed ourselves to transforming this strength into stability. We provide them with a secure and assured marketplace for their wares.
              </p>
              <p>
                They are rigorously trained in hygiene practices to ensure our products are suitable for both domestic and international use.
              </p>
            </div>
          </motion.div>

          {/* Collective Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-emerald-900/40 p-8 md:p-12 rounded-sm border border-emerald-800/30 backdrop-blur-sm hover:bg-emerald-900/60 transition-colors duration-500"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-emerald-200">
              A Collective of Care
            </h3>
            <div className="space-y-4 font-sans text-lg text-emerald-100/90 leading-relaxed">
              <p>
                Alongside the Sabars, we have also included underprivileged women from Midnapore, Birbhum, Hooghly, North 24 Parganas and several other districts of West Bengal, within our fold.
              </p>
              <p>
                Through these carefully curated associations we have built a collective of craft, courage and care. We pledge to make Dhrubotara a beacon of progress for these communities.
              </p>
              <div className="pt-6 mt-6 border-t border-emerald-800/30">
                <p className="font-serif italic text-xl text-white">
                  &ldquo;Together, we shine the light on our promise to bring a heritage of health and happiness to all.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
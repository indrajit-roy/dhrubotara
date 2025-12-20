import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      <div className="absolute inset-0 z-0">
        {/* Abstract background shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-emerald-800 font-sans tracking-[0.2em] text-xs md:text-sm uppercase mb-4 md:mb-6"
        >
          Pure • Homely • Authentic
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-emerald-950 mb-6 md:mb-8 leading-tight"
        >
          Nature’s Finest <br /> <span className="italic text-emerald-900/80">for your home.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-stone-600 font-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4"
        >
          Discover the essence of purity with our handcrafted collection of oils, pickles, and remedies.
        </motion.p>
      </div>
    </section>
  );
}

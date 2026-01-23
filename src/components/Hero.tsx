"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-8 md:w-12 bg-emerald-900/30" />
          <p className="text-emerald-800 font-sans tracking-[0.2em] text-xs md:text-sm uppercase font-medium">
            Pure • Homely • Authentic
          </p>
          <div className="h-px w-8 md:w-12 bg-emerald-900/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-emerald-950 mb-8 md:mb-12 leading-[1.1] md:leading-[1.1]"
        >
          Authentic <span className="italic font-light">Natural</span> <br />
          Remedies{" "}
          <span className="text-4xl md:text-6xl align-middle text-emerald-900/40">
            &
          </span>{" "}
          <br />
          Artisanal Foods
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-emerald-900/80 font-serif italic text-xl md:text-2xl">
            From the heart of Bengal
          </p>
        </motion.div>
      </div>
    </section>
  );
}

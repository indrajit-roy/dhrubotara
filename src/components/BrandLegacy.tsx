"use client";
import { motion } from 'framer-motion';

export function BrandLegacy() {
  const steps = [
    {
      id: "01",
      title: "The Genesis",
      content: [
        "In India, the “Vaidya” community were known for being practitioners of medicine. My family boasted of some well-known healers like Dr. Subol Majumdar, my mother’s uncle.",
        "Even my mother and grandmothers were women of profound wisdom, creating miracles from the kitchen larder. Unknown to me, my initiation in sustained wellness began with them.",
        "When I got married, I carried this interest in home remedies captured within the yellowed pages of an old notebook. We call these ‘totkas’ in Bengali—to me, they were traditions."
      ]
    },
    {
      id: "02",
      title: "The Rediscovery",
      content: [
        "During the pandemic in 2020, while recovering from COVID, I began to search for a purpose. It was then that the memory of the old notebook reappeared.",
        "I realised I wanted to revive the dying tradition of practicing totkas to ensure wellness for all. That would be my DhruboTara, the guiding light to carry forward my legacy of good health."
      ]
    },
    {
      id: "03",
      title: "Sharing Wellness",
      content: [
        "In October 2024, driven by passion, I began sharing mixtures made from simple ingredients with friends and family. The feedback was overwhelming.",
        "Dhrubotara was born as a living legacy. My totkas are not the result of professional expertise but purely a labour of love—memories that help me carry forward my legacy of wellness.",
        "An inheritance that I am proud to share with the world."
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-serif text-emerald-900/40 italic text-xl">Our Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mt-2">The Legacy of Healing</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-emerald-900/20 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-emerald-900 border-4 border-[#FDFBF7] -translate-x-1/2 mt-6 z-10" />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 pt-2">
                  <div className="bg-white p-8 rounded-sm shadow-sm border border-emerald-900/5 relative group hover:shadow-md transition-shadow duration-300">
                    <span className="absolute -top-6 right-8 text-6xl font-serif text-emerald-900/5 group-hover:text-emerald-900/10 transition-colors duration-300">
                      {step.id}
                    </span>
                    <h3 className="font-serif text-2xl text-emerald-900 mb-4 relative z-10">
                      {step.title}
                    </h3>
                    <div className="space-y-4 text-stone-600 font-sans leading-relaxed relative z-10">
                      {step.content.map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ 
                          __html: paragraph.replace('DhruboTara', '<span class="font-medium text-emerald-800">DhruboTara</span>') 
                        }} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
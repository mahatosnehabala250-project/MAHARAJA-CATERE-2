'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const eventTypes = [
  { emoji: '💒', label: 'Wedding' },
  { emoji: '🎂', label: 'Birthday' },
  { emoji: '🥂', label: 'Reception' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Family Function' },
  { emoji: '🏢', label: 'Corporate' },
  { emoji: '🎉', label: 'Social Event' },
  { emoji: '💝', label: 'Anniversary' },
  { emoji: '🙏', label: 'Puja Ceremony' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function EventTypeChips() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const [ripples, setRipples] = useState<Record<string, { x: number; y: number }>>({});

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>, label: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => ({ ...prev, [label]: { x, y } }));
    setTimeout(() => {
      setRipples((prev) => {
        const next = { ...prev };
        delete next[label];
        return next;
      });
    }, 600);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 overflow-hidden"
    >
      {/* Semi-transparent cream background with subtle pattern */}
      <div className="absolute inset-0 bg-royal-cream/60" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #800020 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-xs font-[family-name:var(--font-lato)]">
            Celebrate Every Occasion
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mt-2">
            What Are You Planning?
          </h2>
        </motion.div>

        {/* Chips row - horizontal scroll on mobile, centered wrap on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:overflow-x-visible md:pb-0 scrollbar-thin"
        >
          {eventTypes.map((type) => (
            <motion.button
              key={type.label}
              variants={chipVariants}
              onClick={(e) => handleClick(e, type.label)}
              className="relative flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-royal-gold/40 bg-white/80 text-royal-maroon font-semibold text-sm font-[family-name:var(--font-lato)] cursor-pointer transition-all duration-300 hover:bg-royal-maroon hover:text-royal-gold-light hover:border-royal-gold hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-royal-gold/30 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold focus-visible:ring-offset-2 focus-visible:ring-offset-royal-cream group overflow-hidden"
            >
              {/* Ripple effect */}
              {ripples[type.label] && (
                <span
                  className="absolute rounded-full bg-royal-gold/30 animate-ripple pointer-events-none"
                  style={{
                    left: ripples[type.label].x - 5,
                    top: ripples[type.label].y - 5,
                    width: 10,
                    height: 10,
                  }}
                />
              )}
              <span className="text-base transition-transform duration-300 group-hover:scale-125">{type.emoji}</span>
              <span>{type.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Subtle hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-xs mt-5 font-[family-name:var(--font-lato)]"
        >
          Click any event type to get a custom quote
        </motion.p>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Settings, ChefHat, PartyPopper } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Consultation',
    icon: Phone,
    description:
      'Share your event vision with us. We\'ll discuss your preferences, guest count, and budget to craft the perfect plan.',
  },
  {
    number: 2,
    title: 'Customization',
    icon: Settings,
    description:
      'We design a personalized menu and service plan tailored to your event theme, dietary needs, and cultural preferences.',
  },
  {
    number: 3,
    title: 'Preparation',
    icon: ChefHat,
    description:
      'Our expert chefs prepare every dish with fresh ingredients and authentic recipes, ensuring royal quality and taste.',
  },
  {
    number: 4,
    title: 'Celebration',
    icon: PartyPopper,
    description:
      'Our professional team sets up and serves your event flawlessly, letting you enjoy a stress-free royal celebration.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 md:py-28 section-dark-royal overflow-hidden" ref={sectionRef}>
      {/* Subtle mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg pointer-events-none opacity-50" />

      {/* Decorative background corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-royal-gold/15 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-royal-gold/15 rounded-bl-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading with ornament divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Our Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            How We Make It Royal
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </motion.div>

        {/* Steps timeline - vertical with alternating alignment on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px]">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-royal-gold via-royal-gold-light to-royal-gold/20"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
            {/* Animated traveling dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-royal-gold shadow-[0_0_8px_rgba(212,160,23,0.6)] animate-dot-travel" style={{ animationDelay: '1.5s' }} />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex-row`}
              >
                {/* Timeline node (circle on the line) */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-royal-gold/20 blur-md" />
                    {/* Pulse ring */}
                    <div className="absolute -inset-2 w-16 h-16 rounded-full animate-step-pulse" />
                    {/* Icon circle */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-gold to-royal-gold-dark flex items-center justify-center shadow-lg shadow-royal-gold/30 relative z-10">
                      <Icon className="w-5 h-5 text-royal-maroon" strokeWidth={1.8} />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-royal-maroon border-2 border-royal-gold flex items-center justify-center z-20 animate-pulse-gold">
                      <span className="text-royal-gold text-[10px] font-bold font-[family-name:var(--font-lato)]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step card */}
                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                  isEven ? 'lg:mr-auto lg:pr-0 lg:pl-0' : 'lg:ml-auto lg:pl-0 lg:pr-0'
                } ${isEven ? 'lg:text-left' : 'lg:text-left'}`}>
                  <div className="bg-royal-cream/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border-l-4 border-l-royal-gold border border-royal-gold/20 hover:border-royal-gold/40 hover:bg-royal-cream/15 transition-all duration-300 group">
                    <h3 className="text-xl sm:text-2xl font-bold text-royal-gold font-[family-name:var(--font-playfair)] mb-3 group-hover:text-royal-gold-light transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-royal-cream/70 font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="ornament-divider max-w-md w-full">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

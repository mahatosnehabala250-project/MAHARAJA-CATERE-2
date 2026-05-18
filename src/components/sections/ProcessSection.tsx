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
      staggerChildren: 0.2,
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

function TimelineConnector({ isInView, isLast }: { isInView: boolean; isLast: boolean }) {
  if (isLast) return null;

  return (
    <>
      {/* Horizontal connector (desktop) */}
      <div className="hidden lg:block absolute top-[3.5rem] left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-royal-gold to-royal-gold/40"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
      {/* Vertical connector (mobile) */}
      <div className="lg:hidden absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-[2px] h-[2rem]">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-royal-gold to-royal-gold/40"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </>
  );
}

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

        {/* Steps timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative w-full lg:w-1/4 flex flex-col items-center text-center px-4 sm:px-6 pb-8 lg:pb-0"
              >
                {/* Step icon circle */}
                <div className="relative mb-6">
                  {/* Outer ring glow */}
                  <motion.div
                    className="absolute inset-0 w-[5.5rem] h-[5.5rem] rounded-full border-2 border-royal-gold/20 -m-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  />
                  {/* Icon circle */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal-gold to-royal-gold-dark flex items-center justify-center shadow-lg shadow-royal-gold/20 relative z-10">
                    <Icon className="w-8 h-8 text-royal-maroon" strokeWidth={1.8} />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-royal-maroon border-2 border-royal-gold flex items-center justify-center z-20">
                    <span className="text-royal-gold text-xs font-bold font-[family-name:var(--font-lato)]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step title */}
                <h3 className="text-xl sm:text-2xl font-bold text-royal-gold font-[family-name:var(--font-playfair)] mb-3">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-royal-cream/70 font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed max-w-[280px]">
                  {step.description}
                </p>

                {/* Timeline connector */}
                <TimelineConnector isInView={isInView} isLast={isLast} />
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

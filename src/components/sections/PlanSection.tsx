'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, ClipboardList, PartyPopper } from 'lucide-react';
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
    title: 'Tell Us About Your Event',
    icon: MessageSquare,
    description:
      'Share your date, guest count, and event type. We\'ll recommend the perfect menu for your celebration.',
  },
  {
    number: 2,
    title: 'Choose & Customize Your Menu',
    icon: ClipboardList,
    description:
      'Pick from 100+ dishes across Bengali, Indian, Chinese & more. Customize portions, dietary needs, and presentation style.',
  },
  {
    number: 3,
    title: 'Sit Back & Celebrate',
    icon: PartyPopper,
    description:
      'We handle preparation, setup, serving, and cleanup. You enjoy your event stress-free while we take care of everything.',
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function PlanSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      className="relative py-20 md:py-28 bg-[#FFFFFF] overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-[#D4A017]/5 blur-3xl" />
        <div className="absolute bottom-12 right-12 w-40 h-40 rounded-full bg-[#800020]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-14 md:mb-20"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 text-[#D4A017] font-semibold uppercase tracking-widest text-xs font-[family-name:var(--font-lato)] mb-4">
            Simple &amp; Transparent
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mt-3 mb-6">
            3 Steps to a Stress-Free Celebration
          </h2>

          <p className="text-[#555555] font-[family-name:var(--font-lato)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;ve made it easy. Just follow these three steps and leave the rest to us.
          </p>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-[1px] bg-[#D4A017]/40" />
            <span className="text-[#D4A017] text-lg">&#10022;</span>
            <div className="w-12 h-[1px] bg-[#D4A017]/40" />
          </div>
        </motion.div>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="relative flex-1 flex flex-col items-center text-center"
                >
                  {/* Gold dotted connector line — horizontal on desktop */}
                  {index > 0 && (
                    <div className="hidden lg:block absolute top-10 -left-1/2 w-full">
                      <div
                        className="border-t-2 border-dashed border-[#D4A017]/40"
                        style={{ width: '100%' }}
                      />
                    </div>
                  )}

                  {/* Gold dotted connector line — vertical on mobile */}
                  {index > 0 && (
                    <div className="lg:hidden flex justify-center mb-2">
                      <div className="w-0 h-8 border-l-2 border-dashed border-[#D4A017]/40" />
                    </div>
                  )}

                  {/* Step number circle with animate-step-pulse */}
                  <div className="relative mb-6">
                    {/* Pulse ring animation */}
                    <div className="absolute -inset-3 w-[4.5rem] h-[4.5rem] rounded-full animate-step-pulse" />
                    {/* Circle with maroon border and gold fill */}
                    <div className="relative w-16 h-16 rounded-full border-2 border-[#800020] bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4A017]/20">
                      <span className="text-white text-2xl font-bold font-[family-name:var(--font-playfair)]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#800020]/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#800020]" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Step title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-3">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="text-[#555555] font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Gold dotted connector on desktop after last item — no connector after last */}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-14 md:mt-20"
        >
          <p className="text-[#555555] font-[family-name:var(--font-lato)] text-base sm:text-lg mb-6">
            Ready to start? Let&apos;s plan your perfect celebration.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#800020] text-white font-semibold font-[family-name:var(--font-lato)] rounded-xl hover:bg-[#600018] transition-colors duration-300 shadow-lg shadow-[#800020]/20 hover:shadow-xl hover:shadow-[#800020]/30 focus:outline-none focus:ring-2 focus:ring-[#D4A017]/40 focus:ring-offset-2"
          >
            Book Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}

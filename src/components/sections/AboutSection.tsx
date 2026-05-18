'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, ChefHat, Clock, ShieldCheck, User } from 'lucide-react';

const highlights = [
  { icon: Leaf, label: 'Fresh & Quality Ingredients' },
  { icon: ChefHat, label: 'Expert Team of Chefs' },
  { icon: Clock, label: 'Timely & Professional Service' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden dark:bg-[#1a0f00]/30"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with simple frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Simple gold border frame */}
              <div className="absolute -inset-3 border-2 border-royal-gold/40 rounded-xl" />

              {/* Image */}
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] border-2 border-royal-gold/40 shadow-lg shadow-royal-gold/20">
                <Image
                  src="/images/about-bg.png"
                  alt="Maharaja Caterer - About Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            {/* Section label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-royal-gold" />
              <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
                About Us
              </span>
              <div className="h-px w-8 bg-royal-gold" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] leading-tight">
              A Legacy of Royal Flavors
            </h2>

            {/* Gold accent line */}
            <div className="h-1 w-12 bg-gradient-to-r from-royal-gold to-royal-gold/0 rounded-full" />

            {/* Description — concise */}
            <div className="space-y-3 text-muted-foreground leading-relaxed font-[family-name:var(--font-lato)]">
              <p>
                With over 15 years of experience, Maharaja Caterer is Purulia&apos;s most trusted
                name in catering and event management.
              </p>
              <p>
                From intimate gatherings to grand weddings, our expert chefs craft every dish
                with love and precision.
              </p>
            </div>

            {/* Key highlights — 3 clean cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/60 dark:bg-[#2D1B00]/60 border border-royal-gold/15 hover:border-royal-gold/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-royal-gold" />
                  </div>
                  <span className="text-xs font-medium text-foreground font-[family-name:var(--font-lato)]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Proprietor & FSSAI Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4 border-t border-royal-gold/20 space-y-2"
            >
              <div className="flex items-center gap-2 text-sm text-foreground font-[family-name:var(--font-lato)]">
                <User className="w-4 h-4 text-royal-maroon" />
                <span className="font-semibold">Prop. Ujjal Chakraborty (Dolon)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-royal-maroon/70 font-[family-name:var(--font-lato)]">
                <ShieldCheck className="w-4 h-4 text-royal-gold" />
                <span>Lic. No. 12817016000590</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

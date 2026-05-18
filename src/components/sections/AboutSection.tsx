'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, ChefHat, Clock, Settings, ShieldCheck, User } from 'lucide-react';

const highlights = [
  { icon: Leaf, label: 'Fresh & Quality Ingredients' },
  { icon: ChefHat, label: 'Expert Team of Chefs' },
  { icon: Clock, label: 'Timely & Professional Service' },
  { icon: Settings, label: 'Customizable Menus' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden mandala-bg dark:bg-[#1a0f00]/30"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-royal-gold/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-royal-gold/20 rounded-br-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with ornamental frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center group"
          >
            <div className="relative w-full max-w-lg">
              {/* Subtle background glow behind image frame */}
              <div className="absolute -inset-10 bg-royal-gold/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />

              {/* Outer gold border frame with shimmer on hover */}
              <div className="absolute -inset-3 border-2 border-royal-gold/40 rounded-xl transition-all duration-500 group-hover:animate-border-shimmer" />

              {/* Decorative corner ornaments */}
              <div className="absolute -top-4 -left-4 w-10 h-10 z-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L40 0 L40 8 L8 8 L8 40 L0 40 Z" fill="#D4A017" />
                  <circle cx="8" cy="8" r="3" fill="#B8860B" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 z-10 rotate-90">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L40 0 L40 8 L8 8 L8 40 L0 40 Z" fill="#D4A017" />
                  <circle cx="8" cy="8" r="3" fill="#B8860B" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 z-10 -rotate-90">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L40 0 L40 8 L8 8 L8 40 L0 40 Z" fill="#D4A017" />
                  <circle cx="8" cy="8" r="3" fill="#B8860B" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 z-10 rotate-180">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L40 0 L40 8 L8 8 L8 40 L0 40 Z" fill="#D4A017" />
                  <circle cx="8" cy="8" r="3" fill="#B8860B" />
                </svg>
              </div>

              {/* Inner gold border frame */}
              <div className="absolute -inset-1.5 border border-royal-gold/60 rounded-lg" />

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
                {/* Gold shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-royal-maroon/20 via-transparent to-royal-gold/10" />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] leading-tight drop-shadow-md">
              A Legacy of Royal Flavors
            </h2>
            {/* Gold gradient accent line under heading */}
            <div className="flex items-center gap-2 pt-2">
              <div className="h-1 w-12 bg-gradient-to-r from-royal-gold to-royal-gold/0 rounded-full" />
              <div className="h-0.5 w-6 bg-royal-gold/30 rounded-full" />
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4 text-muted-foreground leading-relaxed font-[family-name:var(--font-lato)]">
              <p>
                Founded with a passion for culinary excellence, Maharaja Caterer has been
                Purulia&apos;s most trusted name in catering and event management. With over 15
                years of experience, we bring the richness of Bengali, Indian, Chinese, and
                Tandoori cuisine to every celebration.
              </p>
              <p>
                From intimate family gatherings to grand wedding celebrations, our team of expert
                chefs and dedicated staff ensure every dish is crafted with love, every
                presentation is picture-perfect, and every guest leaves with a smile.
              </p>
            </div>

            {/* Decorative SVG divider */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-royal-gold/40" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#D4A017" fillOpacity="0.6" />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-royal-gold/40" />
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-[#2D1B00]/60 border border-royal-gold/15 border-l-4 border-l-royal-gold hover:border-royal-gold/40 hover:border-l-royal-gold-light transition-colors"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-royal-gold" />
                  </div>
                  <span className="text-sm font-medium text-foreground font-[family-name:var(--font-lato)]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Proprietor & FSSAI Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4 border-t border-royal-gold/20 space-y-2"
            >
              <div className="flex items-center gap-2 text-sm text-foreground font-[family-name:var(--font-lato)]">
                <User className="w-4 h-4 text-royal-maroon" />
                <span className="font-semibold">Prop. Ujjal Chakraborty (Dolon)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-[family-name:var(--font-lato)]">
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

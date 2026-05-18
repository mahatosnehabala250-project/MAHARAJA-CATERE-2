'use client'

import { motion } from 'framer-motion'

interface TrustBadge {
  id: string
  emoji: string
  title: string
  description: string
}

const trustBadges: TrustBadge[] = [
  {
    id: 'years',
    emoji: '🏆',
    title: '15+ Years of Excellence',
    description: 'Trusted by thousands of families across Purulia since 2009',
  },
  {
    id: 'menu',
    emoji: '🍽️',
    title: '100+ Menu Items',
    description: 'From traditional Bengali to international cuisine, we have it all',
  },
  {
    id: 'rating',
    emoji: '⭐',
    title: '4.8★ Google Rating',
    description: "Consistently rated as Purulia's top catering service",
  },
  {
    id: 'fssai',
    emoji: '🛡️',
    title: 'FSSAI Licensed',
    description: 'Fully licensed and compliant with food safety standards',
  },
  {
    id: 'chefs',
    emoji: '👨‍🍳',
    title: 'Expert Chef Team',
    description: 'Our trained chefs bring restaurant-quality food to every event',
  },
  {
    id: 'ontime',
    emoji: '⏰',
    title: 'On-Time Guarantee',
    description: 'We respect your time. Setup and service always on schedule',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative py-20 md:py-28 section-royal dark:bg-[#1a0f00]/40 overflow-hidden"
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-60" />

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30 rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30 -rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30 rotate-180">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section heading */}
        <div
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Our Promise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Why Choose Maharaja
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-muted-foreground dark:text-royal-cream/70 text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Trust, quality, and dedication — the pillars that make us Purulia&apos;s favourite caterer
          </p>
        </div>

        {/* Trust badges grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-[#2D1B00]/80 rounded-2xl border border-royal-gold/20 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,160,23,0.2)] hover:border-royal-gold/50"
            >
              {/* Gold left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-royal-gold/60 transition-all duration-300 group-hover:w-1.5 group-hover:bg-royal-gold" />

              {/* Card content */}
              <div className="relative p-6 md:p-8 flex flex-col items-center text-center">
                {/* Emoji icon */}
                <span className="text-4xl md:text-5xl mb-4 block">{badge.emoji}</span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-royal-maroon dark:text-royal-gold font-[family-name:var(--font-playfair)] mb-2">
                  {badge.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground dark:text-royal-cream/60 text-sm md:text-base font-[family-name:var(--font-lato)] leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

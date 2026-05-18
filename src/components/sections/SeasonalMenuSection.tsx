'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SeasonalItem {
  id: string
  emoji: string
  title: string
  description: string
  availability: string
}

const seasonalItems: SeasonalItem[] = [
  {
    id: 'durga-puja',
    emoji: '🌸',
    title: 'Durga Puja Feast',
    description: 'Traditional Bengali bhog with 25+ items including kosha mangsho, luchi, and payesh',
    availability: 'Available Oct',
  },
  {
    id: 'summer-cooler',
    emoji: '☀️',
    title: 'Summer Cooler Menu',
    description: 'Refreshing drinks, light curries, and fruit desserts perfect for summer events',
    availability: 'Available May-Jul',
  },
  {
    id: 'winter-wedding',
    emoji: '🎄',
    title: 'Winter Wedding Special',
    description: 'Rich gravies, kebabs, and warm desserts for the perfect winter celebration',
    availability: 'Available Nov-Feb',
  },
  {
    id: 'diwali-dinner',
    emoji: '🪔',
    title: 'Diwali Dinner Package',
    description: 'Grand festive spread with sweets, snacks, and royal dinner options',
    availability: 'Available Oct-Nov',
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

export default function SeasonalMenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="seasonal"
      className="relative py-20 md:py-28 section-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-30" />

      {/* Decorative SVG corners */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Festive Delights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Seasonal &amp; Festive Specials
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-maroon/70 text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Celebrate every season with our curated festive menus
          </p>
        </motion.div>

        {/* Seasonal cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {seasonalItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative rounded-2xl bg-white/90 backdrop-blur-sm border-l-4 border-l-royal-gold border border-royal-gold/20 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-l-royal-gold/80 hover:shadow-[0_0_30px_rgba(212,160,23,0.2)]"
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: '0 0 30px rgba(212, 160, 23, 0.15), inset 0 0 30px rgba(212, 160, 23, 0.05)' }}
              />

              <div className="relative p-6 md:p-8 flex flex-col items-center text-center">
                {/* Season emoji */}
                <span className="text-4xl mb-4">{item.emoji}</span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-royal-maroon/60 text-sm font-[family-name:var(--font-lato)] mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Availability badge */}
                <span className="inline-flex items-center bg-royal-gold/15 text-royal-gold text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full font-[family-name:var(--font-lato)]">
                  {item.availability}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

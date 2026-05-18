'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building, Castle, Landmark, Home, Tent, Church } from 'lucide-react'

interface Venue {
  id: string
  icon: typeof Building
  name: string
  type: string
}

const venues: Venue[] = [
  {
    id: 'purulia-town-hall',
    icon: Building,
    name: 'Purulia Town Hall',
    type: 'Banquet Hall',
  },
  {
    id: 'raja-bagan',
    icon: Castle,
    name: 'Raja Bagan',
    type: 'Open Lawn',
  },
  {
    id: 'hotel-rajwada',
    icon: Landmark,
    name: 'Hotel Rajwada',
    type: 'Hotel Resort',
  },
  {
    id: 'sreema-bhawan',
    icon: Home,
    name: 'Sreema Bhawan',
    type: 'Community Hall',
  },
  {
    id: 'mukherjee-garden',
    icon: Tent,
    name: 'Mukherjee Garden',
    type: 'Garden Venue',
  },
  {
    id: 'puranidanga-hall',
    icon: Church,
    name: 'Puranidanga Community Hall',
    type: 'Community Center',
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function VenuePartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="venues"
      className="relative py-20 md:py-28 section-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-30" />

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20 rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20 -rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20 rotate-180">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-maroon/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-maroon font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Our Trusted Venue Partners
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-muted-foreground text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            We work with Purulia&apos;s finest venues to create perfect celebrations
          </p>
        </motion.div>

        {/* Venue partner cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              variants={cardVariants}
              className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-royal-gold/20 overflow-hidden transition-all duration-300 hover:border-royal-gold/60 hover:shadow-[0_0_25px_rgba(212,160,23,0.15)] hover:scale-105"
            >
              <div className="relative p-4 sm:p-5 flex flex-col items-center text-center">
                {/* Decorative icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-royal-gold/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <venue.icon className="w-6 h-6 sm:w-7 sm:h-7 text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Venue name */}
                <h3 className="text-sm sm:text-base font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mb-1 sm:mb-2 leading-tight">
                  {venue.name}
                </h3>

                {/* Venue type */}
                <span className="text-xs sm:text-sm text-muted-foreground font-[family-name:var(--font-lato)] bg-royal-gold/5 px-2.5 py-0.5 rounded-full">
                  {venue.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner With Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 animate-pulse-glow font-[family-name:var(--font-lato)]"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

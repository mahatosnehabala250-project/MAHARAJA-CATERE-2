'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Clock, Building2 } from 'lucide-react'

interface Offer {
  id: string
  icon: typeof Gift
  title: string
  description: string
  badge: string
}

const offers: Offer[] = [
  {
    id: 'wedding-season',
    icon: Gift,
    title: 'Wedding Season Special',
    description: 'Book your wedding catering before the season and get 15% off on Gold & Royal packages!',
    badge: 'Limited Time',
  },
  {
    id: 'early-bird',
    icon: Clock,
    title: 'Early Bird Discount',
    description: 'Book 30 days in advance and enjoy complimentary welcome drinks for all guests!',
    badge: 'Limited Time',
  },
  {
    id: 'corporate-deal',
    icon: Building2,
    title: 'Corporate Lunch Deal',
    description: 'Special pricing for corporate events with 50+ guests. Custom menus starting at ₹299/plate!',
    badge: 'Limited Time',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export default function SpecialOffersSection() {
  // Countdown timer - 30 days from now
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const diff = endDate.getTime() - now.getTime()

      if (diff <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="offers"
      className="relative py-20 md:py-28 section-dark-royal dark:from-[#2D1B00] overflow-hidden"
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-40" />

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

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />

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
            Exclusive Deals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Special Offers
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-cream/80 text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Grab these limited-time offers and make your celebration even more special
          </p>

          {/* Countdown Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-full bg-royal-maroon/80 border border-royal-gold/30 backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse-dot" />
            <span className="text-royal-gold font-semibold text-sm font-[family-name:var(--font-lato)]">
              Limited Time Offer — Ends in
            </span>
            <span className="flex items-center gap-1.5 text-royal-cream font-bold text-sm tabular-nums font-[family-name:var(--font-lato)]">
              <span className="bg-royal-gold/20 px-2 py-1 rounded">{timeLeft.days}d</span>
              <span className="text-royal-gold/60">:</span>
              <span className="bg-royal-gold/20 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="text-royal-gold/60">:</span>
              <span className="bg-royal-gold/20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="text-royal-gold/60">:</span>
              <span className="bg-royal-gold/20 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </span>
          </motion.div>
        </div>

        {/* Offer cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              className="group relative rounded-2xl bg-royal-cream/95 border border-royal-gold/20 overflow-hidden transition-all duration-300 hover:border-royal-gold/50 hover:shadow-[0_0_25px_rgba(212,160,23,0.2)]"
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 30px rgba(212, 160, 23, 0.15), inset 0 0 30px rgba(212, 160, 23, 0.05)' }} />

              {/* Card content */}
              <div className="relative p-7 md:p-10 flex flex-col items-center text-center">
                {/* Gold icon */}
                <div className="w-14 h-14 rounded-full bg-royal-gold/10 flex items-center justify-center mb-5">
                  <offer.icon className="w-7 h-7 text-royal-gold" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mb-3">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base font-[family-name:var(--font-lato)] mb-5 leading-relaxed">
                  {offer.description}
                </p>

                {/* Expiry badge with pulsing red dot */}
                <span className="inline-flex items-center gap-2 bg-royal-maroon text-royal-cream text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 font-[family-name:var(--font-lato)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse-dot" />
                  {offer.badge}
                </span>

                {/* CTA Button with gold sparkle on hover */}
                <a
                  href="#contact"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal-gold text-royal-maroon font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 hover:animate-sparkle-button font-[family-name:var(--font-lato)]"
                >
                  Claim Offer
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

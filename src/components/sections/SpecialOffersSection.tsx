'use client'

import { motion } from 'framer-motion'
import { Gift, Clock, Building2 } from 'lucide-react'

interface Offer {
  id: string
  icon: typeof Gift
  title: string
  description: string
}

const offers: Offer[] = [
  {
    id: 'wedding-season',
    icon: Gift,
    title: 'Wedding Season Special',
    description: '15% off on Gold & Royal packages for wedding bookings.',
  },
  {
    id: 'early-bird',
    icon: Clock,
    title: 'Early Bird Discount',
    description: 'Complimentary welcome drinks when you book 30 days in advance.',
  },
  {
    id: 'corporate-deal',
    icon: Building2,
    title: 'Corporate Lunch Deal',
    description: 'Custom menus starting at ₹299/plate for 50+ guests.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function SpecialOffersSection() {
  return (
    <section
      id="offers"
      className="relative py-16 md:py-24 section-dark-royal dark:from-[#2D1B00] overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 mandala-bg opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Exclusive Deals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Special Offers
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-cream text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Make your celebration even more special with these exclusive deals
          </p>
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
              className="group rounded-2xl bg-royal-cream/95 border border-royal-gold/20 overflow-hidden transition-all duration-300 hover:border-royal-gold/50 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)]"
            >
              {/* Card content */}
              <div className="relative p-7 md:p-8 flex flex-col items-center text-center">
                {/* Gold icon */}
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                  <offer.icon className="w-6 h-6 text-royal-gold" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mb-2">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-royal-maroon/80 text-sm font-[family-name:var(--font-lato)] mb-5">
                  {offer.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-royal-gold text-royal-maroon font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 font-[family-name:var(--font-lato)]"
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

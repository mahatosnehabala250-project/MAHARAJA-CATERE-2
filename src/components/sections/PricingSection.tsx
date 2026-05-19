'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Crown } from 'lucide-react'

interface PricingPackage {
  name: string
  price: string
  features: string[]
  suitability: string
  ctaLabel: string
  ctaVariant: 'outline' | 'solid'
  isPopular?: boolean
  isRoyal?: boolean
}

const packages: PricingPackage[] = [
  {
    name: 'Silver Package',
    price: '₹350',
    features: [
      '15+ menu items',
      'Veg & non-veg options',
      'Basic setup & serving',
    ],
    suitability: 'Small gatherings (50–200 guests)',
    ctaLabel: 'Get Quote',
    ctaVariant: 'outline',
  },
  {
    name: 'Gold Package',
    price: '₹550',
    features: [
      '25+ menu items',
      'Multi-cuisine spread',
      'Premium setup & decoration',
      'Dedicated service team',
    ],
    suitability: 'Medium celebrations (200–500 guests)',
    ctaLabel: 'Book Now',
    ctaVariant: 'solid',
    isPopular: true,
  },
  {
    name: 'Royal Package',
    price: '₹850',
    features: [
      '35+ menu items',
      'Signature dishes included',
      'Luxury setup & themed decoration',
      'Personal event coordinator',
    ],
    suitability: 'Grand celebrations (500+ guests)',
    ctaLabel: 'Get Quote',
    ctaVariant: 'outline',
    isRoyal: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="pricing"
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#FAFAF5' }}
      ref={sectionRef}
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span
            className="inline-block font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)] px-4 py-1.5 rounded-full mb-4"
            style={{ color: '#D4A017', backgroundColor: 'rgba(212, 160, 23, 0.1)' }}
          >
            Transparent Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mt-3 mb-6"
            style={{ color: '#800020' }}
          >
            Invest in a Celebration Worth Remembering
          </h2>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: '#D4A017', opacity: 0.5 }} />
            <span style={{ color: '#D4A017' }} className="text-lg">&#10022;</span>
            <div className="h-px w-12" style={{ backgroundColor: '#D4A017', opacity: 0.5 }} />
          </div>
          <p
            className="text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto"
            style={{ color: '#444444' }}
          >
            Choose the package that fits your celebration. Every package includes free menu consultation.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                pkg.isPopular
                  ? 'hover:shadow-[0_20px_40px_rgba(212,160,23,0.15)]'
                  : 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
              }`}
              style={{
                backgroundColor: '#FFFFFF',
                border: pkg.isPopular ? '1px solid #D4A017' : '1px solid #E8E4DD',
                borderTop: pkg.isPopular ? '3px solid #D4A017' : '1px solid #E8E4DD',
                boxShadow: pkg.isPopular
                  ? '0 8px 32px rgba(212, 160, 23, 0.18), 0 0 0 1px rgba(212, 160, 23, 0.12)'
                  : '0 1px 3px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Gold glow for popular card */}
              {pkg.isPopular && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: '0 0 60px rgba(212, 160, 23, 0.15), inset 0 0 50px rgba(212, 160, 23, 0.05)',
                  }}
                />
              )}

              {/* Most Popular badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 z-20">
                  <div
                    className="text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl font-[family-name:var(--font-lato)]"
                    style={{
                      background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)',
                    }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card content */}
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Package icon & name */}
                <div className="flex items-center gap-3 mb-5">
                  {pkg.isRoyal && (
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center animate-crown-shimmer"
                      style={{ backgroundColor: 'rgba(128, 0, 32, 0.08)' }}
                    >
                      <Crown className="w-5 h-5" style={{ color: '#D4A017' }} />
                    </div>
                  )}
                  <h3
                    className="text-xl md:text-2xl font-bold font-[family-name:var(--font-playfair)]"
                    style={{ color: '#800020' }}
                  >
                    {pkg.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)]"
                    style={{ color: '#D4A017' }}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className="text-sm font-[family-name:var(--font-lato)] ml-1"
                    style={{ color: '#444444' }}
                  >
                    /plate
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px my-5"
                  style={{
                    background: pkg.isPopular
                      ? 'linear-gradient(to right, transparent, rgba(212,160,23,0.3), transparent)'
                      : 'linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)',
                  }}
                />

                {/* Features list */}
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: '#D4A017' }}
                      />
                      <span
                        className="text-sm sm:text-base font-[family-name:var(--font-lato)]"
                        style={{ color: '#1A1A1A' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Suitability */}
                <p
                  className="text-sm font-[family-name:var(--font-lato)] mb-6 italic"
                  style={{ color: '#444444' }}
                >
                  Suitable for: {pkg.suitability}
                </p>

                {/* CTA Button */}
                {pkg.ctaVariant === 'solid' ? (
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 font-[family-name:var(--font-lato)] hover:opacity-90 hover:shadow-lg"
                    style={{
                      backgroundColor: '#800020',
                      color: '#FFFFFF',
                    }}
                  >
                    {pkg.ctaLabel}
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 font-[family-name:var(--font-lato)] bg-transparent hover:bg-[#800020]/5"
                    style={{
                      border: '2.5px solid #800020',
                      color: '#800020',
                    }}
                  >
                    {pkg.ctaLabel}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom packages note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 md:mt-12"
        >
          <p
            className="text-sm md:text-base font-[family-name:var(--font-lato)]"
            style={{ color: '#444444' }}
          >
            Need something custom?{' '}
            <a
              href="#contact"
              className="font-semibold transition-colors duration-200"
              style={{ color: '#D4A017' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#800020')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#D4A017')}
            >
              Contact us
            </a>{' '}
            for personalized packages.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

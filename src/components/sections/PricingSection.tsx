'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Star, Crown, Shield } from 'lucide-react'

interface PricingFeature {
  text: string
}

interface PricingPackage {
  name: string
  price: string
  description: string
  features: PricingFeature[]
  minGuests: string
  accentColor: string
  accentBorder: string
  accentBg: string
  icon: typeof Shield
  isPopular?: boolean
}

const packages: PricingPackage[] = [
  {
    name: 'Silver Package',
    price: '₹350',
    description: 'Perfect for intimate gatherings',
    features: [
      { text: '15+ Menu Items' },
      { text: 'Vegetarian & Non-Veg Options' },
      { text: 'Buffet Setup' },
      { text: 'Service Staff' },
      { text: 'Basic Dinnerware' },
      { text: 'Starter to Dessert' },
    ],
    minGuests: 'Starting from 50 guests',
    accentColor: 'text-gray-400',
    accentBorder: 'border-gray-300',
    accentBg: 'bg-gray-50',
    icon: Shield,
  },
  {
    name: 'Gold Package',
    price: '₹550',
    description: 'Our most popular choice',
    features: [
      { text: '25+ Menu Items' },
      { text: 'Multi-Cuisine Spread' },
      { text: 'Live Counter Setup' },
      { text: 'Premium Dinnerware' },
      { text: 'Dedicated Servers' },
      { text: 'Decorative Buffet Setup' },
      { text: 'Welcome Drinks' },
      { text: 'Custom Cake' },
    ],
    minGuests: 'Starting from 100 guests',
    accentColor: 'text-royal-gold',
    accentBorder: 'border-royal-gold',
    accentBg: 'bg-royal-gold/5',
    icon: Star,
    isPopular: true,
  },
  {
    name: 'Royal Package',
    price: '₹850',
    description: 'The ultimate royal experience',
    features: [
      { text: '40+ Menu Items' },
      { text: 'Premium Multi-Cuisine' },
      { text: '2 Live Counters' },
      { text: 'Royal Dinnerware & Linen' },
      { text: 'Personal Event Manager' },
      { text: 'Themed Decoration Support' },
      { text: 'Welcome Drinks & Mocktails' },
      { text: 'Custom Wedding Cake' },
      { text: 'Dedicated Service Team' },
      { text: 'Post-Event Cleanup' },
    ],
    minGuests: 'Starting from 200 guests',
    accentColor: 'text-royal-maroon',
    accentBorder: 'border-royal-maroon/40',
    accentBg: 'bg-royal-maroon/5',
    icon: Crown,
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="pricing"
      className="relative py-20 md:py-28 section-royal overflow-hidden dark:bg-[#1a0f00]/50"
      ref={sectionRef}
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-40" />

      {/* Decorative corner elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-royal-gold/10 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-royal-gold/10 rounded-bl-3xl" />
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
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Royal Packages
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-muted-foreground text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Choose the Perfect Package for Your Celebration
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`relative rounded-2xl bg-royal-cream/95 dark:bg-[#2D1B00]/90 border-2 ${pkg.isPopular ? 'border-royal-gold shadow-2xl lg:scale-105 z-10 animate-gold-border-glow' : pkg.accentBorder + ' shadow-lg'} overflow-hidden transition-all duration-300 hover:shadow-2xl ${pkg.isPopular ? 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-royal-gold/20' : 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-royal-gold/10'} bg-noise`}
            >
              {/* Gold corner ornament SVGs for popular card */}
              {pkg.isPopular && (
                <>
                  <svg className="absolute top-0 left-0 w-16 h-16 z-20 pointer-events-none" viewBox="0 0 64 64" fill="none">
                    <path d="M0 0 L24 0 Q0 0 0 24 Z" fill="#D4A017" opacity="0.3" />
                    <path d="M0 0 L16 0 Q0 0 0 16 Z" fill="#D4A017" opacity="0.5" />
                    <circle cx="6" cy="6" r="2" fill="#FFD700" opacity="0.8" />
                  </svg>
                  <svg className="absolute top-0 right-0 w-16 h-16 z-20 pointer-events-none rotate-90" viewBox="0 0 64 64" fill="none">
                    <path d="M0 0 L24 0 Q0 0 0 24 Z" fill="#D4A017" opacity="0.3" />
                    <path d="M0 0 L16 0 Q0 0 0 16 Z" fill="#D4A017" opacity="0.5" />
                    <circle cx="6" cy="6" r="2" fill="#FFD700" opacity="0.8" />
                  </svg>
                  <svg className="absolute bottom-0 left-0 w-16 h-16 z-20 pointer-events-none -rotate-90" viewBox="0 0 64 64" fill="none">
                    <path d="M0 0 L24 0 Q0 0 0 24 Z" fill="#D4A017" opacity="0.3" />
                    <path d="M0 0 L16 0 Q0 0 0 16 Z" fill="#D4A017" opacity="0.5" />
                    <circle cx="6" cy="6" r="2" fill="#FFD700" opacity="0.8" />
                  </svg>
                  <svg className="absolute bottom-0 right-0 w-16 h-16 z-20 pointer-events-none rotate-180" viewBox="0 0 64 64" fill="none">
                    <path d="M0 0 L24 0 Q0 0 0 24 Z" fill="#D4A017" opacity="0.3" />
                    <path d="M0 0 L16 0 Q0 0 0 16 Z" fill="#D4A017" opacity="0.5" />
                    <circle cx="6" cy="6" r="2" fill="#FFD700" opacity="0.8" />
                  </svg>
                </>
              )}

              {/* Popular badge with shimmer animation */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 animate-badge-shimmer text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl font-[family-name:var(--font-lato)] z-20">
                  MOST POPULAR
                </div>
              )}

              {/* Best Value badge on Royal package */}
              {pkg.name === 'Royal Package' && (
                <div className="absolute top-0 right-0 bg-royal-maroon text-royal-gold-light text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg font-[family-name:var(--font-lato)] z-20 flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Best Value
                </div>
              )}

              {/* Gold shimmer sweep overlay on hover for popular card */}
              {pkg.isPopular && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none z-10 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 animate-gold-shimmer-sweep opacity-30" />
                </div>
              )}

              {/* Gold glow for popular card */}
              {pkg.isPopular && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 30px rgba(212, 160, 23, 0.15), inset 0 0 30px rgba(212, 160, 23, 0.05)' }} />
              )}

              {/* Card content */}
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Package icon & name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${pkg.isPopular ? 'bg-royal-gold/20' : pkg.accentBg} flex items-center justify-center`}>
                    <pkg.icon className={`w-5 h-5 ${pkg.accentColor}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)]">
                    {pkg.name}
                    {pkg.isPopular && <span className="ml-1.5 text-royal-gold animate-gentle-bounce inline-block">⭐</span>}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className={`text-3xl md:text-4xl font-bold ${pkg.isPopular ? 'text-royal-gold-dark' : pkg.accentColor} font-[family-name:var(--font-playfair)]`}>
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm font-[family-name:var(--font-lato)]">/plate</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 font-[family-name:var(--font-lato)]">
                  {pkg.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent mb-6" />

                {/* Features list */}
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.isPopular ? 'text-royal-gold' : 'text-muted-foreground'}`} />
                      <span className="text-sm text-foreground/80 font-[family-name:var(--font-lato)]">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Min guests */}
                <p className="text-xs text-muted-foreground font-medium mb-5 font-[family-name:var(--font-lato)] italic">
                  {pkg.minGuests}
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 font-[family-name:var(--font-lato)] ${
                    pkg.isPopular
                      ? 'bg-royal-gold text-white hover:bg-royal-gold-dark shadow-lg hover:shadow-xl animate-pulse-gold'
                      : 'bg-royal-maroon text-royal-gold-light hover:bg-royal-maroon-light shadow-md hover:shadow-lg'
                  }`}
                >
                  Get Quote
                </a>
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
          <p className="text-muted-foreground text-sm md:text-base font-[family-name:var(--font-lato)]">
            Custom packages available — <a href="#contact" className="text-royal-gold font-semibold hover:text-royal-maroon transition-colors">Contact us</a> for personalized quotes!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

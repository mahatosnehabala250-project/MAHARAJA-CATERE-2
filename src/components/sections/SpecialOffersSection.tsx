'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, Clock, UtensilsCrossed, ArrowRight, Sparkles } from 'lucide-react'

// Calculate target date (30 days from now)
const getTargetDate = () => {
  const date = new Date()
  date.setDate(date.getDate() + 30)
  return date
}

// Format date as "Month Day, Year"
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-IN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// Secondary offers data
const secondaryOffers = [
  {
    icon: Clock,
    title: 'Early Bird Discount',
    description: 'Book 4+ weeks in advance and save ₹50/plate',
  },
  {
    icon: UtensilsCrossed,
    title: 'Free Tasting Session',
    description: 'Try before you book — complimentary menu tasting for events 200+ guests',
  },
]

export default function SpecialOffersSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const targetDate = getTargetDate()

  useEffect(() => {
    const target = targetDate.getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now
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
  }, [targetDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section
      id="offers"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Subtle decorative gold corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-12 w-28 h-28 border-t-2 border-r-2 border-[#D4A017]/10 rounded-tr-3xl" />
        <div className="absolute bottom-12 left-12 w-28 h-28 border-b-2 border-l-2 border-[#D4A017]/10 rounded-bl-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Gold badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#800020] font-[family-name:var(--font-lato)]">
              Special Offer
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-4">
            This Season&apos;s Royal Specials
          </h2>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-12 h-px bg-[#D4A017]/40" />
            <span className="text-[#D4A017] text-lg">&#10022;</span>
            <span className="block w-12 h-px bg-[#D4A017]/40" />
          </div>

          <p className="text-[#444444] font-[family-name:var(--font-lato)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Limited-time offers to make your celebration even more special
          </p>
        </motion.div>

        {/* Featured offer card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-10 md:mb-12"
        >
          <div className="bg-white border border-[#E8E4DD] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#800020]/5 hover:-translate-y-1">
            {/* Promotional banner area */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #800020 0%, #9B1B30 40%, #D4A017 100%)',
                }}
              />
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 mandala-bg opacity-30" />
              {/* Decorative elements on banner */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Gift className="w-12 h-12 sm:w-16 sm:h-16 text-white/90 mx-auto mb-3" />
                    <span className="text-white/90 text-sm sm:text-base font-semibold font-[family-name:var(--font-lato)] uppercase tracking-widest">
                      Limited Time Offer
                    </span>
                  </motion.div>
                </div>
              </div>
              {/* 15% OFF badge */}
              <div className="absolute top-4 right-4 bg-[#D4A017] text-[#800020] font-bold text-sm sm:text-base px-3 py-1.5 rounded-full font-[family-name:var(--font-lato)] shadow-lg">
                15% OFF
              </div>
            </div>

            {/* Card content */}
            <div className="p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-3">
                Wedding Season Special
              </h3>
              <p className="text-[#444444] font-[family-name:var(--font-lato)] text-base sm:text-lg leading-relaxed mb-6">
                Book your wedding catering before{' '}
                <span className="font-semibold text-[#800020]">{formatDate(targetDate)}</span>{' '}
                and get 15% off on our Gold &amp; Royal packages!
              </p>

              {/* Countdown timer */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#999999] font-[family-name:var(--font-lato)] mb-3">
                  Offer Expires In
                </p>
                <div className="flex gap-3 sm:gap-4">
                  {timeUnits.map((unit) => (
                    <div
                      key={unit.label}
                      className="flex-1 bg-[#800020] rounded-lg p-3 sm:p-4 text-center"
                    >
                      <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4A017] font-[family-name:var(--font-playfair)] leading-none">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1 font-[family-name:var(--font-lato)]">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#800020] hover:bg-[#6B0018] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#800020]/20 font-[family-name:var(--font-lato)] group"
              >
                Claim This Offer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary offer cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {secondaryOffers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white border border-[#E8E4DD] rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#800020]/5 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#D4A017]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4A017]/20 transition-colors duration-300">
                  <offer.icon className="w-6 h-6 text-[#D4A017]" />
                </div>

                {/* Text content */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-2">
                    {offer.title}
                  </h4>
                  <p className="text-[#444444] font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed">
                    {offer.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[#D4A017] hover:text-[#800020] font-semibold text-sm mt-3 font-[family-name:var(--font-lato)] transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

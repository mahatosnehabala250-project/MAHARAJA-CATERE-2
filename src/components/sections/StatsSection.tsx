'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Award, Star, UtensilsCrossed } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: '5000',
    suffix: '+',
    label: 'Events Served',
  },
  {
    icon: Award,
    value: '15',
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: Star,
    value: '4.8',
    suffix: '★',
    label: 'Average Rating',
  },
  {
    icon: UtensilsCrossed,
    value: '100',
    suffix: '+',
    label: 'Menu Items',
  },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden dark:bg-[#1a0f00]/30">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-light" />

      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center group rounded-2xl bg-white/80 dark:bg-[#2D1B00]/70 backdrop-blur-sm border-2 border-royal-gold/30 p-5 md:p-6 hover:scale-105 transition-transform duration-300 hover:border-royal-gold/60 hover:shadow-lg hover:shadow-royal-gold/20"
            >
              <div className="relative flex flex-col items-center gap-2 md:gap-3">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-royal-maroon/15 flex items-center justify-center group-hover:bg-royal-maroon/25 transition-colors duration-300 shadow-md shadow-royal-gold/10">
                  <stat.icon className="size-7 md:size-8 text-royal-maroon" />
                </div>

                {/* Value — always shows final number, opacity transitions in */}
                <div className="text-[#1a0f00] font-[var(--font-playfair)]">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-[#2D1B00] text-sm md:text-base font-semibold font-[var(--font-lato)]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

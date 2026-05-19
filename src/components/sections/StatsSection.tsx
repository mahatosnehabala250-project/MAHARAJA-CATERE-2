'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Shield, Star, UtensilsCrossed } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Stats Data                                                         */
/* ------------------------------------------------------------------ */

interface StatItem {
  icon: React.ElementType
  target: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  {
    icon: Award,
    target: 5000,
    suffix: '+',
    label: 'Events Served',
  },
  {
    icon: Shield,
    target: 15,
    suffix: '+',
    label: 'Years of Excellence',
  },
  {
    icon: Star,
    target: 4.8,
    suffix: '',
    label: 'Customer Rating',
  },
  {
    icon: UtensilsCrossed,
    target: 100,
    suffix: '+',
    label: 'Menu Items',
  },
]

/* ------------------------------------------------------------------ */
/*  Counter Hook — Counts up from 0 when in view                      */
/* ------------------------------------------------------------------ */

function useCounter(target: number, isInView: boolean, isDecimal: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, target, isDecimal])

  return count
}

/* ------------------------------------------------------------------ */
/*  Individual Stat Card                                               */
/* ------------------------------------------------------------------ */

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem
  index: number
  isInView: boolean
}) {
  const isDecimal = stat.target % 1 !== 0
  const count = useCounter(stat.target, isInView, isDecimal)
  const IconComponent = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-xl p-6 sm:p-8 text-center group transition-all duration-300 hover:scale-[1.03]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid #D4A017',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: 'rgba(212, 160, 23, 0.15)' }}
        >
          <IconComponent
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: '#D4A017' }}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Number */}
      <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-extrabold tabular-nums" style={{ color: '#D4A017' }}>
        {isDecimal ? count.toFixed(1) : count}
        {stat.suffix}
      </div>

      {/* Label */}
      <p className="mt-2 text-sm sm:text-base font-medium font-[family-name:var(--font-lato)] text-white/90">
        {stat.label}
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  StatsSection — Animated Stats Counter                              */
/*  Appears between ProblemSection and GuideSection                    */
/* ------------------------------------------------------------------ */

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#800020' }}
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Gold decorative bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Subtle background texture */}
      <div className="absolute inset-0 mandala-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span
            className="inline-block text-sm sm:text-base font-semibold uppercase tracking-widest font-[family-name:var(--font-lato)]"
            style={{ color: '#D4A017' }}
          >
            Our Track Record
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white">
            Numbers That Speak for Themselves
          </h2>
          {/* Gold ornamental divider */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span
              className="block h-px w-10"
              style={{ background: 'linear-gradient(to right, transparent, #D4A017)' }}
            />
            <span className="text-sm" style={{ color: '#D4A017' }}>&#10022;</span>
            <span
              className="block h-px w-10"
              style={{ background: 'linear-gradient(to left, transparent, #D4A017)' }}
            />
          </div>
        </motion.div>

        {/* Stats grid — 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

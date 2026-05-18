'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { Calendar, Award, Star, UtensilsCrossed } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: 5000,
    suffix: '+',
    label: 'Events Served',
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: Star,
    value: 4.8,
    suffix: '★',
    label: 'Average Rating',
    isDecimal: true,
  },
  {
    icon: UtensilsCrossed,
    value: 100,
    suffix: '+',
    label: 'Menu Items',
  },
]

function AnimatedNumber({
  value,
  suffix,
  isDecimal = false,
}: {
  value: number
  suffix: string
  isDecimal?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  const spring = useSpring(0, {
    stiffness: 40,
    damping: 25,
    mass: 1,
  })

  const rounded = useTransform(spring, (latest) =>
    isDecimal ? parseFloat(latest.toFixed(1)) : Math.floor(latest)
  )

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayValue(v)
    })
    return unsubscribe
  }, [rounded])

  return (
    <span ref={ref} className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tabular-nums transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
      {isDecimal ? displayValue.toFixed(1) : displayValue}
      <span className="text-3xl md:text-4xl lg:text-5xl">{suffix}</span>
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden dark:bg-[#1a0f00]/30">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-light" />

      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-60" />

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-royal-maroon/20 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-royal-maroon/20 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-royal-maroon/20 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-royal-maroon/20 rounded-br-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center group rounded-2xl bg-white/80 dark:bg-[#2D1B00]/70 backdrop-blur-sm border-2 border-royal-gold/30 p-5 md:p-6 hover:scale-105 transition-transform duration-300 hover:border-royal-gold/60 hover:shadow-lg hover:shadow-royal-gold/20 overflow-hidden"
            >
              {/* Subtle gold gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/5 via-transparent to-royal-gold/10 pointer-events-none" />

              <div className="relative flex flex-col items-center gap-2 md:gap-3">
                {/* Icon - larger and more prominent */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-royal-maroon/15 flex items-center justify-center group-hover:bg-royal-maroon/25 transition-colors duration-300 shadow-md shadow-royal-gold/10">
                  <stat.icon className="size-7 md:size-8 text-royal-maroon" />
                </div>

                {/* Animated Number */}
                <div className="text-royal-maroon font-[var(--font-playfair)] group-hover:drop-shadow-[0_0_8px_rgba(212,160,23,0.4)] transition-all duration-300">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </div>

                {/* Label */}
                <p className="text-royal-maroon/80 text-sm md:text-base font-medium font-[var(--font-lato)]">
                  {stat.label}
                </p>
              </div>

              {/* Gold divider line between stats on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 md:-right-4 w-6 h-px bg-gradient-to-r from-royal-maroon/30 to-royal-maroon/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

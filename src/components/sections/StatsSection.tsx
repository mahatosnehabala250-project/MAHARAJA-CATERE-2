'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function - ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)

      const currentCount = eased * value
      setCount(isDecimal ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, isDecimal])

  return (
    <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-bold tabular-nums">
      {isDecimal ? count.toFixed(1) : count}
      <span className="text-2xl md:text-3xl lg:text-4xl">{suffix}</span>
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
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
              className="text-center group"
            >
              <div className="flex flex-col items-center gap-2 md:gap-3">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-royal-maroon/20 flex items-center justify-center group-hover:bg-royal-maroon/30 transition-colors duration-300">
                  <stat.icon className="size-6 md:size-7 text-royal-maroon" />
                </div>

                {/* Animated Number */}
                <div className="text-royal-maroon font-[var(--font-playfair)]">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

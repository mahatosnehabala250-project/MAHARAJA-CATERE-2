'use client'

import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const springProgress = useSpring(0, { stiffness: 100, damping: 30 })
  const displayPercent = useTransform(springProgress, (v) => Math.round(v))
  const [animatedPercent, setAnimatedPercent] = useState(0)

  useEffect(() => {
    const unsubscribe = displayPercent.on('change', (v) => {
      setAnimatedPercent(v)
    })
    return unsubscribe
  }, [displayPercent])

  useEffect(() => {
    springProgress.set(progress)
  }, [progress, springProgress])

  useEffect(() => {
    const duration = 1200
    const interval = 15
    const steps = duration / interval
    const increment = 100 / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        setIsVisible(false)
        setTimeout(() => onComplete(), 150)
      }
      setProgress(Math.min(current, 100))
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle warm glow behind logo */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full opacity-[0.07]"
            style={{
              background: 'radial-gradient(circle, #D4A017 0%, transparent 70%)',
            }}
          />

          {/* Logo — clean, large, professional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.5, ease: 'easeOut' }}
            className="relative mb-6"
          >
            <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden shadow-lg ring-2 ring-[#D4A017]">
              <Image
                src="/images/logo.jpg"
                alt="Maharaja Caterer"
                width={110}
                height={110}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Brand Name — bold, clean */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-playfair)] text-[#800020]"
          >
            Maharaja Caterer
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="text-[#D4A017] text-sm font-[family-name:var(--font-playfair)] font-semibold mt-1"
          >
            স্বাদে রাজা, সেবায় অপরাজেয়!
          </motion.p>

          {/* Progress Bar — slim, elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="mt-8 w-52 sm:w-64"
          >
            <div className="text-center mb-2">
              <span className="text-[#D4A017] text-sm font-bold tabular-nums font-[family-name:var(--font-lato)]">
                {animatedPercent}%
              </span>
            </div>

            <div className="h-[3px] rounded-full overflow-hidden bg-gray-100">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #800020, #D4A017)',
                  transition: 'width 0.1s ease-out',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

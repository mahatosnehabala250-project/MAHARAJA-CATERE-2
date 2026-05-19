'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'zoom' | 'progress' | 'fade'>('zoom')
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  // Phase 1: Zoom-in reveal (1.8s) → then start progress
  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setPhase('progress')
    }, 1800)
    return () => clearTimeout(zoomTimer)
  }, [])

  // Phase 2: Slowly count up percentage (2.5s)
  useEffect(() => {
    if (phase !== 'progress') return

    const duration = 2500
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        // Phase 3: fade out
        setPhase('fade')
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => handleComplete(), 100)
        }, 600)
      }
      setProgress(Math.min(Math.round(current), 100))
    }, interval)

    return () => clearInterval(timer)
  }, [phase, handleComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle warm ambient glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, rgba(128,0,32,0.03) 40%, transparent 70%)',
            }}
          />

          {/* Logo — zoom in from far away, slow & cinematic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo — slow start, smooth arrival
            }}
            className="relative mb-8"
          >
            {/* Outer golden ring — fades in as logo arrives */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -inset-3 rounded-full"
              style={{
                border: '2px solid rgba(212,160,23,0.25)',
              }}
            />

            {/* Logo circle */}
            <div className="w-[100px] h-[100px] sm:w-[115px] sm:h-[115px] rounded-full overflow-hidden shadow-xl ring-2 ring-[#D4A017]/60">
              <Image
                src="/images/logo.jpg"
                alt="Maharaja Caterer"
                width={115}
                height={115}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Brand Name — fades in gently after logo lands */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-playfair)] text-[#800020]"
          >
            Maharaja Caterer
          </motion.h1>

          {/* Tagline — appears softly */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#D4A017] text-sm font-[family-name:var(--font-playfair)] font-semibold mt-1.5"
          >
            স্বাদে রাজা, সেবায় অপরাজেয়!
          </motion.p>

          {/* Progress Bar — only visible during progress phase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 'zoom' ? 0 : phase === 'progress' ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mt-10 w-56 sm:w-64"
          >
            {/* Percentage counter */}
            <div className="text-center mb-2.5">
              <span className="text-[#D4A017] text-lg font-bold tabular-nums font-[family-name:var(--font-lato)]">
                {progress}%
              </span>
            </div>

            {/* Progress track */}
            <div className="h-[3px] rounded-full overflow-hidden bg-gray-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #800020, #D4A017)',
                }}
              />
            </div>
          </motion.div>

          {/* Subtle breathing pulse on the glow during progress */}
          {phase === 'progress' && (
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.04, 0.08, 0.04],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 60%)',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

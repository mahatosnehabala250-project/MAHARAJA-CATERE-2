'use client'

import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

function GoldParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particles = useMemo<Particle[]>(() => {
    if (!mounted) return []
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }))
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(212,160,23,0.8) 0%, rgba(255,215,0,0.4) 50%, transparent 100%)`,
          }}
          animate={{
            y: [0, -30, -60, -30, 0],
            opacity: [0, 1, 0.6, 1, 0],
            scale: [0.5, 1.2, 0.8, 1.1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Animated progress number using framer-motion spring
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
    const duration = 800
    const interval = 20
    const steps = duration / interval
    const increment = 100 / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        // Brief pause then fade out
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => onComplete(), 200)
        }, 100)
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
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Gold Particles */}
          <GoldParticles />

          {/* Subtle radial glow behind logo */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(212,160,23,0.4) 0%, transparent 70%)',
            }}
          />

          {/* Crown icon with gentle bounce — ornamental SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.7, type: 'spring', stiffness: 200, damping: 15 }}
            className="mb-4"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="drop-shadow-[0_0_12px_rgba(212,160,23,0.5)]">
                {/* Ornamental crown SVG */}
                <path d="M8 36L4 16L14 24L24 10L34 24L44 16L40 36Z" fill="url(#crownGrad)" stroke="#FFD700" strokeWidth="1.5" />
                <circle cx="4" cy="16" r="2.5" fill="#FFD700" />
                <circle cx="24" cy="10" r="2.5" fill="#FFD700" />
                <circle cx="44" cy="16" r="2.5" fill="#FFD700" />
                <rect x="8" y="36" width="32" height="4" rx="1" fill="url(#crownGrad)" stroke="#FFD700" strokeWidth="0.5" />
                {/* Jewels */}
                <circle cx="16" cy="34" r="2" fill="#C41E3A" opacity="0.8" />
                <circle cx="24" cy="34" r="2" fill="#D4A017" opacity="0.9" />
                <circle cx="32" cy="34" r="2" fill="#C41E3A" opacity="0.8" />
                <defs>
                  <linearGradient id="crownGrad" x1="4" y1="10" x2="44" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B8860B" />
                    <stop offset="0.5" stopColor="#D4A017" />
                    <stop offset="1" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 15px rgba(212,160,23,0.3)',
                  '0 0 35px rgba(212,160,23,0.6), 0 0 60px rgba(212,160,23,0.3)',
                  '0 0 15px rgba(212,160,23,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[90px] h-[90px] rounded-full border-[3px] border-royal-gold overflow-hidden relative"
            >
              <Image
                src="/images/logo.jpg"
                alt="Maharaja Caterer Logo"
                fill
                className="object-cover"
                sizes="90px"
                priority
              />
            </motion.div>

            {/* Rotating ring around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full border border-dashed border-royal-gold/40"
            />
          </motion.div>

          {/* Title with gold gradient shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 tracking-wide font-[family-name:var(--font-playfair)] text-royal-maroon"
          >
            Maharaja Caterer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gray-400 mt-2.5 text-xs sm:text-sm tracking-widest uppercase font-[family-name:var(--font-lato)]"
          >
            Loading Royal Experience
          </motion.p>

          {/* Progress section below subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="mt-8 w-56 sm:w-64 md:w-80"
          >
            {/* Progress percentage with animated number */}
            <div className="text-center mb-2">
              <span className="text-royal-gold text-lg sm:text-xl font-bold tabular-nums font-[family-name:var(--font-lato)]">
                {animatedPercent}%
              </span>
            </div>

            {/* Gold progress bar with striking gradient */}
            <div
              className="h-[4px] rounded-full overflow-hidden relative"
              style={{ backgroundColor: 'rgba(212,160,23,0.15)' }}
            >
              <div
                className="h-full rounded-full relative"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #800020, #B8860B, #D4A017, #FFD700, #D4A017, #B8860B, #800020)',
                  transition: 'width 0.1s ease-out',
                  boxShadow: '0 0 12px rgba(212,160,23,0.6), 0 0 24px rgba(255,215,0,0.3)',
                }}
              >
                {/* Shimmer effect on progress bar */}
                <div
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                />
              </div>
              {/* Glow dot at leading edge */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{
                  left: `${progress}%`,
                  transform: `translate(-50%, -50%)`,
                  background: '#FFD700',
                  boxShadow: '0 0 10px rgba(255,215,0,0.8), 0 0 20px rgba(212,160,23,0.5)',
                  transition: 'left 0.1s ease-out',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

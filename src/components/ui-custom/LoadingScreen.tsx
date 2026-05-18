'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }))
  }, [])

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

function AnimatedDots() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      count = (count + 1) % 4
      setDots('.'.repeat(count))
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return <span className="inline-block w-6 text-left">{dots}</span>
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const duration = 2200
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        // Wait a moment then fade out
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => onComplete(), 600)
        }, 300)
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
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#1a0f00' }}
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

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
              className="w-[100px] h-[100px] rounded-full border-[3px] border-royal-gold overflow-hidden relative"
            >
              <Image
                src="/images/logo.jpg"
                alt="Maharaja Caterer Logo"
                fill
                className="object-cover"
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

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gold-gradient text-3xl md:text-4xl font-bold mt-6 tracking-wide"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Maharaja Caterer
          </motion.h1>

          {/* Subtitle with animated dots */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-royal-cream/80 mt-3 text-sm md:text-base tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            Loading Royal Experience<AnimatedDots />
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 md:w-80 h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(212,160,23,0.15)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #B8860B, #D4A017, #FFD700, #D4A017)',
              }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Progress percentage */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-5 text-royal-gold/50 text-xs tracking-wider"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

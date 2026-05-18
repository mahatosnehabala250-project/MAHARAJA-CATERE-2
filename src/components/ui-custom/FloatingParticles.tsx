'use client'

import { motion } from 'framer-motion'

const ROYAL_GOLD = '#D4A017'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

/* Generate particles on the client only — this file is dynamically
   imported with { ssr: false } so Math.random() never runs on the server,
   completely eliminating hydration mismatches. */

const particles: Particle[] = []
for (let i = 0; i < 30; i++) {
  particles.push({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 5,
  })
}

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: ROYAL_GOLD,
            opacity: 0,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

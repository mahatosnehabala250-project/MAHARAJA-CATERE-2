'use client'

import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0

      setIsVisible(scrollTop > 400)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // SVG circle dimensions
  const size = 52
  const strokeWidth = 3
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-[998] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to top"
        >
          {/* Progress ring SVG */}
          <svg
            width={size}
            height={size}
            className="absolute"
            style={{ transform: 'rotate(-90deg)' }}
          >
            {/* Background circle track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(212, 160, 23, 0.2)"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#D4A017"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
            />
          </svg>

          {/* Inner button */}
          <div className="w-12 h-12 rounded-full bg-royal-maroon border-2 border-royal-gold flex items-center justify-center shadow-lg shadow-[#800020]/20 hover:shadow-[0_0_20px_rgba(212,160,23,0.6)] transition-shadow duration-300">
            <ArrowUp className="w-5 h-5 text-royal-gold" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

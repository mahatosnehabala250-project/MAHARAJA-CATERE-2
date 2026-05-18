'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const SESSION_KEY = 'maharaja-reviews-dismissed'

interface Review {
  stars: number
  quote: string
  name: string
  eventType: string
}

const reviews: Review[] = [
  { stars: 5, quote: 'Amazing food and service!', name: 'Suman', eventType: 'Wedding' },
  { stars: 5, quote: 'Best caterer in Purulia', name: 'Anita', eventType: 'Birthday' },
  { stars: 5, quote: 'Professional and delicious', name: 'Rajesh', eventType: 'Corporate' },
  { stars: 5, quote: 'Made our day special!', name: 'Priya', eventType: 'Reception' },
  { stars: 5, quote: 'Exceeded all expectations', name: 'Amit', eventType: 'Engagement' },
]

function getInitialDismissed(): boolean {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(SESSION_KEY) === 'true'
  }
  return false
}

export default function GuestReviewsWidget() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDismissed, setIsDismissed] = useState(getInitialDismissed)

  const handleDismiss = useCallback(() => {
    setIsDismissed(true)
    sessionStorage.setItem(SESSION_KEY, 'true')
  }, [])

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isDismissed) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isDismissed])

  if (isDismissed) return null

  const review = reviews[currentIndex]

  return (
    <div className="hidden md:block fixed bottom-6 left-6 z-[996]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 3 }}
        className="relative w-72 bg-[#FFF8E7]/95 backdrop-blur-md border border-royal-gold/40 rounded-xl shadow-xl p-4"
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-royal-maroon text-royal-cream flex items-center justify-center shadow-md hover:bg-royal-maroon/80 transition-colors"
          aria-label="Dismiss reviews widget"
        >
          <X className="w-3 h-3" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Star rating */}
            <div className="flex items-center gap-0.5 mb-2">
              {Array.from({ length: review.stars }).map((_, i) => (
                <span key={i} className="text-royal-gold text-sm">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-royal-maroon text-sm font-medium font-[family-name:var(--font-lato)] leading-snug mb-2 line-clamp-2">
              &ldquo;{review.quote}&rdquo;
            </p>

            {/* Reviewer info */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-royal-gold/20 flex items-center justify-center text-royal-gold text-xs font-bold">
                {review.name[0]}
              </div>
              <div>
                <p className="text-royal-maroon text-xs font-semibold font-[family-name:var(--font-lato)]">
                  {review.name}
                </p>
                <p className="text-royal-maroon/50 text-[10px] font-[family-name:var(--font-lato)]">
                  {review.eventType}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View All Reviews link */}
        <a
          href="#reviews"
          className="mt-3 block text-center text-royal-gold text-xs font-semibold font-[family-name:var(--font-lato)] hover:underline transition-colors border-t border-royal-gold/20 pt-3"
        >
          View All Reviews →
        </a>
      </motion.div>
    </div>
  )
}

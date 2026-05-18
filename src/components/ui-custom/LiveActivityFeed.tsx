'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const SESSION_DISMISS_KEY = 'maharaja-activity-dismissed'
const SESSION_COUNT_KEY = 'maharaja-activity-count'

interface ActivityItem {
  id: string
  icon: string
  message: string
  time: string
}

const activities: ActivityItem[] = [
  {
    id: 'act-1',
    icon: '🎉',
    message: 'Someone in Purulia just booked a Wedding package!',
    time: 'Just now',
  },
  {
    id: 'act-2',
    icon: '⭐',
    message: "5-star review from Rajesh K. — 'Amazing food!'",
    time: '2 mins ago',
  },
  {
    id: 'act-3',
    icon: '🍽️',
    message: 'Corporate lunch booked for 200 guests in Purulia',
    time: '5 mins ago',
  },
  {
    id: 'act-4',
    icon: '💍',
    message: 'Wedding reception confirmed for March 2025',
    time: '8 mins ago',
  },
  {
    id: 'act-5',
    icon: '🌸',
    message: 'Durga Puja catering booked — 500 plates!',
    time: '12 mins ago',
  },
  {
    id: 'act-6',
    icon: '📞',
    message: 'New inquiry from Asansol for Birthday party',
    time: '15 mins ago',
  },
]

function getInitialState(): { dismissed: boolean; count: number } {
  if (typeof window === 'undefined') {
    return { dismissed: false, count: 0 }
  }

  const currentCount = (() => {
    const stored = sessionStorage.getItem(SESSION_COUNT_KEY)
    return stored ? parseInt(stored, 10) : 0
  })()

  // Increment the view count on each mount
  const newCount = currentCount + 1
  sessionStorage.setItem(SESSION_COUNT_KEY, String(newCount))

  // Auto-dismiss after 5 views
  if (newCount >= 5) {
    sessionStorage.setItem(SESSION_DISMISS_KEY, 'true')
    return { dismissed: true, count: newCount }
  }

  // Check if already manually dismissed
  const isDismissed = sessionStorage.getItem(SESSION_DISMISS_KEY) === 'true'
  return { dismissed: isDismissed, count: newCount }
}

export default function LiveActivityFeed() {
  const [initialState] = useState(getInitialState)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDismissed, setIsDismissed] = useState(initialState.dismissed)

  const handleDismiss = useCallback(() => {
    setIsDismissed(true)
    sessionStorage.setItem(SESSION_DISMISS_KEY, 'true')
  }, [])

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (isDismissed) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isDismissed])

  if (isDismissed) return null

  const activity = activities[currentIndex]

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-0 sm:left-6 right-0 sm:right-auto z-[996] px-3 sm:px-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 5 }}
        className="relative w-full sm:max-w-sm bg-royal-maroon/90 backdrop-blur-md border-l-[3px] border-l-royal-gold border border-royal-gold/20 rounded-lg sm:rounded-xl shadow-2xl shadow-royal-maroon/30 overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-royal-maroon/80 text-royal-cream/80 flex items-center justify-center hover:bg-royal-maroon-light hover:text-white transition-colors z-10"
          aria-label="Dismiss activity feed"
        >
          <X className="w-3 h-3" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex items-center gap-3 p-3 sm:p-4"
          >
            {/* Gold icon */}
            <span className="flex-shrink-0 text-xl sm:text-2xl" role="img" aria-hidden="true">
              {activity.icon}
            </span>

            {/* Message content */}
            <div className="flex-1 min-w-0 pr-5">
              <p className="text-royal-cream/95 text-sm font-[family-name:var(--font-lato)] leading-snug">
                {activity.message}
              </p>
              <p className="text-royal-gold/60 text-[10px] sm:text-xs font-[family-name:var(--font-lato)] mt-1">
                {activity.time}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

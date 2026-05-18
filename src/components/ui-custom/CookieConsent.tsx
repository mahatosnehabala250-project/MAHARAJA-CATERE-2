'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'maharaja-cookie-consent'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed top-14 left-0 right-0 w-full z-[998] sm:top-auto sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-sm sm:rounded-xl"
        >
          {/* Gold gradient top border on mobile */}
          <div
            className="h-0.5 sm:hidden"
            style={{ background: 'linear-gradient(to right, #B8860B, #D4A017, #FFD700, #D4A017, #B8860B)' }}
          />

          <div className="relative bg-[#1a0f00]/95 backdrop-blur-md border border-royal-gold/30 rounded-none sm:rounded-xl shadow-lg p-3 sm:p-5">
            {/* Close button — desktop only */}
            <button
              onClick={handleDismiss}
              className="hidden sm:flex absolute top-2 right-2 w-8 h-8 rounded-full bg-royal-cream/10 hover:bg-royal-cream/20 items-center justify-center transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-royal-cream/60" />
            </button>

            {/* Mobile: compact single line */}
            <div className="flex sm:hidden items-center gap-2">
              <Cookie className="w-4 h-4 text-royal-gold shrink-0" />
              <p className="text-xs text-royal-cream/80 font-[family-name:var(--font-lato)] flex-1 min-w-0 truncate">
                We use cookies to enhance your experience.
              </p>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-full border border-royal-cream/20 text-royal-cream/70 text-xs font-medium transition-all duration-300 hover:border-royal-cream/40 hover:text-royal-cream font-[family-name:var(--font-lato)] shrink-0"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-3 py-1.5 rounded-full text-white text-xs font-medium transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/20 font-[family-name:var(--font-lato)] shrink-0"
                style={{ background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)' }}
              >
                Accept
              </button>
            </div>

            {/* Desktop: card style with icon and description */}
            <div className="hidden sm:flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-royal-gold/15 flex items-center justify-center">
                <Cookie className="w-4 h-4 text-royal-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-royal-cream/80 font-[family-name:var(--font-lato)] leading-relaxed mb-3">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDecline}
                    className="min-w-[80px] min-h-[44px] px-5 py-2.5 rounded-full border border-royal-cream/20 text-royal-cream/70 font-medium text-xs transition-all duration-300 hover:border-royal-cream/40 hover:text-royal-cream font-[family-name:var(--font-lato)]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="min-w-[80px] min-h-[44px] px-5 py-2.5 rounded-full text-white font-medium text-xs transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/20 font-[family-name:var(--font-lato)]"
                    style={{ background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)' }}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

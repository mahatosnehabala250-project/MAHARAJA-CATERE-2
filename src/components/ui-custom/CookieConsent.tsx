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
      }, 5000)
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-24 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-sm z-[998]"
        >
          <div className="relative bg-[#1a0f00]/95 backdrop-blur-md border border-royal-gold/30 rounded-xl shadow-2xl shadow-black/20 p-4 sm:p-5">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-royal-cream/10 hover:bg-royal-cream/20 flex items-center justify-center transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-royal-cream/60" />
            </button>

            <div className="flex items-start gap-3">
              {/* Cookie icon */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-royal-gold/15 flex items-center justify-center mt-0.5">
                <Cookie className="w-4 h-4 text-royal-gold" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Text */}
                <p className="text-xs text-royal-cream/80 font-[family-name:var(--font-lato)] leading-relaxed mb-3">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 rounded-full border border-royal-cream/20 text-royal-cream/70 font-medium text-xs transition-all duration-300 hover:border-royal-cream/40 hover:text-royal-cream font-[family-name:var(--font-lato)]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 rounded-full text-white font-medium text-xs transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/20 font-[family-name:var(--font-lato)]"
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

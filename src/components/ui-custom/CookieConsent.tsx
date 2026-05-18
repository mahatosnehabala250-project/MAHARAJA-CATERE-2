'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'maharaja-cookie-consent'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-md z-[999]"
        >
          <div className="bg-royal-cream border-2 border-royal-gold/40 rounded-2xl shadow-2xl shadow-black/15 p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Cookie icon */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-royal-gold" />
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-royal-maroon/80 font-[family-name:var(--font-lato)] text-center sm:text-left flex-1 leading-relaxed">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-5 py-2.5 rounded-full border-2 border-royal-maroon/30 text-royal-maroon font-semibold text-sm transition-all duration-300 hover:border-royal-maroon/60 hover:bg-royal-maroon/5 font-[family-name:var(--font-lato)]"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 font-[family-name:var(--font-lato)]"
                  style={{ background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)' }}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

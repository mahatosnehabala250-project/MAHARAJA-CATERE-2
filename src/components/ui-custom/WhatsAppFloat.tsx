'use client'

import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000)
    const hideTooltip = setTimeout(() => setShowTooltip(false), 9000)
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltip)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[999] flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="hidden sm:block bg-white rounded-lg shadow-xl px-4 py-3 max-w-[200px] border border-green-200"
              >
                <p className="text-sm font-semibold text-gray-800">Chat with us!</p>
                <p className="text-xs text-gray-500 mt-1">We typically reply within minutes</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918945005456?text=Hello%20Maharaja%20Caterer!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            {/* Badge */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-royal-maroon text-[10px] font-bold text-white ring-2 ring-white">
              1
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

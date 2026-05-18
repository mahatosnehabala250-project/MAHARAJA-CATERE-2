'use client'

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

          {/* WhatsApp Button with real WhatsApp icon */}
          <a
            href="https://wa.me/918945005456?text=Hello%20Maharaja%20Caterer!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            {/* Real WhatsApp SVG Icon */}
            <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.728 31.048 12.764 32 16.004 32 24.826 32 32 24.824 32 16S24.826 0 16.004 0zm9.334 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.66-1.216-4.748-1.97-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.79s1.194-3.398 1.618-3.864c.39-.428.852-.536 1.136-.536.282 0 .566.002.812.016.262.012.614-.1.96.732.356.854 1.21 2.95 1.316 3.164.108.214.18.466.036.748-.136.282-.204.458-.408.706-.214.248-.448.554-.638.744-.214.214-.436.446-.188.876.248.428 1.104 1.82 2.37 2.948 1.63 1.452 3.004 1.902 3.432 2.116.428.214.676.18.924-.108.248-.288 1.064-1.24 1.348-1.666.282-.428.566-.356.952-.214.39.142 2.478 1.168 2.902 1.382.428.214.712.322.818.498.108.178.108 1.022-.282 2.12z"/>
            </svg>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

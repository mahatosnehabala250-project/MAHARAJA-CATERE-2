'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Phone, MessageCircle, Mail, Calendar } from 'lucide-react'

interface ActionItem {
  id: string
  icon: typeof Phone
  href: string
  label: string
  bgColor: string
  hoverBgColor: string
}

const actions: ActionItem[] = [
  {
    id: 'phone',
    icon: Phone,
    href: 'tel:+918945005456',
    label: 'Call Us',
    bgColor: 'bg-royal-maroon',
    hoverBgColor: 'hover:bg-royal-maroon-light',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    href: 'https://wa.me/918945005456',
    label: 'WhatsApp',
    bgColor: 'bg-[#25D366]',
    hoverBgColor: 'hover:bg-[#1EB954]',
  },
  {
    id: 'email',
    icon: Mail,
    href: 'mailto:maharajaCaterer104@gmail.com',
    label: 'Email Us',
    bgColor: 'bg-royal-gold',
    hoverBgColor: 'hover:bg-royal-gold-dark',
  },
  {
    id: 'calendar',
    icon: Calendar,
    href: '#contact',
    label: 'Book Event',
    bgColor: 'bg-royal-cream',
    hoverBgColor: 'hover:bg-[#F5E6C8]',
  },
]

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoClose = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 5000)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  // Set auto-close timer when menu opens
  useEffect(() => {
    if (isOpen) {
      startAutoClose()
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isOpen, startAutoClose])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return (
    <div className="hidden md:block fixed bottom-6 left-6 z-[997]">
      <div className="flex flex-col items-center gap-3">
        {/* Action buttons */}
        <AnimatePresence>
          {isOpen && (
            <>
              {actions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  className="relative group"
                >
                  {/* Tooltip label */}
                  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-royal-maroon text-royal-cream text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-[family-name:var(--font-lato)] shadow-lg">
                    {action.label}
                    {/* Arrow */}
                    <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-royal-maroon" />
                  </span>

                  <a
                    href={action.href}
                    target={action.id === 'whatsapp' ? '_blank' : undefined}
                    rel={action.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className={`w-12 h-12 rounded-full ${action.bgColor} ${action.hoverBgColor} flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl`}
                    onMouseEnter={startAutoClose}
                    onClick={() => setIsOpen(false)}
                  >
                    <action.icon
                      className={`w-5 h-5 ${
                        action.id === 'calendar' ? 'text-royal-maroon' : 'text-white'
                      } ${action.id === 'email' ? 'text-royal-maroon' : ''}`}
                    />
                  </a>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Main FAB button */}
        <motion.button
          onClick={toggleMenu}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-royal-gold-dark via-royal-gold to-royal-gold-light flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close action menu' : 'Open action menu'}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Plus className="w-6 h-6 text-royal-maroon" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}

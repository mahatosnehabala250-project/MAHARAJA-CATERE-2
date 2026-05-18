'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Phone, UtensilsCrossed, Calendar } from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  delay: number
}

const chatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    text: '👋 Namaste! Welcome to Maharaja Caterer. How can we help you?',
    delay: 800,
  },
  {
    id: 'msg-2',
    text: 'We offer: Wedding Catering • Corporate Events • Birthday Parties • Religious Ceremonies',
    delay: 1600,
  },
  {
    id: 'msg-3',
    text: '📞 Call us: +91 89450 05456 or click below to chat on WhatsApp!',
    delay: 2400,
  },
]

export default function WhatsAppChatPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [visibleMessages, setVisibleMessages] = useState<string[]>([])
  const [showTyping, setShowTyping] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  const openChat = useCallback(() => {
    setIsOpen(true)
    setVisibleMessages([])
    setHasTriggered(true)
  }, [])

  const closeChat = useCallback(() => {
    setIsOpen(false)
    setVisibleMessages([])
  }, [])

  // Auto-show the trigger after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTriggered(true)
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  // Stagger message appearance
  useEffect(() => {
    if (!isOpen) return

    const timeouts: ReturnType<typeof setTimeout>[] = []

    chatMessages.forEach((msg, index) => {
      // Show typing indicator before each message
      const typingDelay = msg.delay - 600
      if (typingDelay > 0) {
        timeouts.push(
          setTimeout(() => {
            setShowTyping(true)
          }, typingDelay)
        )
      }

      timeouts.push(
        setTimeout(() => {
          setShowTyping(false)
          setVisibleMessages((prev) => [...prev, msg.id])
        }, msg.delay)
      )
    })

    return () => timeouts.forEach(clearTimeout)
  }, [isOpen])

  return (
    <div className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-[998]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chat-popup"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="w-[320px] sm:w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-green-200"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-playfair)]">
                MC
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-semibold font-[family-name:var(--font-lato)] truncate">
                  Maharaja Caterer
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-green-200 text-xs font-[family-name:var(--font-lato)]">
                    Online now
                  </span>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close chat popup"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Chat area */}
            <div className="bg-[#ECE5DD] p-4 min-h-[220px] max-h-[300px] overflow-y-auto space-y-3"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b89a' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {/* Date indicator */}
              <div className="text-center">
                <span className="inline-block bg-white/80 text-gray-500 text-[10px] px-3 py-1 rounded-lg font-[family-name:var(--font-lato)] shadow-sm">
                  Today
                </span>
              </div>

              {/* Messages */}
              <AnimatePresence>
                {chatMessages.map((msg) =>
                  visibleMessages.includes(msg.id) ? (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="flex justify-start"
                    >
                      <div className="relative bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                        <p className="text-gray-800 text-sm font-[family-name:var(--font-lato)] leading-relaxed">
                          {msg.text}
                        </p>
                        <span className="block text-right text-[10px] text-gray-400 mt-1 font-[family-name:var(--font-lato)]">
                          {new Date().toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          })}
                        </span>
                        {/* WhatsApp-style tail */}
                        <div className="absolute -left-2 top-0 w-2 h-3 overflow-hidden">
                          <div className="w-3 h-3 bg-white rotate-45 transform origin-top-right" />
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick reply buttons */}
            <div className="bg-[#ECE5DD] px-4 pb-4 pt-1">
              <div className="flex flex-wrap gap-2">
                <a
                  href="#contact"
                  onClick={closeChat}
                  className="inline-flex items-center gap-1.5 bg-royal-maroon hover:bg-royal-maroon-light text-royal-cream text-xs font-semibold font-[family-name:var(--font-lato)] px-3 py-2 rounded-full transition-colors shadow-sm"
                  aria-label="Book an event"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Event
                </a>
                <a
                  href="#menu"
                  onClick={closeChat}
                  className="inline-flex items-center gap-1.5 bg-royal-gold hover:bg-royal-gold-light text-royal-maroon text-xs font-semibold font-[family-name:var(--font-lato)] px-3 py-2 rounded-full transition-colors shadow-sm"
                  aria-label="View menu"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  View Menu
                </a>
                <a
                  href="https://wa.me/918945005456?text=Hello%20Maharaja%20Caterer!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold font-[family-name:var(--font-lato)] px-3 py-2 rounded-full transition-colors shadow-sm"
                  aria-label="Chat on WhatsApp"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        ) : hasTriggered ? (
          <motion.button
            key="chat-trigger"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={openChat}
            className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 animate-gentle-bounce group"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-wave" />
            <span className="text-sm font-semibold font-[family-name:var(--font-lato)]">
              Chat with us
            </span>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

function AnimatedDigit({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 120, damping: 25 })
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => {
      setDisplayValue(Math.round(v))
    })
    return unsubscribe
  }, [spring])

  return (
    <span className="tabular-nums inline-block">
      {displayValue}
    </span>
  )
}

function computeTimeRemaining(eventDate: string): { days: number; hours: number; minutes: number; isValid: boolean } {
  if (!eventDate) {
    return { days: 0, hours: 0, minutes: 0, isValid: true }
  }

  const target = new Date(eventDate + 'T00:00:00')
  const now = new Date()
  const diff = target.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, isValid: false }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return { days, hours, minutes, isValid: true }
}

export default function EventCountdown() {
  const [eventDate, setEventDate] = useState<string>('')
  const [tick, setTick] = useState(0)

  // Tick every minute to refresh countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1)
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  // Derive time remaining from eventDate and tick
  const { days, hours, minutes, isValid } = useMemo(
    () => computeTimeRemaining(eventDate),
    [eventDate, tick]
  )

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventDate(e.target.value)
  }

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const hasValidCountdown = eventDate && isValid && days > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md mx-auto">
        <div className="bg-royal-cream border-2 border-royal-gold/30 rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-royal-gold/20 bg-gradient-to-r from-royal-maroon/5 via-transparent to-royal-maroon/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-royal-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)]">
                Planning Your Event?
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {/* Date input */}
            <div>
              <label
                htmlFor="event-date"
                className="block text-sm font-semibold text-royal-maroon font-[family-name:var(--font-lato)] mb-2"
              >
                Select Your Event Date
              </label>
              <div className="relative">
                <input
                  id="event-date"
                  type="date"
                  min={getMinDate()}
                  value={eventDate}
                  onChange={handleDateChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-royal-gold/30 bg-white text-royal-maroon font-semibold font-[family-name:var(--font-lato)] focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-200 [color-scheme:light]"
                />
                {!eventDate && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Clock className="w-5 h-5 text-royal-gold/40" />
                  </div>
                )}
              </div>
            </div>

            {/* Error state */}
            <AnimatePresence>
              {!isValid && eventDate && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-500 text-sm font-[family-name:var(--font-lato)]"
                >
                  Please select a future date for your event
                </motion.p>
              )}
            </AnimatePresence>

            {/* Countdown display */}
            <AnimatePresence mode="wait">
              {hasValidCountdown ? (
                <motion.div
                  key="countdown"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-5 text-center border border-royal-gold/20"
                  style={{ background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.08), rgba(212, 160, 23, 0.12), rgba(255, 215, 0, 0.08))' }}
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-[family-name:var(--font-lato)] mb-3">
                    Time Until Your Big Day
                  </p>

                  {/* Time blocks */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-royal-maroon/10 border border-royal-gold/20 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-royal-maroon font-[family-name:var(--font-playfair)]">
                          <AnimatedDigit value={days} />
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-[family-name:var(--font-lato)] mt-1.5 uppercase tracking-wider">
                        Days
                      </span>
                    </div>

                    <span className="text-2xl font-bold text-royal-gold mt-[-20px]">:</span>

                    <div className="flex flex-col items-center">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-royal-maroon/10 border border-royal-gold/20 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-royal-maroon font-[family-name:var(--font-playfair)]">
                          <AnimatedDigit value={hours} />
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-[family-name:var(--font-lato)] mt-1.5 uppercase tracking-wider">
                        Hours
                      </span>
                    </div>

                    <span className="text-2xl font-bold text-royal-gold mt-[-20px]">:</span>

                    <div className="flex flex-col items-center">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-royal-maroon/10 border border-royal-gold/20 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-royal-maroon font-[family-name:var(--font-playfair)]">
                          <AnimatedDigit value={minutes} />
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-[family-name:var(--font-lato)] mt-1.5 uppercase tracking-wider">
                        Mins
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-royal-maroon/70 font-[family-name:var(--font-lato)]">
                    {days} days, {hours} hours until your big day!
                  </p>
                </motion.div>
              ) : !eventDate ? (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl p-5 text-center border border-royal-gold/15 bg-royal-gold/5"
                >
                  <Calendar className="w-8 h-8 text-royal-gold/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-lato)]">
                    Pick a date to see the countdown to your special event
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Get a Free Quote button */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-[1.02] font-[family-name:var(--font-lato)] group"
              style={{ background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)' }}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

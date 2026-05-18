'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  image: string
  title: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/food-1.png',
    title: 'Royal Wedding Feast',
  },
  {
    id: 2,
    image: '/images/food-desserts.png',
    title: 'Traditional Bengali Spread',
  },
  {
    id: 3,
    image: '/images/food-tandoori.png',
    title: 'Corporate Excellence',
  },
  {
    id: 4,
    image: '/images/event-wedding.png',
    title: 'Garden Party Setup',
  },
  {
    id: 5,
    image: '/images/event-reception.png',
    title: 'Grand Reception',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

const slideTransition = {
  x: { type: 'tween', ease: 'easeInOut', duration: 0.6 },
  opacity: { duration: 0.5 },
}

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard mount pattern for hydration safety
    setMounted(true)
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    },
    [currentIndex]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-play every 4 seconds
  useEffect(() => {
    if (isPaused || !mounted) return
    const timer = setInterval(goNext, 4000)
    return () => clearInterval(timer)
  }, [isPaused, mounted, goNext])

  if (!mounted) {
    return (
      <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[21/7] bg-royal-maroon overflow-hidden" />
    )
  }

  return (
    <div
      className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[21/7] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image carousel showcasing our food and events"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />

          {/* Gold gradient overlay at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Subtle dark overlay on top for depth */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Title overlay at bottom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-12 sm:bottom-16 left-0 right-0 text-center z-10 px-4"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] text-shadow-gold">
            {slides[currentIndex].title}
          </h3>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal-gold/20 backdrop-blur-sm border border-royal-gold/40 flex items-center justify-center text-royal-gold hover:bg-royal-gold/40 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal-gold/20 backdrop-blur-sm border border-royal-gold/40 flex items-center justify-center text-royal-gold hover:bg-royal-gold/40 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`
              rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-royal-gold shadow-[0_0_8px_rgba(212,160,23,0.6)]'
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-royal-gold/70 border border-white/30'
              }
            `}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Pause indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white/80 text-xs font-[family-name:var(--font-lato)]"
          >
            <div className="w-2 h-2 rounded-full bg-royal-gold animate-pulse" />
            Paused
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

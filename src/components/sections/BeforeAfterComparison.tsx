'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

interface ComparisonCard {
  id: string
  title: string
  beforeGradient: string
  afterGradient: string
  beforeLabel: string
  afterLabel: string
}

const comparisons: ComparisonCard[] = [
  {
    id: 'wedding-venue',
    title: 'Wedding Venue',
    beforeGradient: 'from-gray-300 via-gray-200 to-gray-300',
    afterGradient: 'from-royal-gold-dark via-royal-gold to-royal-gold-light',
    beforeLabel: 'Empty Hall',
    afterLabel: 'Royal Setup',
  },
  {
    id: 'outdoor-garden',
    title: 'Outdoor Garden',
    beforeGradient: 'from-green-800 via-green-700 to-green-800',
    afterGradient: 'from-royal-maroon via-royal-maroon-light to-royal-gold-dark',
    beforeLabel: 'Plain Garden',
    afterLabel: 'Decorated Venue',
  },
  {
    id: 'banquet-hall',
    title: 'Banquet Hall',
    beforeGradient: 'from-slate-300 via-slate-200 to-slate-300',
    afterGradient: 'from-royal-maroon via-[#5A0015] to-royal-gold',
    beforeLabel: 'Basic Setup',
    afterLabel: 'Grand Celebration',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function ComparisonSlider({ card }: { card: ComparisonCard }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      handleMove(e.clientX)
    },
    [handleMove]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true)
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <div className="group relative rounded-2xl overflow-hidden border-2 border-royal-gold/20 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-royal-gold/50 hover:shadow-xl hover:shadow-royal-gold/10 hover:-translate-y-1">
      {/* Card title */}
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-xl md:text-2xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] text-center">
          {card.title}
        </h3>
      </div>

      {/* Interactive slider comparison */}
      <div
        ref={containerRef}
        className="relative mx-4 mb-4 rounded-xl overflow-hidden aspect-[4/3] select-none cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="slider"
        aria-label={`Before and after comparison for ${card.title}. Drag to reveal.`}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* After side (full width, behind) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${card.afterGradient} flex flex-col items-center justify-center`}>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-royal-gold/40">
            <span className="text-white font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-lato)]">
              After
            </span>
          </div>
          <p className="mt-3 text-white/90 text-sm font-[family-name:var(--font-lato)]">
            {card.afterLabel}
          </p>
          {/* Decorated venue icon */}
          <svg className="w-16 h-16 mt-3 text-white/60" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="20" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 20 L32 8 L56 20" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="20" cy="14" r="3" fill="#FFD700" />
            <circle cx="32" cy="10" r="4" fill="#FFD700" />
            <circle cx="44" cy="14" r="3" fill="#FFD700" />
            <rect x="14" y="26" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="28" y="26" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="42" y="26" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="2" />
            <path d="M14 42 L14 52" stroke="#FFD700" strokeWidth="1" />
            <path d="M50 42 L50 52" stroke="#FFD700" strokeWidth="1" />
            <circle cx="14" cy="42" r="2" fill="#FFD700" />
            <circle cx="50" cy="42" r="2" fill="#FFD700" />
          </svg>
        </div>

        {/* Before side (clipped, on top) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.beforeGradient} flex flex-col items-center justify-center`}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <span className="text-gray-600 font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-lato)]">
              Before
            </span>
          </div>
          <p className="mt-3 text-gray-500 text-sm font-[family-name:var(--font-lato)]">
            {card.beforeLabel}
          </p>
          {/* Plain venue icon placeholder */}
          <svg className="w-16 h-16 mt-3 text-gray-400/50" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="20" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="14" y="26" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="28" y="26" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="42" y="26" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Vertical gold divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-0.5 h-full bg-gradient-to-b from-royal-gold via-royal-gold-light to-royal-gold shadow-[0_0_8px_rgba(212,160,23,0.6)]" />

          {/* Circular gold handle */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-royal-gold-dark via-royal-gold to-royal-gold-light border-2 border-white shadow-lg flex items-center justify-center transition-transform duration-150 ${isDragging ? 'scale-110' : 'scale-100'}`}
            style={{ boxShadow: '0 0 12px rgba(212,160,23,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}
          >
            {/* Left/Right arrows in handle */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M6 10L3 10M3 10L5.5 7.5M3 10L5.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 10L17 10M17 10L14.5 7.5M17 10L14.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Floating labels */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-[family-name:var(--font-lato)]">
            Before
          </span>
        </div>
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="bg-royal-gold/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-[family-name:var(--font-lato)]">
            After
          </span>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterComparison() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="transformation"
      className="relative py-20 md:py-28 section-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-50" />

      {/* Decorative corner SVGs */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-25">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-25 rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-25 -rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-25 rotate-180">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>

      {/* Decorative radial glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-royal-maroon/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            The Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            From Setup to Celebration
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-muted-foreground text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Witness how we transform ordinary venues into extraordinary celebrations
          </p>
          <p className="mt-2 text-royal-gold/70 text-sm font-[family-name:var(--font-lato)]">
            ↕ Drag the slider to compare before &amp; after
          </p>
        </motion.div>

        {/* Comparison cards with interactive sliders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {comparisons.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
            >
              <ComparisonSlider card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

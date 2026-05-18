'use client'

import dynamic from 'next/dynamic'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Calendar, UtensilsCrossed, Clock, ChevronRight } from 'lucide-react'

const FloatingParticles = dynamic(() => import('@/components/ui-custom/FloatingParticles'), { ssr: false })

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROYAL_GOLD = '#D4A017'
const ROYAL_MAROON = '#800020'
const ROYAL_CREAM = '#FFF8E7'

const STATS = [
  { label: 'Events', value: '5000+', icon: Calendar },
  { label: 'Years', value: '15+', icon: Clock },
  { label: 'Rating', value: '4.8★', icon: Star },
  { label: 'Menu Items', value: '100+', icon: UtensilsCrossed },
] as const

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const logoPulse = {
  animate: {
    boxShadow: [
      '0 0 8px rgba(212,160,23,0.3)',
      '0 0 24px rgba(212,160,23,0.6), 0 0 48px rgba(212,160,23,0.25)',
      '0 0 8px rgba(212,160,23,0.3)',
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  },
}

/* ------------------------------------------------------------------ */
/*  Mandala corner ornament                                            */
/* ------------------------------------------------------------------ */

function MandalaCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const posClasses: Record<string, string> = {
    tl: 'top-6 left-6 rotate-0',
    tr: 'top-6 right-6 rotate-90',
    bl: 'bottom-6 left-6 -rotate-90',
    br: 'bottom-6 right-6 rotate-180',
  }

  return (
    <div
      className={`pointer-events-none absolute ${posClasses[position]} hidden md:block`}
      aria-hidden="true"
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        {/* Outer arc */}
        <path
          d="M0 0 L30 0 C30 16.5 16.5 30 0 30 Z"
          stroke={ROYAL_GOLD}
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        {/* Inner arc */}
        <path
          d="M0 0 L20 0 C20 11 11 20 0 20 Z"
          stroke={ROYAL_GOLD}
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />
        {/* Decorative dots */}
        <circle cx="8" cy="8" r="2" fill={ROYAL_GOLD} opacity="0.25" />
        <circle cx="16" cy="3" r="1.5" fill={ROYAL_GOLD} opacity="0.2" />
        <circle cx="3" cy="16" r="1.5" fill={ROYAL_GOLD} opacity="0.2" />
        {/* Petal-like curves */}
        <path
          d="M5 0 Q10 5 0 10"
          stroke={ROYAL_GOLD}
          strokeWidth="0.6"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M10 0 Q15 5 0 15"
          stroke={ROYAL_GOLD}
          strokeWidth="0.5"
          fill="none"
          opacity="0.15"
        />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Stat item                                                          */
/* ------------------------------------------------------------------ */

function StatItem({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ComponentType<{ className?: string; size?: number }>
  value: string
  label: string
  index: number
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-2 text-center sm:gap-3"
    >
      <Icon size={18} className="shrink-0" style={{ color: ROYAL_GOLD }} />
      <div className="flex flex-col">
        <span
          className="text-lg font-bold leading-tight sm:text-xl"
          style={{ color: ROYAL_GOLD }}
        >
          {value}
        </span>
        <span
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: ROYAL_CREAM, opacity: 0.8 }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main HeroSection                                                   */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const controls = useAnimation()
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const handleExploreMenu = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const target = document.querySelector('#menu')
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    },
    [],
  )

  const handleBookEvent = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const target = document.querySelector('#contact')
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    },
    [],
  )

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* ---- Background image with parallax ---- */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/hero-bg.png"
          alt="Maharaja Caterer — royal feast setting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,15,0,0.75) 0%, rgba(45,27,0,0.65) 40%, rgba(128,0,32,0.55) 70%, rgba(26,15,0,0.85) 100%)',
          }}
        />
      </motion.div>

      {/* ---- Floating particles ---- */}
      <FloatingParticles />

      {/* ---- Mandala corners ---- */}
      <MandalaCorner position="tl" />
      <MandalaCorner position="tr" />
      <MandalaCorner position="bl" />
      <MandalaCorner position="br" />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-20 pb-36 text-center sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.div
            variants={logoPulse}
            animate="animate"
            className="relative h-20 w-20 overflow-hidden rounded-full border-2 sm:h-24 sm:w-24"
            style={{ borderColor: ROYAL_GOLD }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Maharaja Caterer logo"
              fill
              priority
              className="object-cover"
              sizes="96px"
            />
          </motion.div>
        </motion.div>

        {/* Welcome text */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] sm:text-base"
          style={{ color: ROYAL_GOLD }}
        >
          ✦ Welcome to ✦
        </motion.p>

        {/* Main heading */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gold-gradient mb-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Maharaja Caterer
        </motion.h1>

        {/* Sub heading */}
        <motion.h2
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-xl font-medium sm:text-2xl md:text-3xl"
          style={{ color: ROYAL_CREAM }}
        >
          Purulia&apos;s Finest Catering &amp; Event Service
        </motion.h2>

        {/* Gold divider line between heading and tagline */}
        <motion.div
          custom={3.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="block h-px w-10 sm:w-16" style={{ background: `linear-gradient(to right, transparent, ${ROYAL_GOLD})` }} />
          <span className="block h-1.5 w-1.5 rotate-45" style={{ backgroundColor: ROYAL_GOLD }} />
          <span className="block h-px w-10 sm:w-16" style={{ background: `linear-gradient(to left, transparent, ${ROYAL_GOLD})` }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-2 text-lg italic tracking-wide sm:text-xl"
          style={{ color: ROYAL_CREAM, opacity: 1, textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(212,160,23,0.3)' }}
        >
          Where Every Feast Becomes a Royal Celebration
        </motion.p>

        {/* Bengali tagline */}
        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 text-xl sm:text-2xl"
          style={{ color: ROYAL_GOLD, opacity: 1, textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(212,160,23,0.3)' }}
        >
          সকলের মনপরাজিত হবে!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href="#contact"
            onClick={handleBookEvent}
            className="animate-pulse-glow group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-10 py-5 text-lg font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:text-xl"
            style={{
              background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)',
              color: ROYAL_MAROON,
              border: 'none',
              textShadow: '0 1px 2px rgba(255,255,255,0.2)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar size={20} />
              Book Your Event
              <span className="ml-1 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: ROYAL_MAROON, color: ROYAL_CREAM }}>
                ✦ Popular
              </span>
            </span>
            {/* Shimmer overlay */}
            <span
              className="animate-shimmer absolute inset-0 z-0"
              style={{ opacity: 0.3 }}
            />
          </Link>

          <Link
            href="#menu"
            onClick={handleExploreMenu}
            className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-royal-gold/10 sm:text-lg"
            style={{
              color: ROYAL_GOLD,
              border: `2px solid ${ROYAL_GOLD}`,
              backgroundColor: 'transparent',
              textShadow: '0 1px 3px rgba(0,0,0,0.4)',
            }}
          >
            <UtensilsCrossed size={20} />
            Explore Menu
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* ---- Stats bar ---- */}
      <motion.div
        custom={7}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 z-10 w-full"
        style={{
          background:
            'linear-gradient(to top, rgba(26,15,0,0.9) 0%, rgba(26,15,0,0.6) 60%, transparent 100%)',
        }}
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 pb-8 pt-14 sm:gap-10 md:gap-14">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

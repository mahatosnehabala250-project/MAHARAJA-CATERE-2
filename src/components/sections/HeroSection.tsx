'use client'

import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, UtensilsCrossed, ChevronRight, Phone } from 'lucide-react'

const FloatingParticles = dynamic(() => import('@/components/ui-custom/FloatingParticles'), { ssr: false })

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROYAL_GOLD = '#D4A017'
const ROYAL_MAROON = '#800020'
const ROYAL_CREAM = '#FFF8E7'

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ------------------------------------------------------------------ */
/*  Main HeroSection                                                   */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 500], [0, 120])

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
          src="/images/hero-bg-new.png"
          alt="Maharaja Caterer — royal feast setting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Cinematic dark overlay — clean gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,15,0,0.65) 0%, rgba(45,27,0,0.55) 30%, rgba(128,0,32,0.40) 55%, rgba(60,0,15,0.65) 80%, rgba(26,15,0,0.92) 100%)',
          }}
        />
        {/* Subtle vignette — darker edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.30) 100%)',
          }}
        />
      </motion.div>

      {/* ---- Floating particles ---- */}
      <FloatingParticles />

      {/* ---- Content — clean centered layout ---- */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-16 pb-28 text-center sm:px-6 lg:px-8">

        {/* Logo */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mb-5"
        >
          <div
            className="relative h-16 w-16 overflow-hidden rounded-full border-2 shadow-lg sm:h-20 sm:w-20"
            style={{ borderColor: ROYAL_GOLD, boxShadow: '0 0 20px rgba(212,160,23,0.3)' }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Maharaja Caterer logo"
              fill
              priority
              className="object-cover"
              sizes="80px"
            />
          </div>
        </motion.div>

        {/* Welcome badge */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm"
            style={{
              color: ROYAL_GOLD,
              backgroundColor: 'rgba(212,160,23,0.12)',
              border: '1px solid rgba(212,160,23,0.25)',
            }}
          >
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ROYAL_GOLD }} />
            Premium Catering Since 2009
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ROYAL_GOLD }} />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gold-gradient mb-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Maharaja Caterer
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 text-lg font-medium sm:text-xl md:text-2xl"
          style={{ color: ROYAL_CREAM, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          Purulia&apos;s Finest Catering &amp; Event Service
        </motion.p>

        {/* Gold ornamental divider */}
        <motion.div
          custom={3.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 flex items-center justify-center gap-2"
        >
          <span className="block h-px w-8 sm:w-12" style={{ background: `linear-gradient(to right, transparent, ${ROYAL_GOLD})` }} />
          <span className="text-royal-gold text-sm">&#10022;</span>
          <span className="block h-px w-8 sm:w-12" style={{ background: `linear-gradient(to left, transparent, ${ROYAL_GOLD})` }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-2 text-base italic tracking-wide sm:text-lg"
          style={{ color: ROYAL_CREAM, opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
        >
          Where Every Feast Becomes a Royal Celebration
        </motion.p>

        {/* Bengali tagline */}
        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 text-lg sm:text-xl"
          style={{ color: ROYAL_GOLD, textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 0 15px rgba(212,160,23,0.2)' }}
        >
          সকলের মনপরাজিত হবে!
        </motion.p>

        {/* CTA Buttons — clean and prominent */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="#contact"
            onClick={handleBookEvent}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-base font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:text-lg"
            style={{
              background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)',
              color: ROYAL_MAROON,
              textShadow: '0 1px 2px rgba(255,255,255,0.2)',
            }}
          >
            <Calendar size={20} />
            Book Your Event
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#menu"
            onClick={handleExploreMenu}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:text-lg"
            style={{
              color: ROYAL_GOLD,
              border: `2px solid ${ROYAL_GOLD}`,
              backgroundColor: 'transparent',
              textShadow: '0 1px 3px rgba(0,0,0,0.4)',
            }}
          >
            <UtensilsCrossed size={20} />
            Explore Menu
          </Link>
        </motion.div>

        {/* Quick contact line */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 flex items-center gap-2"
        >
          <Phone size={14} style={{ color: ROYAL_GOLD }} />
          <a
            href="tel:+918945005456"
            className="text-sm font-medium transition-colors hover:underline"
            style={{ color: ROYAL_CREAM, opacity: 0.8 }}
          >
            +91 89450 05456
          </a>
          <span style={{ color: ROYAL_GOLD, opacity: 0.5 }}>|</span>
          <span className="text-sm" style={{ color: ROYAL_GOLD, opacity: 0.8 }}>
            5000+ Events • 15+ Years • 4.8★
          </span>
        </motion.div>
      </div>

      {/* ---- Bottom gradient fade ---- */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(26,15,0,0.95) 0%, transparent 100%)',
        }}
      />
    </section>
  )
}

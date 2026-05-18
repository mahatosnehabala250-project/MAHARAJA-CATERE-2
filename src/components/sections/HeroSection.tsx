'use client'

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, UtensilsCrossed, ChevronRight, Phone, Star, Shield, Award, ArrowRight } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROYAL_GOLD = '#D4A017'
const ROYAL_MAROON = '#800020'

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ------------------------------------------------------------------ */
/*  Main HeroSection — SB7: Character + Problem Hook                   */
/*  "Your Celebration Deserves Food Worth Remembering"                 */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
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
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* ===== DESKTOP: Split Layout ===== */}
      <div className="hidden lg:flex min-h-screen">
        {/* ---- LEFT: Text Content on WHITE background ---- */}
        <div className="flex-1 flex flex-col justify-center px-12 xl:px-20 relative">
          {/* Subtle pattern */}
          <div className="absolute inset-0 mandala-bg opacity-50 pointer-events-none" />

          {/* Decorative corners */}
          <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-royal-gold/15 rounded-tl-xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-royal-gold/15 rounded-bl-xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            {/* Logo */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <div className="flex items-center gap-3">
                <div
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 shadow-md"
                  style={{ borderColor: ROYAL_GOLD }}
                >
                  <Image
                    src="/images/logo.jpg"
                    alt="Maharaja Caterer logo"
                    fill
                    priority
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <span className="text-royal-maroon font-[family-name:var(--font-playfair)] font-bold text-base">Maharaja Caterer</span>
                  <p className="text-royal-maroon/50 text-[11px] font-[family-name:var(--font-lato)] tracking-wide">Purulia, West Bengal</p>
                </div>
              </div>
            </motion.div>

            {/* SB7: Character badge — identify the hero */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: ROYAL_MAROON,
                  backgroundColor: 'rgba(128,0,32,0.05)',
                  border: '1px solid rgba(128,0,32,0.12)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
                Planning a Celebration?
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
              </span>
            </motion.div>

            {/* SB7: Problem Hook — Main headline speaks to their desire */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 font-[family-name:var(--font-playfair)] text-5xl xl:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-shadow-subtle"
              style={{ color: ROYAL_MAROON }}
            >
              Your Celebration<br />Deserves Food<br />
              <span className="text-gold-gradient">Worth Remembering</span>
            </motion.h1>

            {/* SB7: Problem — Internal anxiety */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-3 text-lg xl:text-xl text-gray-600 font-[family-name:var(--font-lato)] leading-relaxed max-w-md"
            >
              Don&apos;t let the stress of catering ruin your special day. 
              Your guests deserve a feast — and so do you.
            </motion.p>

            {/* Gold ornamental divider */}
            <motion.div
              custom={3.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-3 flex items-center gap-2"
            >
              <span className="block h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${ROYAL_GOLD})` }} />
              <span className="text-royal-gold text-sm">&#10022;</span>
              <span className="block h-px w-10" style={{ background: `linear-gradient(to left, transparent, ${ROYAL_GOLD})` }} />
            </motion.div>

            {/* Bengali tagline */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8 text-base font-[family-name:var(--font-playfair)] font-semibold"
              style={{ color: ROYAL_GOLD }}
            >
              স্বাদে রাজা, সেবায় অপরাজেয়!
            </motion.p>

            {/* SB7: CTA — Direct Call to Action */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-10"
            >
              <Link
                href="#contact"
                onClick={handleBookEvent}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl font-[family-name:var(--font-lato)]"
                style={{
                  background: ROYAL_MAROON,
                  color: '#FFFFFF',
                }}
              >
                <Calendar size={18} />
                Book Your Event
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#menu"
                onClick={handleExploreMenu}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-lato)]"
                style={{
                  color: ROYAL_MAROON,
                  border: `2px solid ${ROYAL_MAROON}`,
                }}
              >
                <UtensilsCrossed size={18} />
                Explore Menu
              </Link>
            </motion.div>

            {/* SB7: Guide credibility — Trust badges */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-royal-gold fill-royal-gold" />
                <span className="text-sm font-semibold text-gray-700 font-[family-name:var(--font-lato)]">4.8 Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-royal-gold" />
                <span className="text-sm font-semibold text-gray-700 font-[family-name:var(--font-lato)]">FSSAI Licensed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-royal-gold" />
                <span className="text-sm font-semibold text-gray-700 font-[family-name:var(--font-lato)]">5000+ Events</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ---- RIGHT: Full-quality Image — Clean, no overlay ---- */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="flex-1 relative"
        >
          <img
            src="/images/hero-bg-new.jpg"
            alt="Maharaja Caterer — royal feast setting with beautifully arranged dishes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Very subtle left edge fade so image blends into white */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0.5) 2%, rgba(255,255,255,0.15) 5%, transparent 8%)',
            }}
          />
        </motion.div>
      </div>

      {/* ===== MOBILE/TABLET: Stacked Layout ===== */}
      <div className="flex flex-col lg:hidden">
        {/* ---- Top: Image strip (shorter, clearly visible) ---- */}
        <div className="relative h-[40vh] sm:h-[45vh] overflow-hidden">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="absolute inset-0"
          >
            <img
              src="/images/hero-bg-new.jpg"
              alt="Maharaja Caterer — royal feast setting"
              className="w-full h-full object-cover"
            />
            {/* Light bottom gradient to blend into white content below */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(128,0,32,0.2) 0%, rgba(0,0,0,0.3) 50%, rgba(255,255,255,0.95) 95%, #FFFFFF 100%)',
              }}
            />
          </motion.div>

          {/* Simple logo + name over image */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.div variants={scaleIn} initial="hidden" animate="visible" className="mb-3">
              <div
                className="relative h-14 w-14 overflow-hidden rounded-full border-2 shadow-lg mx-auto"
                style={{ borderColor: ROYAL_GOLD, boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer logo"
                  fill
                  priority
                  className="object-cover"
                  sizes="56px"
                />
              </div>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight font-[family-name:var(--font-playfair)] text-white"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
            >
              Your Celebration<br />
              <span style={{ color: ROYAL_GOLD }}>Deserves Food Worth</span><br />
              Remembering
            </motion.h1>
          </div>
        </div>

        {/* ---- Bottom: Content on WHITE background ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white px-5 sm:px-8 py-8 sm:py-10"
        >
          {/* Problem statement */}
          <p className="text-base text-gray-600 font-[family-name:var(--font-lato)] mb-3 leading-relaxed">
            Don&apos;t let the stress of catering ruin your special day. 
            Your guests deserve a feast — and so do you.
          </p>

          {/* Bengali tagline */}
          <p className="text-lg font-[family-name:var(--font-playfair)] font-semibold mb-2" style={{ color: ROYAL_GOLD }}>
            স্বাদে রাজা, সেবায় অপরাজেয়!
          </p>

          {/* Badge */}
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{
                color: ROYAL_MAROON,
                backgroundColor: 'rgba(128,0,32,0.05)',
                border: '1px solid rgba(128,0,32,0.12)',
              }}
            >
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
              Premium Catering Since 2009
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-6">
            <Link
              href="#contact"
              onClick={handleBookEvent}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-lato)]"
              style={{
                background: ROYAL_MAROON,
                color: '#FFFFFF',
              }}
            >
              <Calendar size={18} />
              Book Your Event
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#menu"
              onClick={handleExploreMenu}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] font-[family-name:var(--font-lato)]"
              style={{
                color: ROYAL_MAROON,
                border: `2px solid ${ROYAL_MAROON}`,
              }}
            >
              <UtensilsCrossed size={18} />
              Explore Menu
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" />
              <span className="text-xs font-semibold text-gray-700 font-[family-name:var(--font-lato)]">4.8 Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-royal-gold" />
              <span className="text-xs font-semibold text-gray-700 font-[family-name:var(--font-lato)]">FSSAI Licensed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-royal-gold" />
              <span className="text-xs font-semibold text-gray-700 font-[family-name:var(--font-lato)]">5000+ Events</span>
            </div>
          </div>

          {/* Quick contact */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
            <Phone size={14} style={{ color: ROYAL_MAROON }} />
            <a
              href="tel:+918945005456"
              className="text-sm font-medium text-royal-maroon hover:text-royal-gold transition-colors font-[family-name:var(--font-lato)]"
            >
              +91 89450 05456
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-500 font-[family-name:var(--font-lato)]">15+ Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

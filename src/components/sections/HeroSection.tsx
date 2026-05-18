'use client'

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, UtensilsCrossed, ChevronRight, Phone, Star, Shield, Award } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROYAL_GOLD = '#D4A017'
const ROYAL_MAROON = '#800020'

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
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
      className="relative min-h-screen overflow-hidden bg-royal-cream"
    >
      {/* ===== DESKTOP: Split Layout ===== */}
      <div className="hidden lg:flex min-h-screen">
        {/* ---- LEFT: Text Content on cream background ---- */}
        <div className="flex-1 flex flex-col justify-center px-12 xl:px-20 relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 mandala-bg opacity-30 pointer-events-none" />

          {/* Decorative corner */}
          <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-royal-gold/20 rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-royal-gold/20 rounded-bl-2xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            {/* Logo */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <div className="flex items-center gap-4">
                <div
                  className="relative h-14 w-14 overflow-hidden rounded-full border-2 shadow-lg"
                  style={{ borderColor: ROYAL_GOLD, boxShadow: '0 0 15px rgba(212,160,23,0.25)' }}
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
                <div>
                  <span className="text-royal-maroon font-[family-name:var(--font-playfair)] font-bold text-lg">Maharaja Caterer</span>
                  <p className="text-royal-maroon/60 text-xs font-[family-name:var(--font-lato)]">Purulia, West Bengal</p>
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-5"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: ROYAL_MAROON,
                  backgroundColor: 'rgba(128,0,32,0.06)',
                  border: '1px solid rgba(128,0,32,0.15)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
                Premium Catering Since 2009
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 font-[family-name:var(--font-playfair)] text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight"
              style={{ color: ROYAL_MAROON }}
            >
              Maharaja<br />Caterer
            </motion.h1>

            {/* Sub heading */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 text-xl xl:text-2xl font-medium text-royal-maroon/80 font-[family-name:var(--font-playfair)]"
            >
              Purulia&apos;s Finest Catering &amp; Event Service
            </motion.p>

            {/* Gold ornamental divider */}
            <motion.div
              custom={3.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 flex items-center gap-2"
            >
              <span className="block h-px w-12" style={{ background: `linear-gradient(to right, transparent, ${ROYAL_GOLD})` }} />
              <span className="text-royal-gold text-base">&#10022;</span>
              <span className="block h-px w-12" style={{ background: `linear-gradient(to left, transparent, ${ROYAL_GOLD})` }} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-2 text-base italic tracking-wide text-royal-maroon/70 font-[family-name:var(--font-lato)]"
            >
              Where Every Feast Becomes a Royal Celebration
            </motion.p>

            {/* Bengali tagline */}
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8 text-xl font-[family-name:var(--font-playfair)] font-semibold"
              style={{ color: ROYAL_GOLD }}
            >
              সকলের মনপরাজিত হবে!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-8"
            >
              <Link
                href="#contact"
                onClick={handleBookEvent}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-[family-name:var(--font-lato)]"
                style={{
                  background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)',
                  color: ROYAL_MAROON,
                }}
              >
                <Calendar size={18} />
                Book Your Event
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#menu"
                onClick={handleExploreMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-royal-maroon/5 font-[family-name:var(--font-lato)]"
                style={{
                  color: ROYAL_MAROON,
                  border: `2px solid ${ROYAL_MAROON}`,
                }}
              >
                <UtensilsCrossed size={18} />
                Explore Menu
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-royal-gold fill-royal-gold" />
                <span className="text-sm font-semibold text-royal-maroon font-[family-name:var(--font-lato)]">4.8 Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-royal-gold" />
                <span className="text-sm font-semibold text-royal-maroon font-[family-name:var(--font-lato)]">FSSAI Licensed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-royal-gold" />
                <span className="text-sm font-semibold text-royal-maroon font-[family-name:var(--font-lato)]">5000+ Events</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ---- RIGHT: Full-quality Image — NO overlay ---- */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="flex-1 relative"
        >
          <img
            src="/images/hero-bg-new.jpg"
            alt="Maharaja Caterer — royal feast setting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Very subtle left edge fade so image blends into cream */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #FFF8E7 0%, rgba(255,248,231,0.6) 3%, rgba(255,248,231,0.2) 6%, transparent 10%)',
            }}
          />
        </motion.div>
      </div>

      {/* ===== MOBILE/TABLET: Stacked Layout ===== */}
      <div className="flex flex-col lg:hidden min-h-screen">
        {/* ---- Top: Image with gentle overlay ---- */}
        <div className="relative h-[45vh] sm:h-[50vh] overflow-hidden">
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
            {/* Light overlay so text on image is readable */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(128,0,32,0.3) 0%, rgba(45,27,0,0.5) 60%, rgba(128,0,32,0.7) 100%)',
              }}
            />
          </motion.div>

          {/* Centered text over image on mobile */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <motion.div variants={scaleIn} initial="hidden" animate="visible" className="mb-3">
              <div
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 shadow-lg mx-auto"
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
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight font-[family-name:var(--font-playfair)]"
              style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Maharaja Caterer
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base font-medium mt-1"
              style={{ color: ROYAL_GOLD }}
            >
              Purulia&apos;s Finest Catering &amp; Event Service
            </motion.p>
          </div>
        </div>

        {/* ---- Bottom: Content on cream background ---- */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="flex-1 bg-royal-cream px-5 sm:px-8 py-8 sm:py-10"
        >
          {/* Bengali tagline */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg font-[family-name:var(--font-playfair)] font-semibold mb-1"
            style={{ color: ROYAL_GOLD }}
          >
            সকলের মনপরাজিত হবে!
          </motion.p>

          {/* Tagline */}
          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm italic tracking-wide text-royal-maroon/70 font-[family-name:var(--font-lato)] mb-5"
          >
            Where Every Feast Becomes a Royal Celebration
          </motion.p>

          {/* Badge */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{
                color: ROYAL_MAROON,
                backgroundColor: 'rgba(128,0,32,0.06)',
                border: '1px solid rgba(128,0,32,0.15)',
              }}
            >
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
              Premium Catering Since 2009
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ROYAL_MAROON }} />
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-6"
          >
            <Link
              href="#contact"
              onClick={handleBookEvent}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 font-[family-name:var(--font-lato)]"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)',
                color: ROYAL_MAROON,
              }}
            >
              <Calendar size={18} />
              Book Your Event
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#menu"
              onClick={handleExploreMenu}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 font-[family-name:var(--font-lato)]"
              style={{
                color: ROYAL_MAROON,
                border: `2px solid ${ROYAL_MAROON}`,
              }}
            >
              <UtensilsCrossed size={18} />
              Explore Menu
            </Link>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 flex-wrap"
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" />
              <span className="text-xs font-semibold text-royal-maroon font-[family-name:var(--font-lato)]">4.8 Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-royal-gold" />
              <span className="text-xs font-semibold text-royal-maroon font-[family-name:var(--font-lato)]">FSSAI Licensed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-royal-gold" />
              <span className="text-xs font-semibold text-royal-maroon font-[family-name:var(--font-lato)]">5000+ Events</span>
            </div>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            custom={8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 pt-4 border-t border-royal-gold/20 flex items-center gap-2"
          >
            <Phone size={14} style={{ color: ROYAL_MAROON }} />
            <a
              href="tel:+918945005456"
              className="text-sm font-medium text-royal-maroon hover:text-royal-gold transition-colors font-[family-name:var(--font-lato)]"
            >
              +91 89450 05456
            </a>
            <span className="text-royal-gold/50">|</span>
            <span className="text-xs text-royal-maroon/60 font-[family-name:var(--font-lato)]">15+ Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

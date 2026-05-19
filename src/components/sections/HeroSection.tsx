'use client'

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, UtensilsCrossed, ChevronRight, Phone, Star, Shield, Award } from 'lucide-react'

const ROYAL_GOLD = '#D4A017'
const ROYAL_MAROON = '#800020'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

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
      <div className="hidden lg:flex h-[78vh] min-h-[520px] max-h-[700px] pt-16">
        {/* ---- LEFT: Text Content — clean, spacious ---- */}
        <div className="flex-1 flex flex-col justify-center px-12 xl:px-20">
          <div className="max-w-lg">
            {/* Badge */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: ROYAL_MAROON,
                  backgroundColor: 'rgba(128,0,32,0.06)',
                  border: '1px solid rgba(128,0,32,0.1)',
                }}
              >
                Planning a Celebration?
              </span>
            </motion.div>

            {/* Main headline — clean, single color, strong hierarchy */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-5 font-[family-name:var(--font-playfair)] text-[2.6rem] xl:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight"
              style={{ color: ROYAL_MAROON }}
            >
              Your Celebration<br />
              Deserves Food<br />
              <span className="text-gold-gradient">Worth Remembering</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 text-base xl:text-lg text-gray-600 font-[family-name:var(--font-lato)] leading-relaxed max-w-md"
            >
              Don&apos;t let the stress of catering ruin your special day. Your guests deserve a feast — and so do you.
            </motion.p>

            {/* Bengali tagline — prominent, not afterthought */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 text-xl font-[family-name:var(--font-playfair)] font-bold"
              style={{ color: ROYAL_GOLD }}
            >
              স্বাদে রাজা, সেবায় অপরাজেয়!
            </motion.p>

            {/* CTA Buttons — well spaced, consistent */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 mb-8"
            >
              <Link
                href="#contact"
                onClick={handleBookEvent}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide shadow-lg shadow-[#800020]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#800020]/30 hover:scale-[1.02] font-[family-name:var(--font-lato)]"
                style={{
                  background: ROYAL_MAROON,
                  color: '#FFFFFF',
                }}
              >
                <Calendar size={18} />
                Book Your Event
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#menu"
                onClick={handleExploreMenu}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg font-[family-name:var(--font-lato)]"
                style={{
                  color: ROYAL_MAROON,
                  border: `2px solid ${ROYAL_MAROON}`,
                }}
              >
                <UtensilsCrossed size={18} />
                Explore Menu
              </Link>
            </motion.div>

            {/* Trust badges — clean row with consistent spacing */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-royal-gold fill-royal-gold" />
                <span className="text-base font-semibold text-gray-700 font-[family-name:var(--font-lato)]">4.8 Rating</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-royal-gold" />
                <span className="text-base font-semibold text-gray-700 font-[family-name:var(--font-lato)]">FSSAI Licensed</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-royal-gold" />
                <span className="text-base font-semibold text-gray-700 font-[family-name:var(--font-lato)]">5000+ Events</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ---- RIGHT: Full-quality Image ---- */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="flex-1 relative shadow-2xl"
        >
          <img
            src="/images/hero-bg-new.jpg"
            alt="Maharaja Caterer — royal feast setting with beautifully arranged dishes"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle left edge fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0.6) 3%, rgba(255,255,255,0.2) 6%, transparent 10%)',
            }}
          />
        </motion.div>
      </div>

      {/* ===== MOBILE/TABLET: Stacked Layout ===== */}
      <div className="flex flex-col lg:hidden">
        {/* ---- Top: Image ---- */}
        <div className="relative h-[42vh] sm:h-[48vh] overflow-hidden">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="absolute inset-0"
          >
            <img
              src="/images/hero-bg-new.jpg"
              alt="Maharaja Caterer — royal feast setting"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(128,0,32,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(255,255,255,0.9) 90%, #FFFFFF 100%)',
              }}
            />
          </motion.div>

          {/* Text over image */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full px-5 pb-8 text-center">
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight font-[family-name:var(--font-playfair)] text-white"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
            >
              Your Celebration
              <br />
              <span
                style={{
                  color: '#FFD700',
                  textShadow: '0 1px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.4)',
                }}
              >
                Deserves Food
              </span>
              <br />
              Worth Remembering
            </motion.h1>
          </div>
        </div>

        {/* ---- Bottom: Content on WHITE ---- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-white px-6 sm:px-8 py-8 sm:py-10"
        >
          {/* Problem statement */}
          <p className="text-base text-gray-600 font-[family-name:var(--font-lato)] mb-3 leading-relaxed">
            Don&apos;t let the stress of catering ruin your special day. Your guests deserve a feast — and so do you.
          </p>

          {/* Bengali tagline */}
          <p className="text-lg font-[family-name:var(--font-playfair)] font-bold mb-4" style={{ color: ROYAL_GOLD }}>
            স্বাদে রাজা, সেবায় অপরাজেয়!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-6">
            <Link
              href="#contact"
              onClick={handleBookEvent}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02] font-[family-name:var(--font-lato)]"
              style={{ background: ROYAL_MAROON, color: '#FFFFFF' }}
            >
              <Calendar size={17} />
              Book Your Event
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#menu"
              onClick={handleExploreMenu}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] font-[family-name:var(--font-lato)]"
              style={{ color: ROYAL_MAROON, border: `2px solid ${ROYAL_MAROON}` }}
            >
              <UtensilsCrossed size={17} />
              Explore Menu
            </Link>
          </div>

          {/* Trust badges — with dividers */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-royal-gold fill-royal-gold" />
              <span className="text-xs font-semibold text-gray-700 font-[family-name:var(--font-lato)]">4.8 Rating</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-royal-gold" />
              <span className="text-xs font-semibold text-gray-700 font-[family-name:var(--font-lato)]">FSSAI Licensed</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-royal-gold" />
              <span className="text-xs font-semibold text-gray-700 font-[family-name:var(--font-lato)]">5000+ Events</span>
            </div>
          </div>

          {/* Quick contact */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
            <Phone size={14} style={{ color: ROYAL_MAROON }} />
            <a href="tel:+918945005456" className="text-sm font-medium text-royal-maroon hover:text-royal-gold transition-colors font-[family-name:var(--font-lato)]">
              +91 89450 05456
            </a>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-400 font-[family-name:var(--font-lato)]">15+ Years</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

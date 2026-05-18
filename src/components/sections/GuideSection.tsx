'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Award, Star, UtensilsCrossed, Quote } from 'lucide-react'

const stats = [
  {
    number: '5000+',
    label: 'Events Served',
    icon: Award,
  },
  {
    number: '15+',
    label: 'Years Experience',
    icon: Shield,
  },
  {
    number: '4.8\u2605',
    label: 'Customer Rating',
    icon: Star,
  },
  {
    number: '100+',
    label: 'Menu Items',
    icon: UtensilsCrossed,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function GuideSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#FAFAF5' }}
      ref={sectionRef}
    >
      {/* Subtle decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN — Image + Quote */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-end"
          >
            {/* Decorative gold-bordered frame */}
            <div className="relative w-full max-w-md">
              {/* Outer decorative border */}
              <div
                className="absolute -inset-4 rounded-xl"
                style={{ border: '2px solid #D4A017' }}
              />
              {/* Inner subtle border */}
              <div
                className="absolute -inset-2 rounded-lg"
                style={{ border: '1px solid rgba(212, 160, 23, 0.3)' }}
              />

              {/* Corner ornaments */}
              <div className="absolute -top-4 -left-4 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" fill="#D4A017" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M32 0 L20 0 L20 2 L30 2 L30 12 L32 12 Z" fill="#D4A017" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M0 32 L12 32 L12 30 L2 30 L2 20 L0 20 Z" fill="#D4A017" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M32 32 L20 32 L20 30 L30 30 L30 20 L32 20 Z" fill="#D4A017" />
                </svg>
              </div>

              {/* Image */}
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer — Proprietor & Kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>

            {/* Quote below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 max-w-md text-center lg:text-right"
            >
              <Quote className="w-6 h-6 mx-auto lg:ml-auto lg:mr-0 mb-2" style={{ color: '#D4A017' }} />
              <p
                className="italic text-sm sm:text-base leading-relaxed"
                style={{ color: '#555555' }}
              >
                We started Maharaja Caterer because we believe every family in Purulia deserves a
                feast that honors their celebration.
              </p>
              <p
                className="mt-2 text-sm font-semibold"
                style={{ color: '#800020' }}
              >
                — Proprietor, Maharaja Caterer
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Content + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: 'rgba(128, 0, 32, 0.08)',
                  color: '#800020',
                  border: '1px solid rgba(128, 0, 32, 0.15)',
                }}
              >
                <Shield className="w-4 h-4" />
                Your Trusted Guide
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
              style={{ color: '#1A1A1A' }}
            >
              We Know What It Takes To Make A{' '}
              <span style={{ color: '#800020' }}>Celebration Unforgettable</span>
            </motion.h2>

            {/* Gold accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="h-1 rounded-full"
              style={{ backgroundColor: '#D4A017' }}
            />

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base leading-relaxed font-[family-name:var(--font-lato)]"
              style={{ color: '#555555' }}
            >
              For over 15 years, Maharaja Caterer has been the trusted choice for families across
              Purulia. We&apos;ve served 5000+ events — from intimate family dinners to grand
              weddings with thousands of guests. We understand the pressure of planning. That&apos;s
              why we handle everything — from menu customization to on-time delivery — so you can
              focus on what matters: celebrating with your loved ones.
            </motion.p>

            {/* Stats Grid — 2x2 */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-2"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className="relative rounded-lg p-4 sm:p-5 text-center transition-shadow duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8E4DD',
                    borderTop: '3px solid #D4A017',
                  }}
                >
                  {/* Icon */}
                  <stat.icon
                    className="w-5 h-5 mx-auto mb-2"
                    style={{ color: '#D4A017' }}
                  />
                  {/* Number */}
                  <p
                    className="text-xl sm:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-playfair)]"
                    style={{ color: '#800020' }}
                  >
                    {stat.number}
                  </p>
                  {/* Label */}
                  <p
                    className="text-xs sm:text-sm mt-1 font-[family-name:var(--font-lato)]"
                    style={{ color: '#777777' }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />
    </section>
  )
}

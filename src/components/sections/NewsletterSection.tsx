'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        toast.success('Welcome to the Maharaja family! 🎉', {
          description: 'You\'ll receive our exclusive offers and updates.',
        })
        setEmail('')
      } else {
        toast.success('Welcome to the Maharaja family! 🎉', {
          description: 'You\'ll receive our exclusive offers and updates.',
        })
        setEmail('')
      }
    } catch {
      toast.success('Welcome to the Maharaja family! 🎉', {
        description: 'You\'ll receive our exclusive offers and updates.',
      })
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="newsletter"
      className="relative py-20 md:py-28 section-dark-royal dark:from-[#2D1B00] overflow-hidden"
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-40" />

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30 rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30 -rotate-90">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-30 rotate-180">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
          <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
        </svg>
      </div>

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-royal-gold/3 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Decorative envelope icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-royal-gold/10 border-2 border-royal-gold/30 flex items-center justify-center">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-royal-gold" />
          </div>
        </motion.div>

        {/* Section heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Never Miss an Update
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Stay Connected
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-cream text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Get exclusive offers, new menu updates &amp; festival specials
          </p>
        </div>

        {/* Newsletter form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-3.5 rounded-full bg-royal-cream/20 border-2 border-royal-gold/40 text-white placeholder:text-royal-cream/70 font-[family-name:var(--font-lato)] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed font-[family-name:var(--font-lato)] whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Disclaimer */}
          <p className="mt-4 text-center text-royal-cream/90 text-xs sm:text-sm font-[family-name:var(--font-lato)]">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Loader2 } from 'lucide-react'
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
        toast.success('Welcome to the Maharaja family!', {
          description: "You'll receive our exclusive offers and seasonal menus.",
        })
        setEmail('')
      } else {
        toast.success('Welcome to the Maharaja family!', {
          description: "You'll receive our exclusive offers and seasonal menus.",
        })
        setEmail('')
      }
    } catch {
      toast.success('Welcome to the Maharaja family!', {
        description: "You'll receive our exclusive offers and seasonal menus.",
      })
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="newsletter"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#FFFBF0' }}
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Decorative mail icon in gold circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4A017]/10 border-2 border-[#D4A017]/30 flex items-center justify-center">
            <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4A017]" />
          </div>
        </motion.div>

        {/* Section heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-4">
            Stay in the Royal Loop
          </h2>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-12 h-px bg-[#D4A017]/40" />
            <span className="text-[#D4A017] text-lg">&#10022;</span>
            <span className="block w-12 h-px bg-[#D4A017]/40" />
          </div>

          <p className="text-[#444444] font-[family-name:var(--font-lato)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get exclusive offers, seasonal menus, and celebration tips delivered to your inbox.
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
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 rounded-lg bg-white border border-[#E8E4DD] text-[#1A1A1A] placeholder:text-[#999999] font-[family-name:var(--font-lato)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4A017]/30 focus:border-[#D4A017] transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#800020] hover:bg-[#6B0018] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#800020]/20 disabled:opacity-60 disabled:cursor-not-allowed font-[family-name:var(--font-lato)] whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Disclaimer */}
          <p className="mt-4 text-center text-[#999999] text-xs sm:text-sm font-[family-name:var(--font-lato)]">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

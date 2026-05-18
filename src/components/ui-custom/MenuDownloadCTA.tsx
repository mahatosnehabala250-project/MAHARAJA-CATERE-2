'use client'

import { motion } from 'framer-motion'
import { FileDown, Eye } from 'lucide-react'

export default function MenuDownloadCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative max-w-2xl mx-auto rounded-2xl bg-royal-cream border-2 border-royal-gold/30 py-6 px-8 sm:py-8 sm:px-10 overflow-hidden"
      >
        {/* Subtle gold shimmer overlay */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />

        {/* Decorative accent corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-royal-gold/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal-gold/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-royal-gold/40 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-royal-gold/40 rounded-br-2xl" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-royal-gold/10 flex items-center justify-center shrink-0">
            <FileDown className="w-7 h-7 sm:w-8 sm:h-8 text-royal-gold" />
          </div>

          {/* Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mb-1">
              Download Our Complete Menu
            </h3>
            <p className="text-muted-foreground text-sm font-[family-name:var(--font-lato)]">
              Get our full menu with 100+ items, pricing, and package details
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 font-[family-name:var(--font-lato)]"
            >
              <FileDown className="w-4 h-4" />
              Download PDF
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-royal-gold/40 text-royal-maroon font-semibold text-sm transition-all duration-300 hover:border-royal-gold hover:bg-royal-gold/5 hover:scale-105 font-[family-name:var(--font-lato)]"
            >
              <Eye className="w-4 h-4" />
              View Online
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

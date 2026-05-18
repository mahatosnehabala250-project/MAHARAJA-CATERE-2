'use client'

import { motion } from 'framer-motion'

export default function MaharajaFigures() {
  return (
    <div className="relative w-full flex justify-center items-end pointer-events-none select-none" style={{ height: '180px' }}>
      {/* Left Maharaja */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-0 md:left-8 bottom-0"
      >
        <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          {/* Turban */}
          <ellipse cx="60" cy="28" rx="22" ry="18" fill="#800020" />
          <rect x="38" y="20" width="44" height="16" rx="4" fill="#800020" />
          {/* Turban stripes */}
          <path d="M42 28 Q60 20 78 28" stroke="#D4A017" strokeWidth="2" fill="none" />
          <path d="M44 32 Q60 24 76 32" stroke="#D4A017" strokeWidth="1.5" fill="none" />
          {/* Turban feather */}
          <path d="M60 10 L62 2 L58 2 Z" fill="#2E8B57" />
          <circle cx="60" cy="6" r="2" fill="#FFD700" />
          {/* Face */}
          <ellipse cx="60" cy="42" rx="16" ry="14" fill="#D4A574" />
          {/* Eyes - closed in namaste */}
          <path d="M52 40 Q54 38 56 40" stroke="#2D1B00" strokeWidth="1.5" fill="none" />
          <path d="M64 40 Q66 38 68 40" stroke="#2D1B00" strokeWidth="1.5" fill="none" />
          {/* Smile */}
          <path d="M54 47 Q60 52 66 47" stroke="#2D1B00" strokeWidth="1.5" fill="none" />
          {/* Mustache */}
          <path d="M48 43 Q54 46 60 43 Q66 46 72 43" stroke="#2D1B00" strokeWidth="2" fill="none" />
          {/* Body - Tunic */}
          <rect x="38" y="56" width="44" height="60" rx="6" fill="#800020" />
          {/* Gold trim on tunic */}
          <rect x="38" y="56" width="44" height="4" rx="2" fill="#D4A017" />
          <rect x="38" y="110" width="44" height="3" rx="1.5" fill="#D4A017" />
          {/* Gold button */}
          <circle cx="60" cy="75" r="3" fill="#D4A017" />
          <circle cx="60" cy="90" r="3" fill="#D4A017" />
          {/* Collar */}
          <path d="M50 56 L60 65 L70 56" stroke="#D4A017" strokeWidth="2" fill="none" />
          {/* Arms - Namaste pose */}
          <motion.g
            animate={{ rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Left arm */}
            <path d="M38 65 Q25 70 30 55 Q33 48 42 55" fill="#800020" stroke="#D4A017" strokeWidth="1" />
            {/* Right arm */}
            <path d="M82 65 Q95 70 90 55 Q87 48 78 55" fill="#800020" stroke="#D4A017" strokeWidth="1" />
            {/* Hands together */}
            <ellipse cx="60" cy="52" rx="8" ry="5" fill="#D4A574" />
          </motion.g>
          {/* Dhoti */}
          <path d="M40 114 L38 165 L82 165 L80 114" fill="#D4A017" />
          <rect x="38" y="162" width="44" height="4" rx="2" fill="#800020" />
          {/* Shoes */}
          <ellipse cx="48" cy="172" rx="12" ry="5" fill="#800020" />
          <ellipse cx="72" cy="172" rx="12" ry="5" fill="#800020" />
          {/* Shoe detail */}
          <path d="M40 172 L56 172" stroke="#D4A017" strokeWidth="1" />
          <path d="M64 172 L80 172" stroke="#D4A017" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Right Maharaja */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-0 md:right-8 bottom-0"
        style={{ transform: 'scaleX(-1)' }}
      >
        <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          {/* Turban */}
          <ellipse cx="60" cy="28" rx="22" ry="18" fill="#800020" />
          <rect x="38" y="20" width="44" height="16" rx="4" fill="#800020" />
          {/* Turban stripes */}
          <path d="M42 28 Q60 20 78 28" stroke="#D4A017" strokeWidth="2" fill="none" />
          <path d="M44 32 Q60 24 76 32" stroke="#D4A017" strokeWidth="1.5" fill="none" />
          {/* Turban feather */}
          <path d="M60 10 L62 2 L58 2 Z" fill="#2E8B57" />
          <circle cx="60" cy="6" r="2" fill="#FFD700" />
          {/* Face */}
          <ellipse cx="60" cy="42" rx="16" ry="14" fill="#D4A574" />
          {/* Eyes - closed in namaste */}
          <path d="M52 40 Q54 38 56 40" stroke="#2D1B00" strokeWidth="1.5" fill="none" />
          <path d="M64 40 Q66 38 68 40" stroke="#2D1B00" strokeWidth="1.5" fill="none" />
          {/* Smile */}
          <path d="M54 47 Q60 52 66 47" stroke="#2D1B00" strokeWidth="1.5" fill="none" />
          {/* Mustache */}
          <path d="M48 43 Q54 46 60 43 Q66 46 72 43" stroke="#2D1B00" strokeWidth="2" fill="none" />
          {/* Body - Tunic */}
          <rect x="38" y="56" width="44" height="60" rx="6" fill="#800020" />
          {/* Gold trim on tunic */}
          <rect x="38" y="56" width="44" height="4" rx="2" fill="#D4A017" />
          <rect x="38" y="110" width="44" height="3" rx="1.5" fill="#D4A017" />
          {/* Gold button */}
          <circle cx="60" cy="75" r="3" fill="#D4A017" />
          <circle cx="60" cy="90" r="3" fill="#D4A017" />
          {/* Collar */}
          <path d="M50 56 L60 65 L70 56" stroke="#D4A017" strokeWidth="2" fill="none" />
          {/* Arms - Namaste pose */}
          <motion.g
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M38 65 Q25 70 30 55 Q33 48 42 55" fill="#800020" stroke="#D4A017" strokeWidth="1" />
            <path d="M82 65 Q95 70 90 55 Q87 48 78 55" fill="#800020" stroke="#D4A017" strokeWidth="1" />
            <ellipse cx="60" cy="52" rx="8" ry="5" fill="#D4A574" />
          </motion.g>
          {/* Dhoti */}
          <path d="M40 114 L38 165 L82 165 L80 114" fill="#D4A017" />
          <rect x="38" y="162" width="44" height="4" rx="2" fill="#800020" />
          {/* Shoes */}
          <ellipse cx="48" cy="172" rx="12" ry="5" fill="#800020" />
          <ellipse cx="72" cy="172" rx="12" ry="5" fill="#800020" />
          <path d="M40 172 L56 172" stroke="#D4A017" strokeWidth="1" />
          <path d="M64 172 L80 172" stroke="#D4A017" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'

interface Festival {
  id: string
  name: string
  date: string
  tagline: string
  emoji: string
}

const festivals: Festival[] = [
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    date: 'Oct 2025',
    tagline: 'Grand Puja Feasts',
    emoji: '🪔',
  },
  {
    id: 'diwali',
    name: 'Diwali',
    date: 'Oct/Nov 2025',
    tagline: 'Sweet & Savory Specials',
    emoji: '🪔',
  },
  {
    id: 'bhai-dooj',
    name: 'Bhai Dooj',
    date: 'Nov 2025',
    tagline: 'Family Feast Packages',
    emoji: '🎁',
  },
  {
    id: 'christmas',
    name: 'Christmas',
    date: 'Dec 2025',
    tagline: 'Party & Dinner Specials',
    emoji: '🎄',
  },
  {
    id: 'poila-baisakh',
    name: 'Poila Baisakh',
    date: 'Apr 2026',
    tagline: 'Traditional Bengali Spread',
    emoji: '🌺',
  },
  {
    id: 'eid',
    name: 'Eid',
    date: 'Variable',
    tagline: 'Special Biryani & Kebab Menu',
    emoji: '🌙',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function FestivalCalendarSection() {
  return (
    <section
      id="festivals"
      className="relative py-20 md:py-28 section-royal dark:bg-[#1a0f00]/30 overflow-hidden"
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-25" />

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-maroon/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section heading */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-royal-maroon font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Celebrate Every Occasion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Festival Season Specials
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </div>

        {/* Festival cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {festivals.map((festival) => (
            <motion.div
              key={festival.id}
              variants={cardVariants}
              className="group relative rounded-2xl bg-white/80 dark:bg-[#2D1B00]/80 backdrop-blur-sm border-2 border-royal-gold/20 overflow-hidden transition-all duration-300 hover:border-royal-gold/60 hover:shadow-[0_0_25px_rgba(212,160,23,0.15)] hover:-translate-y-1"
            >
              {/* Gold left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-royal-gold-dark via-royal-gold to-royal-gold-light transition-all duration-300 group-hover:w-1.5 group-hover:shadow-[0_0_10px_rgba(212,160,23,0.4)]" />

              <div className="relative p-6 sm:p-8 flex flex-col">
                {/* Emoji icon */}
                <div className="text-4xl sm:text-5xl mb-4">
                  {festival.emoji}
                </div>

                {/* Festival name */}
                <h3 className="text-xl sm:text-2xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mb-2 transition-colors duration-300 group-hover:text-royal-gold-dark">
                  {festival.name}
                </h3>

                {/* Date */}
                <span className="text-royal-gold font-semibold text-sm font-[family-name:var(--font-lato)] mb-3 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                  {festival.date}
                </span>

                {/* Tagline */}
                <p className="text-muted-foreground text-sm md:text-base font-[family-name:var(--font-lato)] mb-5 leading-relaxed">
                  {festival.tagline}
                </p>

                {/* Book Now CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-royal-gold/10 border border-royal-gold/30 text-royal-gold font-semibold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B8860B] hover:via-royal-gold hover:to-[#FFD700] hover:text-royal-maroon hover:border-transparent hover:shadow-md hover:shadow-royal-gold/20 font-[family-name:var(--font-lato)]"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom menu note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-royal-gold/5 border border-royal-gold/20">
            <span className="text-royal-gold text-lg">&#10022;</span>
            <p className="text-muted-foreground text-sm md:text-base font-[family-name:var(--font-lato)]">
              Custom menus available for all festivals and occasions
            </p>
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

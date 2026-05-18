'use client'

import { motion } from 'framer-motion'

interface Brand {
  id: string
  name: string
  fontStyle: string
}

const brandsRow1: Brand[] = [
  { id: 'purulia-palace', name: 'Purulia Palace', fontStyle: 'font-[family-name:var(--font-playfair)] italic' },
  { id: 'hotel-rajwada', name: 'Hotel Rajwada', fontStyle: 'font-[family-name:var(--font-playfair)]' },
  { id: 'bengal-club', name: 'Bengal Club', fontStyle: 'font-[family-name:var(--font-lato)] tracking-[0.2em] uppercase' },
  { id: 'chandra-mahal', name: 'Chandra Mahal', fontStyle: 'font-[family-name:var(--font-playfair)] italic' },
]

const brandsRow2: Brand[] = [
  { id: 'rathore-group', name: 'Rathore Group', fontStyle: 'font-[family-name:var(--font-lato)] font-black tracking-wider uppercase' },
  { id: 'sinha-estate', name: 'Sinha Estate', fontStyle: 'font-[family-name:var(--font-lato)] font-light tracking-[0.15em] uppercase' },
  { id: 'mukherjee-gardens', name: 'Mukherjee Gardens', fontStyle: 'font-[family-name:var(--font-playfair)] italic' },
  { id: 'puranidanga-hall', name: 'Puranidanga Hall', fontStyle: 'font-[family-name:var(--font-lato)] font-semibold tracking-wide' },
]

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="group flex-shrink-0 w-48 sm:w-56 md:w-64 px-4 sm:px-5 py-4 sm:py-5 rounded-xl bg-royal-cream border border-royal-gold/20 transition-all duration-300 hover:border-royal-gold/60 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)] hover:-translate-y-1 text-center">
      <span className={`text-sm sm:text-base md:text-lg text-royal-maroon ${brand.fontStyle} transition-colors duration-300 group-hover:text-royal-gold-dark`}>
        {brand.name}
      </span>
    </div>
  )
}

export default function RoyalBrandsSection() {
  return (
    <section
      id="brands"
      className="relative py-20 md:py-28 section-royal dark:bg-[#1a0f00]/30 overflow-hidden"
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-20" />

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-maroon/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-maroon font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Our Esteemed Clients
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Trusted By Purulia&apos;s Finest
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-muted-foreground text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            From grand weddings to corporate events, Purulia&apos;s top venues trust Maharaja
          </p>
        </motion.div>

        {/* Marquee Row 1 - scrolling left */}
        <div className="relative mb-6 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-royal-cream dark:from-[#1a0f00] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-royal-cream dark:from-[#1a0f00] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {/* Duplicate brands for seamless loop */}
            {[...brandsRow1, ...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, index) => (
              <BrandCard key={`row1-${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Gold divider line between rows */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent" />
        </div>

        {/* Marquee Row 2 - scrolling right (reverse) */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-royal-cream dark:from-[#1a0f00] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-royal-cream dark:from-[#1a0f00] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            {/* Duplicate brands for seamless loop */}
            {[...brandsRow2, ...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, index) => (
              <BrandCard key={`row2-${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Join Our Client List CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 font-[family-name:var(--font-lato)]"
          >
            Join Our Client List
          </a>
        </motion.div>
      </div>
    </section>
  )
}

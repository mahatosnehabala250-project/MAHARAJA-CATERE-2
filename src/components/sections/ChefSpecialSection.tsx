'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChefHat, ArrowRight } from 'lucide-react'

interface Dish {
  id: string
  name: string
  description: string
  price: string
  gradient: string
  icon: string
}

const dishes: Dish[] = [
  {
    id: 'kosha-mangsho',
    name: 'Kosha Mangsho',
    description: 'Slow-cooked mutton in rich Bengali spices, a royal delicacy',
    price: '₹450',
    gradient: 'from-royal-maroon via-royal-maroon-light to-royal-gold-dark',
    icon: '🍖',
  },
  {
    id: 'chingri-malaikari',
    name: 'Chingri Malaikari',
    description: 'Jumbo prawns in creamy coconut curry',
    price: '₹550',
    gradient: 'from-royal-gold-dark via-royal-gold to-royal-gold-light',
    icon: '🦐',
  },
  {
    id: 'misti-doi',
    name: 'Misti Doi Platter',
    description: 'Traditional sweet yogurt dessert trio',
    price: '₹200',
    gradient: 'from-royal-gold via-royal-cream to-royal-gold-light',
    icon: '🍮',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function FlipCard({ dish }: { dish: Dish }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div variants={cardVariants} className="group" style={{ perspective: '1000px' }}>
      <div
        className="relative w-full cursor-pointer"
        style={{
          perspective: '1000px',
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front face */}
          <div
            className="relative h-80 sm:h-96 rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Image placeholder with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${dish.gradient} opacity-80`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Mandala overlay */}
            <div className="absolute inset-0 mandala-bg opacity-20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
              {/* Dish icon */}
              <span className="text-5xl sm:text-6xl mb-4 drop-shadow-lg">{dish.icon}</span>

              {/* Dish name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mb-3">
                {dish.name}
              </h3>

              {/* Chef hat badge */}
              <div className="flex items-center gap-2 bg-royal-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-royal-gold/30">
                <ChefHat className="w-4 h-4 text-royal-gold" />
                <span className="text-royal-cream/90 text-sm font-[family-name:var(--font-lato)]">
                  Hover to Reveal
                </span>
              </div>
            </div>

            {/* Gold border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-royal-gold/30 pointer-events-none" />
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 h-80 sm:h-96 rounded-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon via-[#4A0020] to-royal-maroon-light" />
            <div className="absolute inset-0 mandala-bg opacity-20" />

            {/* Gold border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-royal-gold/40 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center">
              {/* Chef hat icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-royal-gold/15 flex items-center justify-center mb-5">
                <ChefHat className="w-7 h-7 sm:w-8 sm:h-8 text-royal-gold" />
              </div>

              {/* Dish name */}
              <h3 className="text-xl sm:text-2xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mb-4">
                {dish.name}
              </h3>

              {/* Description */}
              <p className="text-royal-cream/80 text-sm sm:text-base font-[family-name:var(--font-lato)] leading-relaxed mb-6 max-w-xs">
                {dish.description}
              </p>

              {/* Price */}
              <div className="bg-royal-gold/10 backdrop-blur-sm px-6 py-2 rounded-full border border-royal-gold/30 mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold text-royal-gold font-[family-name:var(--font-playfair)]">
                  {dish.price}
                </span>
              </div>

              {/* Order Now link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-royal-gold hover:text-royal-gold-light font-semibold text-sm font-[family-name:var(--font-lato)] transition-colors duration-300 group/link"
                onClick={(e) => e.stopPropagation()}
              >
                Order Now
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ChefSpecialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="chef-special"
      className="relative py-16 sm:py-20 md:py-28 section-dark-royal overflow-hidden"
      ref={sectionRef}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Exclusive Dishes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Chef&apos;s Special
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-cream/80 text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Our signature dishes crafted with passion, tradition, and royal flavors
          </p>
        </motion.div>

        {/* Flip cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {dishes.map((dish) => (
            <FlipCard key={dish.id} dish={dish} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

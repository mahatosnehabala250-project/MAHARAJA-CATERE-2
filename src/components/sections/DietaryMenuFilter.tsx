'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type DietaryTag = 'Vegetarian' | 'Vegan' | 'Nut-Free' | 'Gluten-Free' | 'Dairy-Free' | 'Spicy'

interface DietaryFilter {
  id: DietaryTag
  emoji: string
  label: string
  badgeColor: string
  activeBadgeColor: string
}

interface FoodItem {
  id: string
  name: string
  description: string
  tags: DietaryTag[]
  emoji: string
}

const dietaryFilters: DietaryFilter[] = [
  {
    id: 'Vegetarian',
    emoji: '🥬',
    label: 'Vegetarian',
    badgeColor: 'bg-green-100 text-green-700 border-green-200',
    activeBadgeColor: 'bg-green-500 text-white border-green-500',
  },
  {
    id: 'Vegan',
    emoji: '🌱',
    label: 'Vegan',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    activeBadgeColor: 'bg-emerald-500 text-white border-emerald-500',
  },
  {
    id: 'Nut-Free',
    emoji: '🥜',
    label: 'Nut-Free',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    activeBadgeColor: 'bg-amber-500 text-white border-amber-500',
  },
  {
    id: 'Gluten-Free',
    emoji: '🍞',
    label: 'Gluten-Free',
    badgeColor: 'bg-orange-100 text-orange-700 border-orange-200',
    activeBadgeColor: 'bg-orange-500 text-white border-orange-500',
  },
  {
    id: 'Dairy-Free',
    emoji: '🥛',
    label: 'Dairy-Free',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    activeBadgeColor: 'bg-blue-500 text-white border-blue-500',
  },
  {
    id: 'Spicy',
    emoji: '🌶️',
    label: 'Spicy',
    badgeColor: 'bg-red-100 text-red-700 border-red-200',
    activeBadgeColor: 'bg-red-500 text-white border-red-500',
  },
]

const foodItems: FoodItem[] = [
  {
    id: 'food-1',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with aromatic spices and bell peppers',
    tags: ['Vegetarian', 'Gluten-Free'],
    emoji: '🧀',
  },
  {
    id: 'food-2',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with cumin, garlic, and ghee',
    tags: ['Vegan', 'Gluten-Free'],
    emoji: '🍲',
  },
  {
    id: 'food-3',
    name: 'Veg Biryani',
    description: 'Fragrant basmati rice layered with seasonal vegetables',
    tags: ['Vegetarian', 'Nut-Free'],
    emoji: '🍚',
  },
  {
    id: 'food-4',
    name: 'Chingri Malaikari',
    description: 'Prawns in rich coconut gravy, a Bengali classic',
    tags: ['Nut-Free', 'Spicy'],
    emoji: '🦐',
  },
  {
    id: 'food-5',
    name: 'Aloo Gobi',
    description: 'Dry preparation of potato and cauliflower with turmeric',
    tags: ['Vegan', 'Dairy-Free', 'Nut-Free'],
    emoji: '🥔',
  },
  {
    id: 'food-6',
    name: 'Misti Doi',
    description: 'Traditional sweetened caramel yogurt dessert',
    tags: ['Vegetarian', 'Gluten-Free', 'Nut-Free'],
    emoji: '🍮',
  },
  {
    id: 'food-7',
    name: 'Kosha Mangsho',
    description: 'Slow-cooked mutton in rich Bengali spice gravy',
    tags: ['Spicy', 'Nut-Free', 'Dairy-Free'],
    emoji: '🍖',
  },
  {
    id: 'food-8',
    name: 'Veg Hakka Noodles',
    description: 'Stir-fried noodles with crunchy vegetables and sauces',
    tags: ['Vegetarian', 'Dairy-Free'],
    emoji: '🍜',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function DietaryMenuFilter() {
  const [selectedFilters, setSelectedFilters] = useState<Set<DietaryTag>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const toggleFilter = (tag: DietaryTag) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) {
        next.delete(tag)
      } else {
        next.add(tag)
      }
      return next
    })
  }

  const filteredItems =
    selectedFilters.size === 0
      ? foodItems
      : foodItems.filter((item) =>
          item.tags.some((tag) => selectedFilters.has(tag))
        )

  const getFilterConfig = (tag: DietaryTag) =>
    dietaryFilters.find((f) => f.id === tag)!

  return (
    <section
      id="dietary"
      className="relative py-20 md:py-28 section-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-30" />

      {/* Decorative SVG corners */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Eat Your Way
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Dietary Preferences
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-maroon/70 text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Filter our menu by your dietary needs — everyone deserves a royal feast
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {dietaryFilters.map((filter) => {
            const isActive = selectedFilters.has(filter.id)
            return (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border-2 text-sm font-semibold font-[family-name:var(--font-lato)] transition-all duration-300 ${
                  isActive
                    ? `${filter.activeBadgeColor} border-transparent shadow-lg scale-105`
                    : `${filter.badgeColor} hover:shadow-md hover:scale-[1.03]`
                }`}
                aria-label={`Filter by ${filter.label}`}
                aria-pressed={isActive}
              >
                <span role="img" aria-hidden="true">{filter.emoji}</span>
                {filter.label}
              </button>
            )
          })}
        </motion.div>

        {/* Active filter count */}
        {selectedFilters.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-royal-gold/15 text-royal-gold text-sm font-semibold font-[family-name:var(--font-lato)] px-4 py-2 rounded-full">
              Showing {filteredItems.length} of {foodItems.length} items
              <button
                onClick={() => setSelectedFilters(new Set())}
                className="ml-1 underline hover:text-royal-maroon transition-colors"
                aria-label="Clear all filters"
              >
                Clear all
              </button>
            </span>
          </motion.div>
        )}

        {/* Food cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={Array.from(selectedFilters).join(',')}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-royal-gold/20 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-royal-gold/60 hover:shadow-[0_0_25px_rgba(212,160,23,0.2)]"
              >
                {/* Gold left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-royal-gold via-royal-gold-light to-royal-gold opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-5 md:p-6">
                  {/* Food emoji and name */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl flex-shrink-0" role="img" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-royal-maroon font-[family-name:var(--font-playfair)] leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-royal-maroon/60 text-sm font-[family-name:var(--font-lato)] mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dietary badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => {
                      const config = getFilterConfig(tag)
                      return (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 text-[11px] font-semibold font-[family-name:var(--font-lato)] px-2 py-0.5 rounded-full border ${
                            selectedFilters.has(tag)
                              ? config.activeBadgeColor
                              : config.badgeColor
                          } transition-colors duration-200`}
                        >
                          <span role="img" aria-hidden="true">{config.emoji}</span>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-royal-maroon/50 text-lg font-[family-name:var(--font-lato)]">
              No items match your selected filters. Try a different combination!
            </p>
          </motion.div>
        )}

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-light text-royal-maroon font-bold text-base font-[family-name:var(--font-lato)] px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-royal-gold/30 hover:scale-[1.03] transition-all duration-300 animate-pulse-glow group"
            aria-label="View full menu"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

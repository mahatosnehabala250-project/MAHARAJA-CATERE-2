'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface MenuCategory {
  id: string
  label: string
  items: string[]
}

const menuCategories: MenuCategory[] = [
  {
    id: 'bengali',
    label: 'Bengali',
    items: [
      'Shukto',
      'Begun Bhaja',
      'Macher Jhol',
      'Chingri Malaikari',
      'Kosha Mangsho',
      'Misti Doi',
      'Rosogolla',
      'Payesh',
    ],
  },
  {
    id: 'north-indian',
    label: 'North Indian',
    items: [
      'Paneer Butter Masala',
      'Dal Makhani',
      'Butter Chicken',
      'Biryani',
      'Naan',
      'Gulab Jamun',
      'Rasmalai',
    ],
  },
  {
    id: 'chinese',
    label: 'Chinese',
    items: [
      'Manchurian',
      'Fried Rice',
      'Chilli Chicken',
      'Sweet Corn Soup',
      'Spring Rolls',
      'Honey Noodles',
    ],
  },
  {
    id: 'tandoori',
    label: 'Tandoori',
    items: [
      'Tandoori Chicken',
      'Seekh Kebab',
      'Paneer Tikka',
      'Naan',
      'Rumali Roti',
      'Malai Tikka',
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      'Rosogolla',
      'Sandesh',
      'Misti Doi',
      'Gulab Jamun',
      'Rasmalai',
      'Payesh',
      'Kulfi',
      'Rabri',
    ],
  },
]

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('bengali')

  const activeCategory = menuCategories.find((c) => c.id === activeTab)

  return (
    <section id="menu" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 text-[#D4A017] text-sm font-[family-name:var(--font-lato)] font-medium tracking-wide mb-4">
            <UtensilsCrossed className="w-4 h-4" />
            Our Menu
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-[#800020] mb-4">
            Choose Your Feast
          </h2>

          {/* Subheading */}
          <p className="text-[#444444] text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-[family-name:var(--font-lato)] leading-relaxed">
            100+ dishes across 5 cuisines — pick your favorites, and we&apos;ll make them extraordinary
          </p>
        </motion.div>

        {/* Menu Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-10 md:mb-14">
            <TabsList className="bg-transparent h-auto p-0 gap-0 flex flex-wrap justify-center border-b border-[#E8E4DD] rounded-none">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="
                    relative
                    bg-transparent
                    rounded-none
                    border-b-[3px]
                    border-b-transparent
                    px-4 sm:px-6 py-3
                    text-sm sm:text-base
                    font-[family-name:var(--font-lato)]
                    font-medium
                    text-[#555555]
                    hover:text-[#444444]
                    transition-colors duration-200
                    data-[state=active]:bg-transparent
                    data-[state=active]:text-[#800020]
                    data-[state=active]:border-b-[#D4A017]
                    data-[state=active]:shadow-none
                    data-[state=active]:font-semibold
                  "
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <TabsContent
                key={activeCategory.id}
                value={activeCategory.id}
                className="outline-none"
                forceMount
              >
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-5 max-w-3xl mx-auto"
                >
                  {activeCategory.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="flex items-center gap-3 py-2.5 border-b border-[#E8E4DD]/60 hover:translate-x-1 transition-transform"
                    >
                      {/* Gold dot separator */}
                      <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#D4A017]" />
                      {/* Item name */}
                      <span className="text-[#1A1A1A] text-base font-[family-name:var(--font-lato)] font-medium leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 md:mt-18 mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent"
        />
      </div>
    </section>
  )
}

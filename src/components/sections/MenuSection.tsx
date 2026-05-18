'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Utensils, Fish, Leaf, Flame, Soup, IceCream, Drumstick, Cake, Wheat, Sandwich, Cookie } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { LucideIcon } from 'lucide-react'

interface MenuItem {
  name: string
  description: string
  icon: LucideIcon
}

interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: 'bengali',
    label: 'Bengali Special',
    items: [
      { name: 'Macher Jhol (Fish Curry)', description: 'Traditional Bengali fish curry with fresh river fish and aromatic spices', icon: Fish },
      { name: 'Shukto', description: 'Classic Bengali bitter-sweet medley of vegetables', icon: Leaf },
      { name: 'Chingri Malaikari', description: 'Prawns in rich coconut milk gravy', icon: Soup },
      { name: 'Kosha Mangsho', description: 'Slow-cooked mutton in rich spicy gravy', icon: Drumstick },
      { name: 'Aloo Posto', description: 'Potatoes in poppy seed paste', icon: Wheat },
      { name: 'Ilish Bhapa', description: 'Steamed hilsa in mustard sauce', icon: Fish },
    ],
  },
  {
    id: 'indian',
    label: 'Indian Classics',
    items: [
      { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', icon: Drumstick },
      { name: 'Paneer Butter Masala', description: 'Rich cottage cheese in butter gravy', icon: Cake },
      { name: 'Chicken Biryani', description: 'Fragrant basmati rice with spiced chicken', icon: Wheat },
      { name: 'Dal Makhani', description: 'Slow-cooked black lentils with cream', icon: Soup },
      { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', icon: Leaf },
      { name: 'Veg Thali', description: 'Complete meal with variety of dishes', icon: Utensils },
    ],
  },
  {
    id: 'chinese',
    label: 'Chinese Delights',
    items: [
      { name: 'Chicken Manchurian', description: 'Spicy chicken in Indo-Chinese sauce', icon: Drumstick },
      { name: 'Veg Fried Rice', description: 'Wok-tossed rice with vegetables', icon: Wheat },
      { name: 'Chilli Chicken', description: 'Crispy chicken in hot garlic sauce', icon: Flame },
      { name: 'Gobi Manchurian', description: 'Crispy cauliflower in tangy sauce', icon: Leaf },
      { name: 'Hakka Noodles', description: 'Stir-fried noodles with vegetables', icon: Wheat },
      { name: 'Sweet Corn Soup', description: 'Creamy sweet corn soup', icon: Soup },
    ],
  },
  {
    id: 'tandoori',
    label: 'Tandoori Corner',
    items: [
      { name: 'Tandoori Chicken', description: 'Clay oven roasted marinated chicken', icon: Drumstick },
      { name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', icon: Cake },
      { name: 'Chicken Tikka', description: 'Char-grilled spiced chicken pieces', icon: Flame },
      { name: 'Seekh Kebab', description: 'Minced meat skewers from tandoor', icon: Drumstick },
      { name: 'Tandoori Naan', description: 'Freshly baked bread from clay oven', icon: Sandwich },
      { name: 'Fish Tikka', description: 'Marinated fish grilled to perfection', icon: Fish },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts & Sweets',
    items: [
      { name: 'Rasgulla', description: 'Soft spongy cheese balls in sugar syrup', icon: Cookie },
      { name: 'Gulab Jamun', description: 'Deep fried milk dumplings in rose syrup', icon: Cake },
      { name: 'Sandesh', description: 'Traditional Bengali sweet made from cottage cheese', icon: Cookie },
      { name: 'Rasmalai', description: 'Cheese patties in saffron milk', icon: IceCream },
      { name: 'Payesh (Kheer)', description: 'Traditional rice pudding with nuts', icon: Soup },
      { name: 'Jalebi', description: 'Crispy spirals soaked in saffron sugar syrup', icon: Cookie },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const Icon = item.icon
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-card/80 backdrop-blur-sm border border-royal-gold/20 rounded-xl p-5 hover:border-royal-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/10 hover:-translate-y-1"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-maroon/10 flex items-center justify-center group-hover:bg-royal-maroon/20 transition-colors duration-300">
          <Icon className="w-5 h-5 text-royal-maroon" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-royal-maroon text-base leading-snug">{item.name}</h4>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
        </div>
      </div>
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent group-hover:via-royal-gold/70 transition-colors duration-300" />
    </motion.div>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="section-dark-royal relative py-20 md:py-28 overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="mandala-bg absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
            Our Royal Menu
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-4">
            <span className="text-royal-gold text-2xl">&#10022;</span>
          </div>
          <p className="text-royal-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
            Bengali, Indian, Chinese &amp; Tandoori Specialties
          </p>
        </motion.div>

        {/* Featured image banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 rounded-2xl overflow-hidden border border-royal-gold/30 relative h-64 md:h-80"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B00] via-transparent to-transparent z-10" />
          <Image
            src="/images/food-1.png"
            alt="Signature dishes from Maharaja Caterer"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-royal-gold font-semibold text-lg md:text-xl">Signature Dishes</p>
            <p className="text-royal-cream/70 text-sm md:text-base">Crafted with passion &amp; tradition</p>
          </div>
        </motion.div>

        {/* Menu Tabs */}
        <Tabs defaultValue="bengali" className="w-full">
          <div className="flex justify-center mb-8 md:mb-10">
            <TabsList className="flex flex-wrap justify-center gap-1 bg-royal-maroon/20 border border-royal-gold/20 p-1.5 rounded-xl h-auto">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-royal-maroon data-[state=active]:text-royal-gold data-[state=active]:shadow-md text-royal-cream/70 px-3 py-2 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 hover:text-royal-cream"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {category.items.map((item, index) => (
                  <MenuItemCard key={item.name} item={item} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

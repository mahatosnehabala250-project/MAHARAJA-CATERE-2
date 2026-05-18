'use client'

import { motion } from 'framer-motion'

interface GalleryItem {
  title: string
  gradient: string
}

const galleryItems: GalleryItem[] = [
  { title: 'Wedding Feast Setup', gradient: 'from-rose-100 to-amber-100' },
  { title: 'Bengali Thali Spread', gradient: 'from-yellow-100 to-orange-100' },
  { title: 'Dessert Station', gradient: 'from-pink-100 to-rose-100' },
  { title: 'Tandoori Counter', gradient: 'from-orange-100 to-red-100' },
  { title: 'Corporate Lunch Setup', gradient: 'from-slate-100 to-gray-100' },
  { title: 'Celebration Cake Table', gradient: 'from-amber-100 to-yellow-100' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group card-royal-hover"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        {/* Gradient placeholder background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 ease-out group-hover:scale-105`}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span
            className="text-white text-sm sm:text-base font-[family-name:var(--font-lato)] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            {item.title}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FAFAF5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-[family-name:var(--font-lato)] font-semibold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: '#D4A01720',
              color: '#D4A017',
              border: '1px solid #D4A01740',
            }}
          >
            Our Work
          </span>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4"
            style={{ color: '#800020' }}
          >
            See What a Royal Feast Looks Like
          </h2>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-[family-name:var(--font-lato)]"
            style={{ color: '#555555' }}
          >
            Every dish is a masterpiece. Every event, a celebration to remember.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

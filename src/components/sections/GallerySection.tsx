'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface GalleryItem {
  title: string
  src: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  {
    title: 'Wedding Feast Setup',
    src: '/images/gallery-1.jpg',
    alt: 'Elegant Indian wedding feast with traditional dishes and gold decorations',
  },
  {
    title: 'Bengali Thali Spread',
    src: '/images/gallery-2.jpg',
    alt: 'Traditional Bengali thali with rice, dal, fish curry and authentic dishes',
  },
  {
    title: 'Dessert Station',
    src: '/images/gallery-3.jpg',
    alt: 'Indian dessert station with rosogolla, sandesh and traditional sweets',
  },
  {
    title: 'Tandoori Counter',
    src: '/images/gallery-4.jpg',
    alt: 'Tandoori counter with kebabs, tandoori chicken and fresh naan bread',
  },
  {
    title: 'Corporate Lunch Setup',
    src: '/images/gallery-5.jpg',
    alt: 'Professional corporate lunch catering with elegant presentation',
  },
  {
    title: 'Celebration Cake Table',
    src: '/images/gallery-6.jpg',
    alt: 'Celebration cake table with gold and maroon decorated desserts',
  },
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

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group cursor-pointer card-royal-hover"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        {/* Real image */}
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Hover icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-[#800020]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          </div>
        </div>

        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-white text-sm sm:text-base font-[family-name:var(--font-lato)] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {item.title}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#FAFAF5' }}
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

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
            style={{ color: '#444444' }}
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
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.title}
              item={item}
              onClick={() => openLightbox(index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              className="absolute left-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-5xl max-h-[80vh] w-full aspect-[16/10] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg font-[family-name:var(--font-playfair)] font-semibold">
                  {galleryItems[activeIndex].title}
                </p>
                <p className="text-white/70 text-sm font-[family-name:var(--font-lato)] mt-1">
                  {activeIndex + 1} / {galleryItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

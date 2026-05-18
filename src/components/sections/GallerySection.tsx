'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

interface GalleryImage {
  src: string
  alt: string
  title: string
  aspectClass: string
}

const galleryImages: GalleryImage[] = [
  { src: '/images/hero-bg.png', alt: 'Grand Wedding Setup', title: 'Grand Wedding Setup', aspectClass: 'aspect-[4/3]' },
  { src: '/images/food-1.png', alt: 'Signature Biryani', title: 'Signature Biryani', aspectClass: 'aspect-[3/4]' },
  { src: '/images/event-wedding.png', alt: 'Wedding Ceremony', title: 'Wedding Ceremony', aspectClass: 'aspect-[4/3]' },
  { src: '/images/food-desserts.png', alt: 'Sweet Celebrations', title: 'Sweet Celebrations', aspectClass: 'aspect-[3/4]' },
  { src: '/images/event-birthday.png', alt: 'Birthday Bash', title: 'Birthday Bash', aspectClass: 'aspect-[4/3]' },
  { src: '/images/food-tandoori.png', alt: 'Tandoori Delights', title: 'Tandoori Delights', aspectClass: 'aspect-[3/4]' },
  { src: '/images/event-reception.png', alt: 'Grand Reception', title: 'Grand Reception', aspectClass: 'aspect-[4/3]' },
  { src: '/images/event-family.png', alt: 'Family Function', title: 'Family Function', aspectClass: 'aspect-[3/4]' },
  { src: '/images/team-service.png', alt: 'Our Service Team', title: 'Our Service Team', aspectClass: 'aspect-[4/3]' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function GalleryCard({
  image,
  onClick,
  isWide,
}: {
  image: GalleryImage
  onClick: () => void
  isWide: boolean
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group cursor-pointer ${isWide ? 'lg:col-span-2' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-royal-gold/30 group-hover:border-royal-gold/70 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:shadow-royal-gold/20">
        <div className={`${image.aspectClass} w-full relative`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        {/* Gold shimmer overlay on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-royal-gold/20 to-transparent skew-x-12" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/90 via-royal-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
          <ZoomIn className="w-8 h-8 text-royal-gold mb-2 drop-shadow-lg" />
          <h3 className="text-royal-cream font-bold text-lg text-center drop-shadow-lg">
            {image.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null
  const isOpen = selectedIndex !== null

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
  }, [selectedIndex])

  const goNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % galleryImages.length)
  }, [selectedIndex])

  return (
    <section id="gallery" className="section-royal relative py-20 md:py-28 overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="mandala-bg absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-gradient mb-4">
            Royal Gallery
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-4">
            <span className="text-royal-gold text-2xl">&#10022;</span>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A glimpse into our grand celebrations &amp; culinary artistry
          </p>
        </motion.div>

        {/* Gallery Grid with masonry-like layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={image.src}
              image={image}
              onClick={() => setSelectedIndex(index)}
              isWide={index === 0 || index === galleryImages.length - 1}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) setSelectedIndex(null) }}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] p-0 bg-black/98 backdrop-blur-xl border-royal-gold/30 overflow-hidden [&>button]:hidden">
          <DialogTitle className="sr-only">{selectedImage?.title ?? 'Gallery image'}</DialogTitle>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-royal-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              {/* Previous arrow */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-royal-gold/80 flex items-center justify-center text-royal-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {/* Next arrow */}
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-royal-gold/80 flex items-center justify-center text-royal-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-royal-gold font-bold text-xl md:text-2xl">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

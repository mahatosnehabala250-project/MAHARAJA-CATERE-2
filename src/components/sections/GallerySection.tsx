'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
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
}: {
  image: GalleryImage
  onClick: () => void
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group cursor-pointer"
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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const isOpen = selectedImage !== null

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

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryImages.map((image) => (
            <GalleryCard
              key={image.src}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) setSelectedImage(null) }}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] p-0 bg-black/95 border-royal-gold/40 overflow-hidden [&>button]:hidden">
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
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-royal-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
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

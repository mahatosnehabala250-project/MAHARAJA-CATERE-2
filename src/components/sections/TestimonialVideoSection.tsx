'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Play, X } from 'lucide-react'

interface VideoTestimonial {
  id: string
  name: string
  eventType: string
  rating: number
  quote: string
  thumbnailGradient: string
}

const testimonials: VideoTestimonial[] = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    eventType: 'Wedding Reception',
    rating: 5,
    quote: 'Best catering in Purulia!',
    thumbnailGradient: 'from-royal-maroon via-royal-maroon-light to-royal-gold-dark',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    eventType: 'Corporate Event',
    rating: 5,
    quote: 'Professional and delicious',
    thumbnailGradient: 'from-royal-gold-dark via-royal-gold to-royal-gold-light',
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-4 ${
            star <= rating
              ? 'fill-royal-gold text-royal-gold'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  )
}

function VideoCard({
  testimonial,
  onPlay,
}: {
  testimonial: VideoTestimonial
  onPlay: () => void
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="group cursor-pointer"
      onClick={onPlay}
    >
      <div className="rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-royal-gold/20 overflow-hidden transition-all duration-300 hover:border-royal-gold/60 hover:shadow-[0_0_25px_rgba(212,160,23,0.15)] hover:scale-[1.02]">
        {/* Thumbnail area */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {/* Gradient placeholder background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.thumbnailGradient} opacity-70`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 mandala-bg opacity-20" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-royal-gold/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-black/20 transition-all duration-300 group-hover:bg-royal-gold group-hover:shadow-2xl group-hover:shadow-royal-gold/30"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
            </motion.div>
          </div>

          {/* Video testimonial badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 bg-royal-maroon/90 backdrop-blur-sm text-royal-cream text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-[family-name:var(--font-lato)]">
              <Play className="w-3 h-3 fill-royal-cream" />
              Video
            </span>
          </div>
        </div>

        {/* Info area */}
        <div className="p-4 sm:p-5">
          {/* Quote */}
          <p className="text-royal-maroon/80 text-sm font-[family-name:var(--font-lato)] italic mb-3">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent mb-3" />

          {/* Author info */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-royal-maroon text-sm font-[family-name:var(--font-playfair)]">
                {testimonial.name}
              </h4>
              <p className="text-xs text-muted-foreground font-[family-name:var(--font-lato)]">
                {testimonial.eventType}
              </p>
            </div>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function VideoModal({
  testimonial,
  onClose,
}: {
  testimonial: VideoTestimonial | null
  onClose: () => void
}) {
  if (!testimonial) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-royal-cream border-2 border-royal-gold/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
          aria-label="Close video modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video area / Coming Soon overlay */}
        <div className="relative aspect-video bg-gradient-to-br from-royal-maroon via-[#4A0020] to-royal-gold-dark">
          <div className="absolute inset-0 mandala-bg opacity-20" />

          {/* Coming Soon overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-royal-gold/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-royal-gold/30">
                <Play className="w-10 h-10 text-royal-gold fill-royal-gold" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mb-2">
                Coming Soon
              </h4>
              <p className="text-royal-cream/60 text-sm font-[family-name:var(--font-lato)] max-w-xs">
                Video testimonials from our happy clients are on the way!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Info bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between bg-royal-cream">
          <div>
            <h4 className="font-bold text-royal-maroon font-[family-name:var(--font-playfair)]">
              {testimonial.name}
            </h4>
            <p className="text-xs text-muted-foreground font-[family-name:var(--font-lato)]">
              {testimonial.eventType}
            </p>
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TestimonialVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null)

  return (
    <>
      <section
        id="video-testimonials"
        className="relative py-20 md:py-28 section-royal overflow-hidden"
        ref={sectionRef}
      >
        {/* Mandala pattern background */}
        <div className="absolute inset-0 mandala-bg opacity-30" />

        {/* Decorative corner elements */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20 rotate-90">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20 -rotate-90">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 opacity-20 rotate-180">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>

        {/* Decorative radial glows */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-maroon/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-18"
          >
            <span className="text-royal-maroon font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
              Video Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
              Hear From Our Clients
            </h2>
            {/* Ornament divider */}
            <div className="ornament-divider max-w-xs mx-auto">
              <span className="text-royal-gold text-lg">&#10022;</span>
            </div>
            <p className="mt-6 text-muted-foreground text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
              Watch our clients share their unforgettable Maharaja Caterer experiences
            </p>
          </motion.div>

          {/* Video testimonial cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <VideoCard
                key={testimonial.id}
                testimonial={testimonial}
                onPlay={() => setActiveVideo(testimonial)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            testimonial={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

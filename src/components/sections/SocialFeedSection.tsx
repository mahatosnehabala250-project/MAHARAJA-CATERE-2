'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Instagram } from 'lucide-react'

interface SocialPost {
  id: string
  likes: number
  caption: string
  gradientFrom: string
  gradientTo: string
}

const posts: SocialPost[] = [
  {
    id: 'post-1',
    likes: 234,
    caption: 'Royal wedding setup ✨ #MaharajaCaterer',
    gradientFrom: '#800020',
    gradientTo: '#D4A017',
  },
  {
    id: 'post-2',
    likes: 189,
    caption: 'Traditional Bengali thali 🍽️ #PuruliaFood',
    gradientFrom: '#D4A017',
    gradientTo: '#800020',
  },
  {
    id: 'post-3',
    likes: 312,
    caption: 'Festive Durga Puja feast 🌸',
    gradientFrom: '#800020',
    gradientTo: '#4A0012',
  },
  {
    id: 'post-4',
    likes: 156,
    caption: 'Corporate lunch excellence 💼',
    gradientFrom: '#2D1B00',
    gradientTo: '#D4A017',
  },
  {
    id: 'post-5',
    likes: 278,
    caption: 'Garden wedding magic 🌿',
    gradientFrom: '#1a0f00',
    gradientTo: '#800020',
  },
  {
    id: 'post-6',
    likes: 198,
    caption: 'Chef\'s special preparation 👨‍🍳',
    gradientFrom: '#D4A017',
    gradientTo: '#2D1B00',
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

export default function SocialFeedSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="social"
      className="relative py-20 md:py-28 section-dark-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            @maharajacaterer on Instagram
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Follow Our Journey
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="group relative aspect-square rounded-xl overflow-hidden border-2 border-royal-gold/20 transition-all duration-300 hover:border-royal-gold/60 hover:shadow-[0_0_25px_rgba(212,160,23,0.2)] hover:scale-[1.03]"
            >
              {/* Gradient placeholder background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                }}
              />

              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-20 mandala-bg" />

              {/* Heart + likes overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-8 h-8 text-white fill-white mb-2" />
                <span className="text-white font-bold text-lg font-[family-name:var(--font-lato)]">
                  {post.likes}
                </span>
              </div>

              {/* Always-visible like indicator at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2.5">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" />
                  <span className="text-white text-xs font-semibold font-[family-name:var(--font-lato)]">
                    ❤️ {post.likes}
                  </span>
                </div>
                <p className="text-white/90 text-[10px] font-[family-name:var(--font-lato)] mt-0.5 line-clamp-2">
                  {post.caption}
                </p>
              </div>

              {/* Instagram icon top-right */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/maharajacaterer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-royal-gold/30 font-[family-name:var(--font-lato)]"
            style={{ background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)' }}
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

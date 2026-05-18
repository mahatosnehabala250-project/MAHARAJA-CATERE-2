'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface ContactInfo {
  id: string
  icon: typeof MapPin
  title: string
  detail: string
  href?: string
}

const contactInfo: ContactInfo[] = [
  {
    id: 'address',
    icon: MapPin,
    title: 'Address',
    detail: 'Maharaja Caterer, Near Bus Stand, Purulia, West Bengal 723101',
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Phone',
    detail: '+91 89450 05456',
    href: 'tel:+918945005456',
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    detail: 'maharajaCaterer104@gmail.com',
    href: 'mailto:maharajaCaterer104@gmail.com',
  },
  {
    id: 'hours',
    icon: Clock,
    title: 'Business Hours',
    detail: 'Mon-Sun 8:00 AM - 10:00 PM',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const mapVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function InteractiveMapSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="location"
      className="relative py-20 md:py-28 section-dark-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-40" />

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Find Us in Purulia
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
          <p className="mt-6 text-royal-cream/80 text-base md:text-lg font-[family-name:var(--font-lato)] max-w-2xl mx-auto">
            Conveniently located near Purulia Bus Stand — visit us or reach out anytime
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.id}
                variants={cardVariants}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-royal-cream/5 border border-royal-gold/15 border-l-4 border-l-royal-gold transition-all duration-300 hover:bg-royal-cream/10 hover:border-l-royal-gold-light hover:scale-[1.02] hover:shadow-lg hover:shadow-royal-gold/10"
                  >
                    <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-royal-gold/15 flex items-center justify-center group-hover:bg-royal-gold/25 transition-colors duration-300">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-royal-gold" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-royal-gold font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-lato)] mb-1">
                        {info.title}
                      </h4>
                      <p className="text-royal-cream/90 text-sm sm:text-base font-[family-name:var(--font-lato)] break-words">
                        {info.detail}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-royal-cream/5 border border-royal-gold/15 border-l-4 border-l-royal-gold transition-all duration-300 hover:bg-royal-cream/10 hover:border-l-royal-gold-light hover:scale-[1.02] hover:shadow-lg hover:shadow-royal-gold/10">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-royal-gold/15 flex items-center justify-center group-hover:bg-royal-gold/25 transition-colors duration-300">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-royal-gold" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-royal-gold font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-lato)] mb-1">
                        {info.title}
                      </h4>
                      <p className="text-royal-cream/90 text-sm sm:text-base font-[family-name:var(--font-lato)] break-words">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Quick CTA */}
            <motion.div variants={cardVariants} className="mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-light text-royal-maroon font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 font-[family-name:var(--font-lato)]"
              >
                <Phone className="w-4 h-4" />
                Book a Visit
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Google Maps embed */}
          <motion.div
            variants={mapVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-royal-gold/30 shadow-xl shadow-royal-gold/10 transition-all duration-300 hover:border-royal-gold/50 hover:shadow-2xl hover:shadow-royal-gold/15">
              {/* Gold frame decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-royal-gold/60 z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal-gold/60 z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-royal-gold/60 z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-royal-gold/60 z-10 pointer-events-none" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.641440837684!2d86.34!3d23.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3f5c1e1e1e1%3A0x0!2sPurulia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maharaja Caterer Location - Purulia, West Bengal"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>

            {/* Map label */}
            <div className="mt-4 text-center">
              <p className="text-royal-cream/60 text-xs sm:text-sm font-[family-name:var(--font-lato)]">
                📍 Near Bus Stand, Purulia, West Bengal 723101
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    eventType: 'Wedding',
    location: 'Purulia Town',
    comment: 'Absolutely incredible food! Our wedding guests couldn\'t stop complimenting the biryani and dessert spread.',
  },
  {
    name: 'Amit Das',
    rating: 5,
    eventType: 'Reception',
    location: 'Durgapur',
    comment: 'Outstanding service and mouth-watering food. The tandoori items were the star of our reception.',
  },
  {
    name: 'Debashis Roy',
    rating: 5,
    eventType: 'Wedding',
    location: 'Kolkata',
    comment: 'From the first meeting to the last plate served, Maharaja Caterer exceeded all expectations.',
  },
  {
    name: 'Anita Chakraborty',
    rating: 5,
    eventType: 'Birthday',
    location: 'Asansol',
    comment: 'Fresh food, perfect presentation, and flawless team coordination. An unforgettable celebration!',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-3.5 ${star <= rating ? 'fill-royal-gold text-royal-gold' : 'fill-muted text-muted'}`}
        />
      ))}
    </div>
  )
}

const eventColors: Record<string, string> = {
  Wedding: 'bg-royal-maroon text-white',
  Birthday: 'bg-royal-gold text-white',
  Reception: 'bg-royal-red text-white',
}

export default function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section
      id="reviews"
      className="section-dark-royal py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 mandala-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gold-gradient font-[var(--font-playfair)] mb-4">
            Royal Reviews
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-4">
            <span className="text-royal-gold text-xl">✦</span>
          </div>
          <p className="text-royal-cream/70 text-lg font-[var(--font-cormorant)]">
            What Our Valued Guests Say
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="h-full rounded-xl p-6 bg-royal-cream/95 border border-royal-gold/20 hover:border-royal-gold/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-royal-gold/10 transition-all duration-300 flex flex-col">
                      {/* Comment */}
                      <p className="text-royal-maroon/80 text-sm leading-relaxed mb-4 flex-1 font-[var(--font-lato)]">
                        &ldquo;{testimonial.comment}&rdquo;
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent mb-4" />

                      {/* Author info */}
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal-gold to-royal-gold-dark flex items-center justify-center text-white font-bold text-xs shrink-0">
                          {getInitials(testimonial.name)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-royal-maroon text-sm truncate font-[var(--font-playfair)]">
                              {testimonial.name}
                            </h4>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${eventColors[testimonial.eventType] || 'bg-gray-600 text-white'}`}>
                              {testimonial.eventType}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={testimonial.rating} />
                            <span className="text-xs text-royal-maroon/50">{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 rounded-full bg-royal-gold/90 hover:bg-royal-gold text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 rounded-full bg-royal-gold/90 hover:bg-royal-gold text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-royal-gold w-8'
                  : 'bg-royal-cream/30 hover:bg-royal-cream/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

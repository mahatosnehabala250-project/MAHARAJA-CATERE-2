'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh & Priya Sharma',
    quote:
      'Our wedding feast was the highlight of our celebration. Guests are STILL talking about the Chingri Malaikari and Kosha Mangsho. Maharaja Caterer made our day truly royal.',
    rating: 5,
    eventType: 'Wedding Reception',
    location: 'Purulia',
  },
  {
    name: 'Anita Mukherjee',
    quote:
      "I was so stressed about my daughter's rice ceremony. But Maharaja handled everything — the traditional Bengali menu, the setup, the serving. I actually got to enjoy the event!",
    rating: 5,
    eventType: 'Rice Ceremony',
    location: 'Purulia',
  },
  {
    name: 'Sanjay Agarwal',
    quote:
      "We booked Maharaja for our company's annual dinner. Professional, punctual, and the food was incredible. 200 employees and not a single complaint.",
    rating: 5,
    eventType: 'Corporate Event',
    location: 'Raghunathpur',
  },
  {
    name: 'Meera & Arjun Das',
    quote:
      'From menu planning to the last plate served, everything was perfect. The team was courteous, the food was delicious, and our anniversary party was unforgettable.',
    rating: 5,
    eventType: 'Anniversary Party',
    location: 'Purulia',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-4 ${
            star <= rating ? 'fill-[#D4A017] text-[#D4A017]' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#D4A017] text-xs font-semibold tracking-wider uppercase mb-4 font-[family-name:var(--font-lato)]">
            Success Stories
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-4 leading-tight">
            Stories From Celebrations Like Yours
          </h2>

          {/* Subheading */}
          <p className="text-[#555555] text-base md:text-lg max-w-2xl mx-auto font-[family-name:var(--font-lato)]">
            See how other families celebrated stress-free with Maharaja Caterer
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="block w-12 h-px bg-[#D4A017]/40" />
            <Star className="size-4 fill-[#D4A017] text-[#D4A017]" />
            <span className="block w-12 h-px bg-[#D4A017]/40" />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="relative bg-white border border-[#E8E4DD] rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Decorative gold quote mark */}
                <Quote className="absolute top-4 right-4 size-10 text-[#D4A017]/15 fill-[#D4A017]/10 pointer-events-none" />

                {/* Star Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote text */}
                <p className="text-[#555555] text-sm md:text-base italic leading-relaxed mb-6 flex-1 font-[family-name:var(--font-lato)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-[#E8E4DD] mb-4" />

                {/* Author info */}
                <div>
                  <p className="text-[#800020] font-bold text-sm md:text-base font-[family-name:var(--font-playfair)]">
                    {testimonial.name}
                  </p>
                  <p className="text-[#555555] text-xs md:text-sm font-[family-name:var(--font-lato)] mt-0.5">
                    {testimonial.eventType}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Cake, Sparkles, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Wedding Catering',
    icon: Heart,
    image: '/images/event-wedding.png',
    description:
      'Make your special day extraordinary with our exquisite wedding catering. From traditional Bengali ceremonies to modern celebrations, we create unforgettable dining experiences.',
  },
  {
    title: 'Birthday Parties',
    icon: Cake,
    image: '/images/event-birthday.png',
    description:
      'Celebrate another year of joy with our vibrant birthday catering. Customized themes, special cakes, and menus that delight guests of all ages.',
  },
  {
    title: 'Reception Events',
    icon: Sparkles,
    image: '/images/event-reception.png',
    description:
      'Host grand receptions with our premium catering service. Elegant presentations, diverse cuisines, and impeccable service for your esteemed guests.',
  },
  {
    title: 'Family Functions',
    icon: Users,
    image: '/images/event-family.png',
    description:
      'From annaprasan to grihapravesh, we cater to all your family functions with authentic flavors and heartfelt service that brings families together.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 section-royal overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative background corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-royal-gold/10 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-royal-gold/10 rounded-bl-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with ornament divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Our Royal Services
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group card-royal-hover rounded-xl bg-white/90 border border-royal-gold/15 overflow-hidden hover:border-royal-gold/50"
            >
              {/* Image container */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-royal-gold flex items-center justify-center shadow-lg">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)]">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-[family-name:var(--font-lato)]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-royal-gold font-semibold text-sm font-[family-name:var(--font-lato)] hover:text-royal-maroon transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

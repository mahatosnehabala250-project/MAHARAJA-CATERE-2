'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Cake, Briefcase, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Wedding Catering',
    icon: Heart,
    description:
      'The most important meal of your life deserves the most memorable feast. Our wedding packages serve 100 to 5000+ guests.',
  },
  {
    title: 'Birthday & Anniversary',
    icon: Cake,
    description:
      'Make their special day even more special with customized menus, themed setups, and their favorite dishes.',
  },
  {
    title: 'Corporate Events',
    icon: Briefcase,
    description:
      'Professional catering that impresses clients and teams. From boardroom lunches to company-wide celebrations.',
  },
  {
    title: 'Family Gatherings',
    icon: Home,
    description:
      'Rice ceremonies, baby showers, puja celebrations — we honor every tradition with authentic flavors.',
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group card-royal-hover relative rounded-2xl border border-[#E8E4DD] bg-white p-6 sm:p-8 flex flex-col overflow-hidden"
    >
      {/* Gold top accent line — appears on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#FFD700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

      {/* Icon in gold-tinted circle */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-colors duration-300"
        style={{ backgroundColor: 'rgba(212, 160, 23, 0.1)' }}
      >
        <Icon className="w-6 h-6 text-[#D4A017]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-lato)] mb-6 flex-1">
        {service.description}
      </p>

      {/* Learn More link */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-[#800020] font-semibold text-sm font-[family-name:var(--font-lato)] group/link transition-all duration-300 hover:gap-3"
      >
        <span className="relative">
          Learn More
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#D4A017] transition-all duration-300 group-hover/link:w-full" />
        </span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </a>
    </motion.div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#FAFAF5' }}
      ref={sectionRef}
    >
      {/* Subtle decorative corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-[#D4A017]/10 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-[#D4A017]/10 rounded-bl-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 text-[#D4A017] font-semibold uppercase tracking-widest text-xs font-[family-name:var(--font-lato)] mb-4">
            Our Expertise
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mt-3 mb-5">
            Celebrations We Bring to Life
          </h2>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4A017]/60" />
            <span className="text-[#D4A017] text-lg">&#10022;</span>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4A017]/60" />
          </div>

          {/* Subheading */}
          <p className="text-[#555555] text-base sm:text-lg max-w-2xl mx-auto font-[family-name:var(--font-lato)] leading-relaxed">
            From grand weddings to intimate family gatherings, we make every event unforgettable
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

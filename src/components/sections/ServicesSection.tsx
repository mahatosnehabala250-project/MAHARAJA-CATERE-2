'use client';

import Image from 'next/image';
import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Cake, Sparkles, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Wedding Catering',
    icon: Heart,
    image: '/images/event-wedding.png',
    description:
      'Make your special day extraordinary with our exquisite wedding catering. From traditional Bengali ceremonies to modern celebrations, we create unforgettable dining experiences.',
    price: 'Starting from ₹550/plate',
  },
  {
    title: 'Birthday Parties',
    icon: Cake,
    image: '/images/event-birthday.png',
    description:
      'Celebrate another year of joy with our vibrant birthday catering. Customized themes, special cakes, and menus that delight guests of all ages.',
    price: 'Starting from ₹350/plate',
  },
  {
    title: 'Reception Events',
    icon: Sparkles,
    image: '/images/event-reception.png',
    description:
      'Host grand receptions with our premium catering service. Elegant presentations, diverse cuisines, and impeccable service for your esteemed guests.',
    price: 'Starting from ₹550/plate',
  },
  {
    title: 'Family Functions',
    icon: Users,
    image: '/images/event-family.png',
    description:
      'From annaprasan to grihapravesh, we cater to all your family functions with authentic flavors and heartfelt service that brings families together.',
    price: 'Starting from ₹350/plate',
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

/* Sparkle dots for the overlay */
function SparkleOverlay() {
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${5 + Math.random() * 60}%`,
    delay: Math.random() * 0.6,
    size: 4 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-royal-gold"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 0.8,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 1.5 + Math.random(),
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* Individual service card with parallax */
function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * -2; // -1 to 1, inverted
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
      setMousePos({ x, y });
    },
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      className="group card-royal-hover rounded-xl bg-white/90 border border-royal-gold/15 overflow-hidden hover:border-royal-gold/50"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container */}
      <div className="relative h-52 sm:h-60 overflow-hidden">
        {/* Parallax image */}
        <div
          className="absolute inset-[-10%] transition-transform duration-300 ease-out"
          style={{
            transform: isHovered
              ? `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px) scale(1.08)`
              : 'translate(0, 0) scale(1)',
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent z-[1]" />

        {/* Golden sparkle overlay on hover */}
        {isHovered && <SparkleOverlay />}

        {/* Icon overlay */}
        <div className="absolute bottom-4 left-4 z-[2] w-12 h-12 rounded-full bg-royal-gold flex items-center justify-center shadow-lg">
          <service.icon className="w-5 h-5 text-white" />
        </div>

        {/* Price tag at bottom right */}
        <div className="absolute bottom-4 right-4 z-[2] bg-royal-maroon/90 backdrop-blur-sm text-royal-gold-light text-xs font-bold px-3 py-1.5 rounded-full border border-royal-gold/40 font-[family-name:var(--font-lato)] shadow-md">
          {service.price}
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
          className="inline-flex items-center gap-2 text-royal-gold-dark font-semibold text-sm font-[family-name:var(--font-lato)] group/link transition-all duration-300 hover:text-royal-gold hover:gap-3"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-royal-gold" />
        </a>
      </div>
    </motion.div>
  );
}

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
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROYAL_GOLD = '#D4A017';
const ROYAL_GOLD_DARK = '#B8860B';
const ROYAL_MAROON = '#800020';

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Trust items data                                                   */
/* ------------------------------------------------------------------ */

const trustItems = [
  'No Hidden Charges',
  'Free Menu Consultation',
  '100% Satisfaction Guarantee',
];

/* ------------------------------------------------------------------ */
/*  CTASection — SB7 #5: The Call to Action                            */
/*  "Don't Let Your Event Be Forgettable"                              */
/*  Combines CTA (#5) with failure avoidance (#6) and success (#7)     */
/* ------------------------------------------------------------------ */

export default function CTASection() {
  const handleBookEvent = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.querySelector('#contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  return (
    <section id="cta" className="relative overflow-hidden">
      {/* ===== Maroon Background ===== */}
      <div
        className="relative py-20 sm:py-24 lg:py-28"
        style={{ backgroundColor: ROYAL_MAROON }}
      >
        {/* Subtle mandala pattern overlay — very low opacity */}
        <div className="absolute inset-0 mandala-bg opacity-[0.08]" />

        {/* Top & bottom gold accent lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" />

        {/* Decorative radial glow behind content */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
          }}
        />

        {/* ===== Content ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center"
        >
          {/* "Ready to Celebrate?" badge */}
          <motion.div variants={scaleIn} className="mb-6 sm:mb-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-lato)]"
              style={{
                color: ROYAL_GOLD,
                backgroundColor: 'rgba(212,160,23,0.1)',
                border: '1px solid rgba(212,160,23,0.25)',
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ROYAL_GOLD }}
              />
              Ready to Celebrate?
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ROYAL_GOLD }}
              />
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-white leading-tight mb-5 sm:mb-6"
          >
            Don&apos;t Let Your Event Be{' '}
            <span className="text-gold-gradient">Just Another Gathering</span>
          </motion.h2>

          {/* Body text */}
          <motion.p
            variants={fadeUp}
            className="text-white/75 text-base sm:text-lg lg:text-xl font-[family-name:var(--font-lato)] leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            Your guests deserve a feast they&apos;ll remember. You deserve to
            enjoy your celebration stress-free. With Maharaja Caterer,
            that&apos;s exactly what you get.
          </motion.p>

          {/* Gold ornamental divider — ✦ symbol */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-8 sm:mb-10"
          >
            <span
              className="block h-px w-12 sm:w-16"
              style={{
                background: `linear-gradient(to right, transparent, ${ROYAL_GOLD})`,
              }}
            />
            <span className="text-lg sm:text-xl" style={{ color: ROYAL_GOLD }}>
              &#10022;
            </span>
            <span
              className="block h-px w-12 sm:w-16"
              style={{
                background: `linear-gradient(to left, transparent, ${ROYAL_GOLD})`,
              }}
            />
          </motion.div>

          {/* ===== CTA Buttons ===== */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12"
          >
            {/* Primary CTA: Book Your Event Today */}
            <motion.a
              href="#contact"
              onClick={handleBookEvent}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-[18px] rounded-xl text-base sm:text-lg font-bold tracking-wide shadow-lg transition-all duration-300 w-full sm:w-auto font-[family-name:var(--font-lato)]"
              style={{
                background: `linear-gradient(135deg, ${ROYAL_GOLD} 0%, ${ROYAL_GOLD_DARK} 100%)`,
                color: ROYAL_MAROON,
                boxShadow: '0 8px 30px rgba(212,160,23,0.3)',
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: '0 12px 40px rgba(212,160,23,0.45)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              Book Your Event Today
            </motion.a>

            {/* Secondary CTA: Call Us */}
            <motion.a
              href="tel:+918945005456"
              className="group inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-[18px] rounded-xl text-base sm:text-lg font-bold tracking-wide transition-all duration-300 w-full sm:w-auto font-[family-name:var(--font-lato)]"
              style={{
                color: '#FFFFFF',
                border: '2px solid #FFFFFF',
              }}
              whileHover={{
                scale: 1.04,
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              Call Us: +91 89450 05456
            </motion.a>
          </motion.div>

          {/* ===== Trust Items ===== */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8"
          >
            {trustItems.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 text-white/80 text-sm sm:text-base font-[family-name:var(--font-lato)]"
              >
                <span
                  className="text-base sm:text-lg font-bold"
                  style={{ color: ROYAL_GOLD }}
                >
                  ✓
                </span>
                <span>{item}</span>
                {/* Separator dot between items (not after last) */}
                {i < trustItems.length - 1 && (
                  <span className="hidden sm:inline text-white/30 ml-6 lg:ml-8">
                    •
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

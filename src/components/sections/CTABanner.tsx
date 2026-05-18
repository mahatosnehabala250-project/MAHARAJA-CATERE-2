'use client';

import { Phone, MessageCircle, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Gold Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />

      {/* Main Banner */}
      <div className="relative bg-gradient-to-br from-royal-maroon via-[#5A0015] to-royal-maroon-light py-16 sm:py-20 lg:py-24">
        {/* Mandala Pattern Overlay */}
        <div className="absolute inset-0 mandala-bg opacity-40" />

        {/* Decorative radial glows - more dramatic */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-royal-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-royal-gold/5 rounded-full blur-3xl" />

        {/* Animated floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 bg-royal-gold/40 rounded-full animate-pulse" />
          <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-royal-gold/30 rounded-full animate-pulse [animation-delay:0.5s]" />
          <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-royal-gold/25 rounded-full animate-pulse [animation-delay:1s]" />
          <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-royal-gold/35 rounded-full animate-pulse [animation-delay:1.5s]" />
          <div className="absolute top-[15%] right-[40%] w-1 h-1 bg-royal-gold/30 rounded-full animate-pulse [animation-delay:0.8s]" />
        </div>

        {/* Corner Ornaments */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-16 h-16 sm:w-20 sm:h-20 opacity-30">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 opacity-30 rotate-90">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-16 h-16 sm:w-20 sm:h-20 opacity-30 -rotate-90">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 opacity-30 rotate-180">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 L30 0 L30 4 L4 4 L4 30 L0 30 Z" fill="#D4A017" />
            <path d="M8 0 L20 0 L20 2 L10 2 L10 12 L8 12 Z" fill="#D4A017" opacity="0.6" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Decorative top flourish with crown */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-royal-gold" />
              <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-royal-gold drop-shadow-[0_0_6px_rgba(212,160,23,0.5)]" />
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-royal-gold" />
            </div>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-4 sm:mb-6 leading-tight">
              Ready to Plan Your Royal Event?
            </h2>

            {/* Subtitle */}
            <p className="text-royal-cream/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Let us transform your celebration into an unforgettable royal feast
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
              <motion.a
                href="tel:+918945005456"
                className="animate-pulse-glow group flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-base sm:text-lg shadow-lg shadow-royal-gold/30 hover:shadow-xl hover:shadow-royal-gold/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-wave" />
                Call Now: 89450 05456
              </motion.a>
              <motion.a
                href="https://wa.me/918945005456"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center animate-pulse-glow-green"
                style={{ backgroundColor: '#25D366' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                WhatsApp Us
              </motion.a>
            </div>

            {/* Small text */}
            <p className="mt-6 sm:mt-8 text-royal-cream/60 text-xs sm:text-sm tracking-wide">
              Free consultation &bull; No obligation &bull; Quick response guaranteed
            </p>

            {/* Decorative bottom flourish with star */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-royal-gold" />
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-royal-gold" fill="currentColor">
                <path d="M10 0 L12.2 7.2 L20 7.6 L14 12.4 L15.8 20 L10 16 L4.2 20 L6 12.4 L0 7.6 L7.8 7.2 Z" />
              </svg>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-royal-gold" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gold Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
    </section>
  );
}

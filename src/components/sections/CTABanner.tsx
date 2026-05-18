'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Gold Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />

      {/* Main Banner */}
      <div className="relative bg-gradient-to-br from-royal-maroon dark:from-[#3D0010] via-[#5A0015] dark:via-[#5A0015] to-royal-maroon-light dark:to-[#3D0010] py-16 sm:py-20 lg:py-24">
        {/* Subtle mandala overlay */}
        <div className="absolute inset-0 mandala-bg opacity-20" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-4 sm:mb-6 leading-tight">
              Ready to Plan Your Royal Event?
            </h2>

            {/* Subtitle */}
            <p className="text-royal-cream/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Let us transform your celebration into an unforgettable royal feast
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.a
                href="tel:+918945005456"
                className="group flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-base sm:text-lg shadow-lg shadow-royal-gold/30 hover:shadow-xl hover:shadow-royal-gold/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Call Now: 89450 05456
              </motion.a>
              <motion.a
                href="https://wa.me/918945005456"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
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
          </motion.div>
        </div>
      </div>

      {/* Bottom Gold Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
    </section>
  );
}

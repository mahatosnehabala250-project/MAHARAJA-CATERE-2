'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What types of events do you cater?',
    answer:
      'We specialize in weddings, birthdays, receptions, family functions, social gatherings, and ceremonial events. From intimate dinners to grand celebrations with 1000+ guests, we handle it all.',
  },
  {
    question: 'What cuisines do you offer?',
    answer:
      'We serve Bengali, Indian, Chinese, and Tandoori cuisine. Our menu includes 100+ items from traditional Bengali fish curries to live tandoori counters and elaborate dessert spreads.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 2-4 weeks in advance for regular events and 1-2 months for weddings and large receptions. However, we also accommodate last-minute requests when possible.',
  },
  {
    question: 'Do you provide setup and decoration?',
    answer:
      'Yes! We offer complete event setup including table arrangements, buffet counters, dining setups, and can coordinate with decorators for stage and venue decoration.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Purulia, West Bengal and serve the entire Purulia district and surrounding areas. For special events, we also travel to nearby districts including Bankura, Jhargram, and parts of Jharkhand.',
  },
  {
    question: 'Can you customize the menu for dietary needs?',
    answer:
      'Absolutely! We offer vegetarian, vegan, Jain, and special dietary menus. We can customize spice levels, ingredient preferences, and create special menus for guests with food allergies.',
  },
  {
    question: 'What is included in your catering package?',
    answer:
      'Our packages include food preparation, service staff, buffet setup with chafing dishes, disposable or premium dinnerware, and post-event cleanup. Premium packages include live counters and dedicated servers.',
  },
  {
    question: 'How can I get a price quote?',
    answer:
      'Contact us via WhatsApp at 8945005456 or call us to discuss your event details. We provide customized quotes based on guest count, menu selection, and service requirements. We offer packages for every budget.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 section-royal overflow-hidden dark:bg-[#1a0f00]/50"
      ref={sectionRef}
    >
      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg pointer-events-none" />

      {/* Decorative background corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-royal-gold/10 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-royal-gold/10 rounded-bl-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading with ornament divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-royal-gold font-semibold uppercase tracking-widest text-sm font-[family-name:var(--font-lato)]">
            Everything You Need to Know
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)] mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          {/* Ornament divider */}
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-royal-gold text-lg">&#10022;</span>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/80 dark:bg-[#2D1B00]/80 backdrop-blur-sm border border-royal-gold/15 rounded-lg px-6 border-l-4 border-l-royal-gold/20 data-[state=open]:border-l-royal-gold data-[state=open]:shadow-lg data-[state=open]:shadow-royal-gold/5 transition-all duration-500 ease-out group hover:bg-royal-gold/[0.03] hover:border-l-royal-gold/50"
                >
                  <AccordionTrigger className="text-royal-maroon font-[family-name:var(--font-playfair)] text-base sm:text-lg font-semibold hover:text-royal-gold hover:no-underline transition-all duration-300 py-5 [&[data-state=open]>svg]:text-royal-gold [&[data-state=open]>svg]:drop-shadow-[0_0_6px_rgba(212,160,23,0.4)] [&>svg]:transition-all [&>svg]:duration-300">
                    <span className="flex items-center gap-3 text-left">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold text-sm font-bold font-[family-name:var(--font-lato)] group-data-[state=open]:bg-royal-gold group-data-[state=open]:text-white group-data-[state=open]:shadow-[0_0_10px_rgba(212,160,23,0.4)] transition-all duration-300">
                        {index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed pl-11 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-[family-name:var(--font-lato)] text-sm sm:text-base">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-royal-gold font-semibold hover:text-royal-maroon transition-colors underline underline-offset-4 decoration-royal-gold/40 hover:decoration-royal-maroon/60"
            >
              Get in touch with us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

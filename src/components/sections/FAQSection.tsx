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
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 2-3 weeks in advance for most events. For weddings during peak season (November-February), we suggest 4-6 weeks. However, we also accommodate last-minute requests when possible.',
  },
  {
    question: 'Do you provide vegetarian-only packages?',
    answer:
      'Absolutely! We have extensive vegetarian menus across all cuisines. Our Silver, Gold, and Royal packages all include pure vegetarian options. We also offer Jain and satvik menus for religious ceremonies.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We primarily serve Purulia and surrounding areas within 50km, including Raghunathpur, Adra, Jhalda, and Manbazar. For larger events, we can travel further — just ask!',
  },
  {
    question: 'Can I customize the menu for my event?',
    answer:
      'Of course! Menu customization is what we do best. Choose from 100+ dishes across 5 cuisines, and we\'ll create a spread that perfectly matches your event, guests, and budget.',
  },
  {
    question: "What's included in the serving setup?",
    answer:
      'All packages include professional serving staff, chafing dishes, serving utensils, and basic table setup. Gold and Royal packages include decorative setup, themed presentation, and a dedicated service team.',
  },
  {
    question: 'How do you ensure food quality and hygiene?',
    answer:
      'We are FSSAI licensed and follow strict hygiene protocols. All ingredients are sourced fresh daily, our kitchen is regularly inspected, and our staff is trained in food safety. We also offer live counters for transparency.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer:
      'We understand plans change. Cancellations made 7+ days before the event receive a full refund minus booking fee. Rescheduling is free if done 5+ days in advance. We\'re flexible and always work with you.',
  },
  {
    question: 'Do you handle setup and cleanup?',
    answer:
      'Yes! We handle everything — from setup to serving to cleanup. You don\'t lift a finger. Our team arrives early to set up, serves throughout the event, and cleans up after. You just enjoy your celebration.',
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
      className="relative py-20 md:py-28 bg-[#FFFFFF] overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-12 w-28 h-28 border-t-2 border-r-2 border-[#D4A017]/10 rounded-tr-3xl" />
        <div className="absolute bottom-12 left-12 w-28 h-28 border-b-2 border-l-2 border-[#D4A017]/10 rounded-bl-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4A017]/10 text-[#D4A017] font-semibold uppercase tracking-widest text-xs font-[family-name:var(--font-lato)] mb-4">
            Common Questions
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mt-3 mb-4">
            Your Questions, Answered
          </h2>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-12 h-px bg-[#D4A017]/40" />
            <span className="text-[#D4A017] text-lg">&#10022;</span>
            <span className="block w-12 h-px bg-[#D4A017]/40" />
          </div>

          {/* Subheading */}
          <p className="text-[#555555] font-[family-name:var(--font-lato)] text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know before booking Maharaja Caterer
          </p>
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
                  className="bg-white border border-[#D4A017]/10 rounded-lg px-5 sm:px-6 border-l-4 border-l-[#D4A017]/15 data-[state=open]:border-l-[#D4A017] data-[state=open]:shadow-md data-[state=open]:shadow-[#D4A017]/5 transition-all duration-500 ease-out group hover:bg-[#800020]/[0.01] hover:border-l-[#D4A017]/50"
                >
                  <AccordionTrigger className="text-[#800020] font-[family-name:var(--font-playfair)] text-base sm:text-lg font-semibold hover:text-[#800020] hover:no-underline transition-all duration-300 py-5 [&[data-state=open]>svg]:text-[#D4A017] [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-all [&>svg]:duration-300">
                    <span className="flex items-center gap-3 text-left">
                      {/* Number badge in gold circle */}
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] text-sm font-bold font-[family-name:var(--font-lato)] group-data-[state=open]:bg-[#D4A017] group-data-[state=open]:text-white group-data-[state=open]:shadow-[0_0_10px_rgba(212,160,23,0.3)] transition-all duration-300">
                        {index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed pl-11 pb-5">
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
          <p className="text-[#555555] font-[family-name:var(--font-lato)] text-sm sm:text-base">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-[#D4A017] font-semibold hover:text-[#800020] transition-colors underline underline-offset-4 decoration-[#D4A017]/40 hover:decoration-[#800020]/60"
            >
              Get in touch with us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

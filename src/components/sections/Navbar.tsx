'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import DarkModeToggle from '@/components/ui-custom/DarkModeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Smooth scroll handler
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth',
        });
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Mobile menu animation variants
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 40 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-b from-royal-cream/98 via-royal-cream/95 to-royal-cream/90 backdrop-blur-md shadow-lg shadow-royal-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo & Business Name */}
            <Link
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-royal-gold shadow-md group-hover:shadow-royal-gold/40 transition-shadow duration-300 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer Logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${
                    isScrolled ? 'text-royal-maroon' : 'text-royal-cream'
                  }`}
                >
                  Maharaja Caterer
                </span>
                <span
                  className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-royal-gold-dark' : 'text-royal-gold-light'
                  }`}
                >
                  Premium Catering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-md group ${
                      isActive
                        ? 'text-royal-gold'
                        : isScrolled
                        ? 'text-royal-maroon/80 hover:text-royal-maroon'
                        : 'text-royal-cream/80 hover:text-royal-gold'
                    }`}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-royal-gold rounded-full transition-all duration-300 ${
                        isActive ? 'w-6' : 'w-0 group-hover:w-4'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop Action Icons */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:+918945005456"
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 text-sm ${
                  isScrolled
                    ? 'border-royal-gold/30 text-royal-maroon hover:bg-royal-gold/10 hover:border-royal-gold/60'
                    : 'border-royal-cream/30 text-royal-cream hover:bg-royal-cream/10 hover:border-royal-gold/60'
                }`}
                aria-label="Call Maharaja Caterer"
              >
                <Phone className="w-4 h-4 text-royal-gold" />
                <span className="font-medium">Call Us</span>
              </a>
              <a
                href="https://wa.me/918945005456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-royal-maroon/90 text-royal-gold hover:bg-royal-maroon transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-royal-maroon/20 text-sm backdrop-blur-sm"
                aria-label="WhatsApp Maharaja Caterer"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">WhatsApp</span>
              </a>
              <DarkModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <DarkModeToggle />
              <a
                href="https://wa.me/918945005456"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-royal-maroon text-royal-gold hover:bg-royal-maroon-light transition-colors duration-300"
                aria-label="WhatsApp Maharaja Caterer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+918945005456"
                className="p-2 rounded-full border border-royal-gold/40 text-royal-maroon hover:bg-royal-gold/10 transition-colors duration-300"
                aria-label="Call Maharaja Caterer"
              >
                <Phone className="w-5 h-5 text-royal-gold" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? 'text-royal-maroon hover:bg-royal-gold/10'
                    : 'text-royal-cream hover:bg-royal-cream/10'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Subtle gold line at bottom when scrolled */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent transition-opacity duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-royal-cream shadow-2xl shadow-royal-maroon/10 lg:hidden"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-royal-gold/20">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-royal-gold">
                      <Image
                        src="/images/logo.jpg"
                        alt="Maharaja Caterer Logo"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-royal-maroon">
                        Maharaja Caterer
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-royal-maroon hover:bg-royal-gold/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Navigation Links */}
                <div className="flex-1 py-4 px-4 overflow-y-auto">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link, i) => {
                      const sectionId = link.href.replace('#', '');
                      const isActive = activeSection === sectionId;
                      return (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.href)}
                          custom={i}
                          variants={menuItemVariants}
                          initial="closed"
                          animate="open"
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-royal-maroon text-royal-gold shadow-sm'
                              : 'text-royal-maroon/80 hover:bg-royal-gold/10 hover:text-royal-maroon'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isActive ? 'bg-royal-gold' : 'bg-royal-gold/40'
                            }`}
                          />
                          {link.label}
                        </motion.a>
                      );
                    })}
                  </nav>
                </div>

                {/* Drawer Footer - Contact Actions */}
                <div className="p-4 border-t border-royal-gold/20 space-y-3">
                  <a
                    href="tel:+918945005456"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-royal-gold/30 text-royal-maroon hover:bg-royal-gold/10 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 text-royal-gold" />
                    <div>
                      <span className="text-sm font-medium block">Call Us</span>
                      <span className="text-xs text-royal-maroon/60">
                        +91 89450 05456
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/918945005456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-royal-maroon text-royal-gold hover:bg-royal-maroon-light transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <div>
                      <span className="text-sm font-medium block">
                        WhatsApp
                      </span>
                      <span className="text-xs text-royal-gold/70">
                        Quick Response
                      </span>
                    </div>
                  </a>
                  <div className="flex items-center justify-center pt-2">
                    <DarkModeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

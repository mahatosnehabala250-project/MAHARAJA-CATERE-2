'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll detection for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
        const navHeight = 64;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
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

  // Mobile drawer animation variants
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
    closed: { opacity: 0, x: 30 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.04 * i,
        duration: 0.25,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Brand Name */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-2.5 flex-shrink-0"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-gray-200">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer"
                  fill
                  className="object-cover"
                  sizes="36px"
                  priority
                />
              </div>
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wide text-[#800020]">
                Maharaja Caterer
              </span>
            </a>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-3.5 py-2 text-[0.82rem] font-[family-name:var(--font-lato)] font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-[#800020]'
                        : 'text-gray-700 hover:text-[#800020]'
                    }`}
                  >
                    {link.label}
                    {/* Gold underline for active link */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#D4A017] transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Right: CTA Button + Phone Icon */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918945005456"
                className="p-2 rounded-lg text-gray-600 hover:text-[#800020] transition-colors duration-200"
                aria-label="Call Maharaja Caterer"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center px-5 py-2.5 text-sm font-[family-name:var(--font-lato)] font-semibold text-white bg-[#800020] rounded-lg hover:bg-[#6b001a] transition-colors duration-200 shadow-sm shadow-[#800020]/10"
              >
                Book Event
              </a>
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#1A1A1A] hover:bg-gray-100 transition-colors duration-200"
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
      </nav>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out drawer from right */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-white shadow-xl lg:hidden"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header: Close button */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-gray-200">
                      <Image
                        src="/images/logo.jpg"
                        alt="Maharaja Caterer"
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#800020]">
                      Maharaja Caterer
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-100 transition-colors duration-200"
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
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-[family-name:var(--font-lato)] font-medium transition-colors duration-200 ${
                            isActive
                              ? 'text-[#800020] bg-[#800020]/5'
                              : 'text-gray-700 hover:text-[#800020] hover:bg-gray-50'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isActive ? 'bg-[#D4A017]' : 'bg-gray-300'
                            }`}
                          />
                          {link.label}
                        </motion.a>
                      );
                    })}
                  </nav>
                </div>

                {/* Drawer Footer: CTA + Contact Info */}
                <div className="p-5 border-t border-gray-100 space-y-3">
                  {/* Book Your Event CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-[family-name:var(--font-lato)] font-semibold text-white bg-[#800020] rounded-lg hover:bg-[#6b001a] transition-colors duration-200"
                  >
                    Book Your Event
                  </a>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:+918945005456"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:text-[#800020] hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                      <span className="text-sm font-[family-name:var(--font-lato)]">
                        +91 89450 05456
                      </span>
                    </a>
                    <a
                      href="https://wa.me/918945005456"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:text-[#800020] hover:bg-gray-50 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4 text-[#D4A017] flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-sm font-[family-name:var(--font-lato)]">
                        WhatsApp
                      </span>
                    </a>
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

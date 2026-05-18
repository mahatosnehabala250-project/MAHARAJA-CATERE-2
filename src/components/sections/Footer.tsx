'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Crown } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F3EE] mt-auto">
      {/* ── Top Section: 3 columns ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* ── Column 1: Brand ── */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#D4A017]/60 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer Logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="text-xl font-semibold text-[#D4A017] font-[family-name:var(--font-playfair)]">
                Maharaja Caterer
              </span>
            </div>

            <p className="text-[#F5F3EE] text-sm font-[family-name:var(--font-lato)] mb-2">
              Where Every Feast Becomes a Royal Celebration
            </p>

            <p className="text-[#D4A017]/80 text-sm font-[family-name:var(--font-lato)] mb-5">
              সকলের মনপরাজিত হবে!
            </p>

            <p className="text-[#AAAAAA] text-sm leading-relaxed font-[family-name:var(--font-lato)] max-w-sm">
              Purulia&apos;s most trusted catering service since 2009. We bring
              royal feasts to your celebrations.
            </p>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h4 className="text-[#D4A017] font-semibold text-lg mb-5 font-[family-name:var(--font-playfair)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F5F3EE]/80 hover:text-[#D4A017] transition-colors duration-300 font-[family-name:var(--font-lato)] inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4A017]/50 group-hover:bg-[#D4A017] group-hover:w-1.5 group-hover:h-1.5 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ── */}
          <div>
            <h4 className="text-[#D4A017] font-semibold text-lg mb-5 font-[family-name:var(--font-playfair)]">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+918945005456"
                className="flex items-center gap-3 text-sm text-[#F5F3EE]/80 hover:text-[#D4A017] transition-colors duration-300 font-[family-name:var(--font-lato)]"
              >
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                +91 89450 05456
              </a>

              <a
                href="mailto:maharajacatererpurulia@gmail.com"
                className="flex items-center gap-3 text-sm text-[#F5F3EE]/80 hover:text-[#D4A017] transition-colors duration-300 font-[family-name:var(--font-lato)] break-all"
              >
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                maharajacatererpurulia@gmail.com
              </a>

              <div className="flex items-start gap-3 text-sm text-[#F5F3EE]/80 font-[family-name:var(--font-lato)]">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                Purulia, West Bengal, India
              </div>

              <div className="flex items-center gap-3 text-sm text-[#F5F3EE]/80 font-[family-name:var(--font-lato)]">
                <Clock className="w-4 h-4 text-[#D4A017] shrink-0" />
                Available 7 days, 8 AM – 10 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Section ── */}
      {/* Gold gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4A017]/60 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#AAAAAA] font-[family-name:var(--font-lato)]">
            &copy; 2024 Maharaja Caterer. All rights reserved.
          </p>

          {/* Center gold crown separator */}
          <Crown className="w-4 h-4 text-[#D4A017]/60 hidden sm:block" aria-hidden="true" />

          <p className="text-xs text-[#AAAAAA] font-[family-name:var(--font-lato)]">
            Made with ❤️ in Purulia
          </p>
        </div>
      </div>
    </footer>
  )
}

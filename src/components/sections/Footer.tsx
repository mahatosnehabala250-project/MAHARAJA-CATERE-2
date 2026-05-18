'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  MessageCircle,
  ExternalLink,
  Send,
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Wedding',
  'Birthday',
  'Reception',
  'Family Functions',
  'Corporate Events',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-[#1a0f00] text-royal-cream/80 mt-auto relative">
      {/* Gold gradient top border */}
      <div className="h-[3px] bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-light" />

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-royal-maroon via-[#5A0015] to-royal-maroon-light py-10 md:py-14 overflow-hidden">
        {/* Mandala pattern */}
        <div className="absolute inset-0 mandala-bg opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)] mb-2">
            Stay Updated
          </h3>
          <p className="text-royal-cream/70 text-sm sm:text-base font-[family-name:var(--font-lato)] mb-6">
            Get festive offers &amp; menu updates delivered to your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-4 py-3 rounded-full bg-royal-cream/10 border border-royal-gold/30 text-royal-cream placeholder:text-royal-cream/40 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold/60 transition-all duration-300 text-sm font-[family-name:var(--font-lato)]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B8860B] via-royal-gold to-[#FFD700] text-royal-maroon font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-105 font-[family-name:var(--font-lato)]"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-royal-gold text-sm font-medium font-[family-name:var(--font-lato)] animate-fade-in">
              ✨ Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
      {/* Decorative mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-20 pointer-events-none" style={{ top: '3px' }} />
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo + About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-royal-gold/40 shadow-md">
                <Image
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer Logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold-gradient font-[var(--font-playfair)]">
                  Maharaja Caterer
                </h3>
                <p className="text-royal-cream/50 text-xs">Purulia, West Bengal</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-royal-cream/60 font-[var(--font-lato)]">
              Purulia&apos;s finest catering and event planning service. We bring
              royal flavors and impeccable service to make every celebration
              unforgettable.
            </p>
            <div className="flex items-center gap-2 bg-royal-cream/5 rounded-lg px-3 py-2 border border-royal-gold/10 w-fit">
              <span className="text-royal-gold text-xs font-semibold">FSSAI</span>
              <span className="text-royal-cream/40 text-xs">Licensed</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-royal-gold font-semibold mb-4 font-[var(--font-playfair)] text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-royal-cream/60 hover:text-royal-gold transition-colors duration-300 flex items-center gap-2 group font-[var(--font-lato)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/40 group-hover:bg-royal-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-royal-gold font-semibold mb-4 font-[var(--font-playfair)] text-lg">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-royal-cream/60 hover:text-royal-gold transition-colors duration-300 flex items-center gap-2 group font-[var(--font-lato)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/40 group-hover:bg-royal-gold transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-royal-gold font-semibold mb-4 font-[var(--font-playfair)] text-lg">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-royal-gold shrink-0 mt-0.5" />
                <p className="text-sm text-royal-cream/60 font-[var(--font-lato)]">
                  Near Fan House, Nadiha, Chowk Bazar, Purulia, West Bengal 723101
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-royal-gold shrink-0" />
                <a
                  href="tel:+918945005456"
                  className="text-sm text-royal-cream/60 hover:text-royal-gold transition-colors font-[var(--font-lato)]"
                >
                  089450 05456 / 8293829200
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="size-4 text-green-500 shrink-0" />
                <a
                  href="https://wa.me/918945005456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-royal-cream/60 hover:text-royal-gold transition-colors font-[var(--font-lato)] flex items-center gap-1"
                >
                  8945005456
                  <ExternalLink className="size-3" />
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-royal-gold shrink-0" />
                <a
                  href="mailto:maharajaCaterer104@gmail.com"
                  className="text-sm text-royal-cream/60 hover:text-royal-gold transition-colors break-all font-[var(--font-lato)]"
                >
                  maharajaCaterer104@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 text-royal-gold shrink-0" />
                <p className="text-sm text-royal-cream/60 font-[var(--font-lato)]">
                  9:00 AM - 10:00 PM Daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-royal-cream/40 text-center md:text-left font-[var(--font-lato)]">
            © 2025 Maharaja Caterer Purulia. All Rights Reserved.
          </p>
          <p className="text-sm text-royal-cream/40 text-center font-[var(--font-lato)]">
            Prop. Ujjal Chakraborty (Dolon)
          </p>
          <p className="text-xs text-royal-cream/50 text-center font-[var(--font-lato)] animate-gentle-bounce">
            Made with ❤️ in Purulia
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100064833288803"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-royal-cream/5 border border-royal-gold/20 flex items-center justify-center text-royal-cream/50 hover:scale-110 hover:text-royal-gold hover:border-royal-gold/50 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://wa.me/918945005456"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-royal-cream/5 border border-royal-gold/20 flex items-center justify-center text-royal-cream/50 hover:scale-110 hover:text-green-500 hover:border-green-500/50 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href="tel:+918945005456"
              className="w-9 h-9 rounded-full bg-royal-cream/5 border border-royal-gold/20 flex items-center justify-center text-royal-cream/50 hover:scale-110 hover:text-royal-gold hover:border-royal-gold/50 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="mailto:maharajaCaterer104@gmail.com"
              className="w-9 h-9 rounded-full bg-royal-cream/5 border border-royal-gold/20 flex items-center justify-center text-royal-cream/50 hover:scale-110 hover:text-royal-gold hover:border-royal-gold/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

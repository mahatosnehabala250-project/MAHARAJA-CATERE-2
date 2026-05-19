'use client'

import { CalendarCheck, ShieldCheck, Clock, Star, Users, Leaf } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Trust Items — Social Proof Marquee Strip                           */
/* ------------------------------------------------------------------ */

const trustItems = [
  {
    icon: CalendarCheck,
    text: '5000+ Events Served',
  },
  {
    icon: ShieldCheck,
    text: 'FSSAI Certified',
  },
  {
    icon: Clock,
    text: '15+ Years',
  },
  {
    icon: Star,
    text: '4.8\u2605 Google Rating',
  },
  {
    icon: Users,
    text: 'Trusted by 2000+ Families',
  },
  {
    icon: Leaf,
    text: '100% Vegetarian Options',
  },
]

/* Duplicate items for seamless infinite scroll */
const marqueeItems = [...trustItems, ...trustItems]

/* ------------------------------------------------------------------ */
/*  TrustSection — Horizontal Marquee Social Proof Strip               */
/*  Appears just after the Hero section                                */
/* ------------------------------------------------------------------ */

export default function TrustSection() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ borderTop: '2px solid #D4A017' }}
    >
      {/* Marquee container */}
      <div className="py-4 sm:py-5 md:py-6">
        <div className="animate-marquee flex whitespace-nowrap">
          {marqueeItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={`trust-${index}`}
                className="inline-flex items-center gap-2.5 mx-6 sm:mx-8 md:mx-10 shrink-0"
              >
                {/* Icon */}
                <IconComponent
                  className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                  style={{ color: '#D4A017' }}
                  strokeWidth={2}
                />

                {/* Text */}
                <span
                  className="text-sm sm:text-base md:text-lg font-medium font-[family-name:var(--font-lato)] whitespace-nowrap"
                  style={{ color: '#444444' }}
                >
                  {item.text}
                </span>

                {/* Separator dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 ml-6 sm:ml-8 md:ml-10"
                  style={{ backgroundColor: '#D4A017' }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

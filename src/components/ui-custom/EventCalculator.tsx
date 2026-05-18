'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { Calculator } from 'lucide-react'

interface PackageOption {
  id: string
  name: string
  pricePerPlate: number
}

const packages: PackageOption[] = [
  { id: 'silver', name: 'Silver', pricePerPlate: 350 },
  { id: 'gold', name: 'Gold', pricePerPlate: 550 },
  { id: 'royal', name: 'Royal', pricePerPlate: 850 },
]

function formatIndianCurrency(value: number): string {
  const str = value.toString()
  let lastThree = str.substring(str.length - 3)
  const otherNumbers = str.substring(0, str.length - 3)
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree
  }
  return '₹' + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 })
  const display = useTransform(spring, (latest) => formatIndianCurrency(Math.round(latest)))
  const [displayValue, setDisplayValue] = useState(formatIndianCurrency(value))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => {
      setDisplayValue(v)
    })
    return unsubscribe
  }, [display])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
    </span>
  )
}

export default function EventCalculator() {
  const [guests, setGuests] = useState(100)
  const [selectedPackage, setSelectedPackage] = useState('gold')

  const currentPackage = packages.find((p) => p.id === selectedPackage) ?? packages[1]
  const totalCost = guests * currentPackage.pricePerPlate

  return (
    <section className="relative py-16 md:py-20 section-royal overflow-hidden">
      {/* Mandala pattern background */}
      <div className="absolute inset-0 mandala-bg opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="bg-royal-cream border-2 border-royal-gold/30 rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-royal-gold/20 bg-gradient-to-r from-royal-maroon/5 via-transparent to-royal-maroon/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-royal-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-royal-maroon font-[family-name:var(--font-playfair)]">
                  Quick Event Calculator
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Number of guests */}
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-semibold text-royal-maroon font-[family-name:var(--font-lato)] mb-2"
                >
                  Number of Guests
                </label>
                <input
                  id="guests"
                  type="number"
                  min={50}
                  max={2000}
                  value={guests}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    if (!isNaN(val)) {
                      setGuests(Math.min(2000, Math.max(50, val)))
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-royal-gold/30 bg-white text-royal-maroon font-semibold text-lg font-[family-name:var(--font-lato)] focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-200"
                />
                <p className="mt-1 text-xs text-muted-foreground font-[family-name:var(--font-lato)]">
                  Min 50, Max 2000 guests
                </p>
              </div>

              {/* Package type */}
              <div>
                <span className="block text-sm font-semibold text-royal-maroon font-[family-name:var(--font-lato)] mb-3">
                  Select Package
                </span>
                <div className="space-y-2">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 font-[family-name:var(--font-lato)] ${
                        selectedPackage === pkg.id
                          ? 'border-royal-gold bg-royal-gold/10 shadow-sm'
                          : 'border-royal-gold/15 bg-white hover:border-royal-gold/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={() => setSelectedPackage(pkg.id)}
                        className="w-4 h-4 accent-[#D4A017]"
                      />
                      <span className="flex-1 text-sm font-medium text-royal-maroon">{pkg.name}</span>
                      <span className="text-sm font-bold text-royal-gold">
                        ₹{pkg.pricePerPlate}/plate
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Estimated total */}
              <div className="rounded-xl p-5 text-center border border-royal-gold/20" style={{ background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.08), rgba(212, 160, 23, 0.12), rgba(255, 215, 0, 0.08))' }}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-[family-name:var(--font-lato)] mb-1">
                  Estimated Total
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-royal-maroon font-[family-name:var(--font-playfair)]">
                  <AnimatedNumber value={totalCost} />
                </p>
                <p className="text-xs text-muted-foreground font-[family-name:var(--font-lato)] mt-1">
                  {guests} guests × ₹{currentPackage.pricePerPlate}/plate
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/30 hover:scale-[1.02] font-[family-name:var(--font-lato)]"
                style={{ background: 'linear-gradient(135deg, #B8860B, #D4A017, #FFD700)' }}
              >
                Get Exact Quote
              </a>

              {/* Disclaimer */}
              <p className="text-xs text-center text-muted-foreground/70 font-[family-name:var(--font-lato)] leading-relaxed">
                Actual pricing may vary based on menu customization and event requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

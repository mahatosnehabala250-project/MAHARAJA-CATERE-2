'use client'

interface SectionDividerProps {
  variant?: 'gold-wave' | 'maroon-peak' | 'double-line'
  className?: string
}

export default function SectionDivider({ variant = 'gold-wave', className = '' }: SectionDividerProps) {
  if (variant === 'gold-wave') {
    return (
      <div className={`w-full h-10 flex items-center overflow-hidden ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 20 C150 40, 300 0, 450 20 C600 40, 750 0, 900 20 C1050 40, 1200 0, 1200 20"
            stroke="#D4A017"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M0 22 C150 38, 300 2, 450 22 C600 38, 750 2, 900 22 C1050 38, 1200 2, 1200 22"
            stroke="#D4A017"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
          {/* Decorative dots at wave peaks */}
          <circle cx="450" cy="20" r="3" fill="#D4A017" opacity="0.6" />
          <circle cx="900" cy="20" r="3" fill="#D4A017" opacity="0.6" />
          <circle cx="0" cy="20" r="2" fill="#D4A017" opacity="0.4" />
          <circle cx="1200" cy="20" r="2" fill="#D4A017" opacity="0.4" />
        </svg>
      </div>
    )
  }

  if (variant === 'maroon-peak') {
    return (
      <div className={`w-full h-10 flex items-center overflow-hidden ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 35 L200 35 L400 5 L600 35 L800 5 L1000 35 L1200 35"
            stroke="#800020"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M0 37 L200 37 L400 7 L600 37 L800 7 L1000 37 L1200 37"
            stroke="#800020"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
          {/* Diamond at each peak */}
          <path d="M400 0 L404 5 L400 10 L396 5 Z" fill="#800020" opacity="0.7" />
          <path d="M800 0 L804 5 L800 10 L796 5 Z" fill="#800020" opacity="0.7" />
        </svg>
      </div>
    )
  }

  // double-line variant
  return (
    <div className={`w-full h-10 flex items-center overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Top line */}
        <line x1="0" y1="14" x2="560" y2="14" stroke="#D4A017" strokeWidth="1" opacity="0.5" />
        <line x1="640" y1="14" x2="1200" y2="14" stroke="#D4A017" strokeWidth="1" opacity="0.5" />
        {/* Bottom line */}
        <line x1="0" y1="26" x2="560" y2="26" stroke="#800020" strokeWidth="1" opacity="0.5" />
        <line x1="640" y1="26" x2="1200" y2="26" stroke="#800020" strokeWidth="1" opacity="0.5" />
        {/* Center diamond */}
        <path d="M600 8 L608 20 L600 32 L592 20 Z" fill="#D4A017" opacity="0.7" />
        <path d="M600 12 L605 20 L600 28 L595 20 Z" fill="#800020" opacity="0.5" />
        {/* Small accent dots */}
        <circle cx="570" cy="20" r="2" fill="#D4A017" opacity="0.4" />
        <circle cx="630" cy="20" r="2" fill="#D4A017" opacity="0.4" />
      </svg>
    </div>
  )
}

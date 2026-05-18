'use client'

const socialProofItems = [
  '5000+ Events Served',
  '4.8★ Google Rating',
  '15+ Years of Excellence',
  '100+ Menu Items',
  "Purulia's #1 Caterer",
  'FSSAI Licensed',
  'Bengali & Indian Cuisine',
  'Trusted by 1000+ Families',
]

export default function SocialProofBanner() {
  return (
    <div className="relative h-12 bg-royal-maroon overflow-hidden flex items-center">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of items */}
        {socialProofItems.map((item, index) => (
          <span
            key={`first-${index}`}
            className="text-royal-gold-light font-medium tracking-wide text-sm md:text-base mx-6 flex items-center gap-3"
          >
            <span className="text-royal-gold">✦</span>
            {item}
          </span>
        ))}
        {/* Second set for seamless loop */}
        {socialProofItems.map((item, index) => (
          <span
            key={`second-${index}`}
            className="text-royal-gold-light font-medium tracking-wide text-sm md:text-base mx-6 flex items-center gap-3"
          >
            <span className="text-royal-gold">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

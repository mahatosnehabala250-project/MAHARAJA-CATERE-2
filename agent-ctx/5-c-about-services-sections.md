# Task 5-c: AboutSection & ServicesSection Components

## Work Summary

Built two premium section components for the Maharaja Caterer website:

### 1. AboutSection (`/src/components/sections/AboutSection.tsx`)
- `'use client'` component with `id="about"`
- Two-column layout (image left, text right) on desktop, stacked on mobile
- Left column: Image from `/images/about-bg.png` with gold border frame and decorative SVG corner ornaments (4 corners)
- Right column: 
  - Section label "About Us" in gold with horizontal rule accents
  - Heading "A Legacy of Royal Flavors" in maroon with Playfair Display font
  - Two description paragraphs about the caterer
  - 4 key highlights with lucide-react icons (Leaf, ChefHat, Clock, Settings) in a 2x2 grid
  - Proprietor info with User icon: "Prop. Ujjal Chakraborty (Dolon)"
  - FSSAI License with ShieldCheck icon: "Lic. No. 12817016000590"
- Framer-motion scroll-triggered animations using `useInView`
- Mandala pattern background overlay via `mandala-bg` class
- Decorative corner borders in the section background

### 2. ServicesSection (`/src/components/sections/ServicesSection.tsx`)
- `'use client'` component with `id="services"`
- Section heading "Our Royal Services" with ornament divider (diamond symbol)
- 2x2 grid of service cards (1 column on mobile):
  1. Wedding Catering - Heart icon - `/images/event-wedding.png`
  2. Birthday Parties - Cake icon - `/images/event-birthday.png`
  3. Reception Events - Sparkles icon - `/images/event-reception.png`
  4. Family Functions - Users icon - `/images/event-family.png`
- Each card: image with gradient overlay, icon overlay in gold circle, title, description, "Learn More" link with arrow
- Cards have gold border on hover, lift effect via `card-royal-hover` class
- Image zoom on hover
- Framer-motion staggered card entrance animations using `containerVariants` and `cardVariants`
- Background: `section-royal` class with decorative corner accents

### Updated Files
- Created: `/src/components/sections/AboutSection.tsx`
- Created: `/src/components/sections/ServicesSection.tsx`
- Updated: `/src/app/page.tsx` (integrated both sections for preview)

### Color References Used
- Royal Gold: #D4A017
- Royal Maroon: #800020
- Royal Cream: #FFF8E7

### Verification
- `bun run lint` passed with no errors
- Dev server compiles successfully (confirmed via dev.log)

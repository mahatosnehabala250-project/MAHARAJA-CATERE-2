---
Task ID: R6-1
Agent: Bug Fix Agent
Task: Fix hydration mismatch, cookie consent overlap, hero readability

Work Log:
- Created new file `src/components/ui-custom/FloatingParticles.tsx` as a standalone 'use client' component with all particle logic (30 particles with Math.random())
- Removed FloatingParticles function definition from `src/components/sections/HeroSection.tsx`
- Added dynamic import with `ssr: false`: `const FloatingParticles = dynamic(() => import('@/components/ui-custom/FloatingParticles'), { ssr: false })` — completely eliminates SSR rendering of FloatingParticles, fixing hydration mismatch
- Removed unused imports: `useMemo`, `useState` from HeroSection.tsx
- Fixed CookieConsent mobile overlap: changed positioning from `bottom-24` to `bottom-28 left-4 right-4` on mobile (more space above WhatsApp/ScrollToTop), kept `sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-sm` on desktop
- Enlarged CookieConsent buttons: added `min-w-[80px] min-h-[44px]` and changed padding from `px-4 py-2` to `px-5 py-2.5` for both Accept and Decline buttons
- Enhanced Bengali tagline: increased size from `text-lg sm:text-xl` to `text-xl sm:text-2xl`, added stronger text shadow `0 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(212,160,23,0.3)`
- Enhanced main tagline: increased opacity from 0.9 to 1, added text shadow for readability
- CTA button hierarchy: "Book Your Event" now `px-10 py-5 text-lg sm:text-xl`, "Explore Menu" now `px-8 py-4 text-base sm:text-lg`
- Added gold divider line between heading and tagline (gradient lines with diamond center)

Stage Summary:
- Hydration mismatch completely eliminated via dynamic import with ssr: false
- CookieConsent no longer overlaps WhatsApp float or ScrollToTop on mobile
- Hero section has improved readability with larger taglines, stronger text shadows, clear CTA hierarchy, and decorative gold divider
- All lint checks pass, dev server compiling successfully

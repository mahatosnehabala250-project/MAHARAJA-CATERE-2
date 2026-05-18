# Task ID: R5-1
**Agent:** Bug Fix Agent
**Task:** Fix 6 QA bugs — cookie consent overlap, heading contrast, touch targets, footer contrast, close button, service cards

## Work Log

### Bug Fix 1: Cookie consent overlaps with WhatsApp float and ScrollToTop on mobile
- **File**: `src/components/ui-custom/CookieConsent.tsx`
- Changed mobile positioning from `bottom-4` to `bottom-24` to avoid overlap with WhatsApp float button and ScrollToTop
- Kept desktop positioning: `sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-sm`
- Enlarged close button from `w-6 h-6` to `w-8 h-8` with icon from `w-3.5 h-3.5` to `w-4 h-4` for better mobile touch targets
- Enlarged action buttons from `px-3 py-1.5` to `px-4 py-2` for easier tapping

### Bug Fix 2: About section heading has poor contrast against cream background
- **File**: `src/components/sections/AboutSection.tsx`
- Added `drop-shadow-md` to the h2 heading for better visual separation
- Added a decorative gold gradient accent line under the heading (gold bar fading to transparent + smaller secondary dot)

### Bug Fix 3: Mobile touch targets too small in navbar
- **File**: `src/components/sections/Navbar.tsx`
- Changed WhatsApp button padding from `p-2` to `p-2.5` (increasing touch target from ~36px to ~40px)
- Changed Phone button padding from `p-2` to `p-2.5`
- This ensures 40px minimum touch target per accessibility guidelines

### Bug Fix 4: Footer "Made with ❤️ in Purulia" text has very low contrast
- **File**: `src/components/sections/Footer.tsx`
- Changed from `text-royal-cream/30` to `text-royal-cream/50` for better readability against dark footer background

### Bug Fix 5: Mobile menu close button too small
- **File**: `src/components/sections/Navbar.tsx`
- Changed drawer close button padding from `p-1.5` to `p-2` for better touch target

### Bug Fix 6: Services section cards look inconsistent on mobile
- **File**: `src/components/sections/ServicesSection.tsx`
- Added `min-h-[400px] sm:min-h-[440px] flex flex-col` to service card motion.div for consistent minimum height
- Added `flex-1 flex flex-col` to card content area
- Added `mt-auto` to "Learn More" link so it pushes to the bottom of each card for uniform alignment

## Verification
- `bun run lint` passes with zero errors
- All 6 bugs fixed across 5 files
- No new files created

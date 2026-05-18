# Task R4-3: Bug Fix Agent

## Summary
Fixed 4 bugs across HeroSection, CookieConsent, and ScrollToTop components.

## Changes Made

### Bug Fix 1: Hydration mismatch in FloatingParticles
- **File**: `src/components/sections/HeroSection.tsx`
- **Issue**: `useMemo` with `Math.random()` was called during SSR, causing hydration mismatch
- **Fix**: Changed `useMemo` to depend on `mounted` state. When `mounted` is false (SSR), returns empty array. When `mounted` becomes true (client after useEffect), generates random particles. This avoids Math.random() during SSR while satisfying the `react-hooks/set-state-in-effect` lint rule.

### Bug Fix 2: Cookie consent overlap on mobile
- **File**: `src/components/ui-custom/CookieConsent.tsx`
- **Changes**:
  - Outer container: `fixed bottom-20 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-lg sm:mx-auto z-[999]`
  - Padding: `p-4 sm:p-6` (reduced on mobile)
  - Text size: `text-xs sm:text-sm` (reduced on mobile)
  - Bottom offset `mb-20` on mobile avoids overlap with WhatsApp button and ScrollToTop

### Bug Fix 3: Smooth parallax on hero background
- **File**: `src/components/sections/HeroSection.tsx`
- **Changes**:
  - Imported `useScroll, useTransform` from framer-motion
  - Added `const { scrollY } = useScroll()` and `const bgY = useTransform(scrollY, [0, 500], [0, 150])`
  - Wrapped background image div with `<motion.div style={{ y: bgY }}>` for parallax scroll effect

### Bug Fix 4: ScrollToTop with progress indicator
- **File**: `src/components/ui-custom/ScrollToTop.tsx`
- **Changes**:
  - Added scroll progress tracking using `(scrollTop / (docHeight - windowHeight)) * 100`
  - Added circular SVG progress ring around the button
  - Ring has a background track (light gold) and progress stroke (gold #D4A017)
  - Progress ring rotates -90deg so it fills from the top
  - Smooth transition on stroke-dashoffset
  - Kept existing ArrowUp icon and animation behavior

## Lint Status
All lint checks pass with zero errors.

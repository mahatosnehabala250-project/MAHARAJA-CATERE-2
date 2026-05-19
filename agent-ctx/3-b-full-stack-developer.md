# Task 3-b: Fix Plan, Services, Menu, Pricing, Gallery Sections

## Agent: full-stack-developer

## Summary
Fixed typography hierarchy, color consistency, contrast issues, and spacing across 5 section components. Transformed Gallery from gradient placeholders to real AI-generated images with lightbox.

## Changes Made

### PlanSection.tsx
- `text-[#555555]` → `text-[#444444]` for description text (3 instances)
- Step circle: `shadow-lg` → `shadow-xl`
- Icon circle: Added `hover:scale-110 transition-transform`
- Added gold decorative top line
- CTA button already had `shadow-lg shadow-[#800020]/20`

### ServicesSection.tsx
- Card description + subheading: `text-[#555555]` → `text-[#444444]`
- Card: Added `hover:shadow-xl hover:shadow-[#800020]/5`
- Gold accent line: `h-1` → `h-[3px]`
- Added gold decorative top line

### MenuSection.tsx
- Subheading: `text-[#555555]` → `text-[#444444]`
- Tab inactive: `text-[#777777]` → `text-[#555555]`
- Menu items: Added `hover:translate-x-1 transition-transform`
- Gold dot: `w-2 h-2` → `w-2.5 h-2.5`
- Added gold decorative top line

### PricingSection.tsx
- Subheading + suitability + /plate + custom note: `text-[#555555]` → `text-[#444444]`
- Crown: Added `animate-crown-shimmer`, color → `#D4A017`
- Popular card glow: increased shadow intensity
- CTA outline border: `2px` → `2.5px`
- Added gold decorative top line

### GallerySection.tsx
- Replaced gradient placeholders with 6 AI-generated images (gallery-1.jpg through gallery-6.jpg)
- Added lightbox/modal with framer-motion AnimatePresence
- Added prev/next navigation, close button, image counter
- Image hover: `group-hover:scale-110`
- Hover overlay with zoom icon
- Subheading: `text-[#555555]` → `text-[#444444]`
- Added gold decorative top line

### globals.css
- Added `crown-shimmer` keyframe + `.animate-crown-shimmer` class

## Lint: ✅ 0 errors
## Dev Server: ✅ Running

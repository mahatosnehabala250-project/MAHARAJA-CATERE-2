# Task 5-g: CTASection Component

## Summary
Created the CTASection component at `/home/z/my-project/src/components/sections/CTASection.tsx` — the SB7 #5 "Call to Action" section for the Maharaja Caterer website.

## What was done
- Created `CTASection.tsx` with maroon (#800020) background, white text, gold accents
- Content: "Ready to Celebrate?" badge, main heading with gold gradient, body text, ornamental divider
- Two CTA buttons: "Book Your Event Today" (gold gradient, Calendar icon → #contact) and "Call Us" (white outline, Phone icon → tel:)
- 3 trust items: "✓ No Hidden Charges", "✓ Free Menu Consultation", "✓ 100% Satisfaction Guarantee"
- Subtle mandala pattern overlay at opacity-[0.08]
- Framer-motion scroll animations (fadeUp, scaleIn, containerVariants with stagger)
- Responsive: buttons stack vertically on mobile, horizontal on desktop
- Replaced CTABanner import with CTASection in page.tsx

## Files modified
- **Created**: `src/components/sections/CTASection.tsx`
- **Modified**: `src/app/page.tsx` (replaced CTABanner → CTASection)
- **Modified**: `worklog.md` (appended work log)

## Verification
- `bun run lint` passes with zero errors
- Dev server compiling and returning 200

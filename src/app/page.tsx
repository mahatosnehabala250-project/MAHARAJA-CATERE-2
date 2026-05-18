'use client'

import { useState } from 'react'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import GuideSection from '@/components/sections/GuideSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PlanSection from '@/components/sections/PlanSection'
import MenuSection from '@/components/sections/MenuSection'
import PricingSection from '@/components/sections/PricingSection'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import LoadingScreen from '@/components/ui-custom/LoadingScreen'
import ScrollToTop from '@/components/ui-custom/ScrollToTop'
import ReadingProgressBar from '@/components/ui-custom/ReadingProgressBar'
import StructuredData from '@/components/ui-custom/StructuredData'

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      <StructuredData />
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}
      <div className="min-h-screen flex flex-col bg-white">
        <ReadingProgressBar />
        <Navbar />
        <main className="flex-1">
          {/* SB7 #1: Character — Hook the customer with their desire */}
          <HeroSection />

          {/* SB7 #2 + #6: Problem + Failure — What's at stake */}
          <ProblemSection />

          {/* SB7 #3: Guide — Position Maharaja as the trusted expert */}
          <GuideSection />

          {/* Guide's Expertise — Types of celebrations */}
          <ServicesSection />

          {/* SB7 #4: Plan — 3 steps to success */}
          <PlanSection />

          {/* SB7 #4: Plan Details — Menu choices */}
          <MenuSection />

          {/* SB7 #4: Plan Pricing — Transparent investment */}
          <PricingSection />

          {/* SB7 #7: Success Visual — See what success looks like */}
          <GallerySection />

          {/* SB7 #7: Success Stories — Real testimonials */}
          <TestimonialsSection />

          {/* SB7 #5: Call to Action — Don't let your event be forgettable */}
          <CTASection />

          {/* Objection Handling — FAQ */}
          <FAQSection />

          {/* Final Conversion — Contact form */}
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </div>
    </>
  )
}

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
          <HeroSection />
          <ProblemSection />
          <GuideSection />
          <ServicesSection />
          <PlanSection />
          <MenuSection />
          <PricingSection />
          <GallerySection />
          <TestimonialsSection />
          <CTASection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </div>
    </>
  )
}

'use client'

import { useState } from 'react'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import MenuSection from '@/components/sections/MenuSection'
import GallerySection from '@/components/sections/GallerySection'
import CTABanner from '@/components/sections/CTABanner'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import EventTypeChips from '@/components/ui-custom/EventTypeChips'
import MaharajaFigures from '@/components/ui-custom/MaharajaFigures'
import SocialProofBanner from '@/components/ui-custom/SocialProofBanner'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
import ProcessSection from '@/components/sections/ProcessSection'
import LoadingScreen from '@/components/ui-custom/LoadingScreen'
import ScrollToTop from '@/components/ui-custom/ScrollToTop'

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <SocialProofBanner />
          <MaharajaFigures />
          <AboutSection />
          <EventTypeChips />
          <ServicesSection />
          <ProcessSection />
          <MenuSection />
          <PricingSection />
          <GallerySection />
          <CTABanner />
          <TestimonialsSection />
          <StatsSection />
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

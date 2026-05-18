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
import ReadingProgressBar from '@/components/ui-custom/ReadingProgressBar'
import SpecialOffersSection from '@/components/sections/SpecialOffersSection'
import CookieConsent from '@/components/ui-custom/CookieConsent'
import SectionDivider from '@/components/ui-custom/SectionDivider'
import TrustSection from '@/components/sections/TrustSection'
import EventCalculator from '@/components/ui-custom/EventCalculator'
import StructuredData from '@/components/ui-custom/StructuredData'
import VenuePartnersSection from '@/components/sections/VenuePartnersSection'
import FloatingActionMenu from '@/components/ui-custom/FloatingActionMenu'
import MenuDownloadCTA from '@/components/ui-custom/MenuDownloadCTA'
import ChefSpecialSection from '@/components/sections/ChefSpecialSection'
import EventCountdown from '@/components/ui-custom/EventCountdown'
import TestimonialVideoSection from '@/components/sections/TestimonialVideoSection'
import ImageCarousel from '@/components/ui-custom/ImageCarousel'
import BeforeAfterComparison from '@/components/sections/BeforeAfterComparison'
import InteractiveMapSection from '@/components/sections/InteractiveMapSection'
import SeasonalMenuSection from '@/components/sections/SeasonalMenuSection'
import GuestReviewsWidget from '@/components/ui-custom/GuestReviewsWidget'
import SocialFeedSection from '@/components/sections/SocialFeedSection'

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      <StructuredData />
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}
      <div className="min-h-screen flex flex-col">
        <ReadingProgressBar />
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ImageCarousel />
          <SectionDivider variant="gold-wave" />
          <SocialProofBanner />
          <MaharajaFigures />
          <AboutSection />
          <TrustSection />
          <EventTypeChips />
          <ServicesSection />
          <ProcessSection />
          <MenuSection />
          <MenuDownloadCTA />
          <SeasonalMenuSection />
          <ChefSpecialSection />
          <PricingSection />
          <EventCalculator />
          <EventCountdown />
          <GallerySection />
          <BeforeAfterComparison />
          <SpecialOffersSection />
          <VenuePartnersSection />
          <CTABanner />
          <TestimonialsSection />
          <TestimonialVideoSection />
          <SocialFeedSection />
          <StatsSection />
          <SectionDivider variant="maroon-peak" />
          <FAQSection />
          <SectionDivider variant="double-line" />
          <InteractiveMapSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <FloatingActionMenu />
        <GuestReviewsWidget />
      </div>
      <CookieConsent />
    </>
  )
}

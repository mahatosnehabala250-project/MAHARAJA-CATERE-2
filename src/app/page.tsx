'use client'

import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import MenuSection from '@/components/sections/MenuSection'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import MaharajaFigures from '@/components/ui-custom/MaharajaFigures'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MaharajaFigures />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

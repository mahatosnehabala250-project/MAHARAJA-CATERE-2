'use client'

import Navbar from '@/components/sections/Navbar'
import SpecialOffersSection from '@/components/sections/SpecialOffersSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import ScrollToTop from '@/components/ui-custom/ScrollToTop'

export default function OffersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <SpecialOffersSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

'use client'

import Navbar from '@/components/sections/Navbar'
import PlanSection from '@/components/sections/PlanSection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import ScrollToTop from '@/components/ui-custom/ScrollToTop'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <PlanSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

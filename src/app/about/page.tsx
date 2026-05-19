'use client'

import Navbar from '@/components/sections/Navbar'
import ProblemSection from '@/components/sections/ProblemSection'
import StatsSection from '@/components/sections/StatsSection'
import GuideSection from '@/components/sections/GuideSection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import ScrollToTop from '@/components/ui-custom/ScrollToTop'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <ProblemSection />
        <StatsSection />
        <GuideSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

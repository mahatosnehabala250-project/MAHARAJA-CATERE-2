'use client'

import Navbar from '@/components/sections/Navbar'
import GallerySection from '@/components/sections/GallerySection'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/ui-custom/WhatsAppFloat'
import ScrollToTop from '@/components/ui-custom/ScrollToTop'

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <GallerySection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

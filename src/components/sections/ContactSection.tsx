'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// ── Zod Schema ────────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').or(z.literal('')).optional(),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().optional(),
  guests: z
    .string()
    .optional()
    .refine(
      (val) => !val || (/^\d+$/.test(val) && Number(val) > 0),
      'Please enter a valid number'
    ),
  requirements: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

// ── Event Types ───────────────────────────────────────────────────────────────
const eventTypes = [
  'Wedding',
  'Birthday',
  'Anniversary',
  'Corporate',
  'Rice Ceremony',
  'Other',
] as const

// ── Contact Info Data ─────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 89450 05456',
    href: 'tel:+918945005456',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 89450 05456',
    href: 'https://wa.me/918945005456',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'maharajacatererpurulia@gmail.com',
    href: 'mailto:maharajacatererpurulia@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Purulia, West Bengal, India',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Available 7 days a week, 8 AM - 10 PM',
    href: undefined,
  },
]

// ── Shared Input Styles ───────────────────────────────────────────────────────
const inputStyles =
  'rounded-lg bg-white border-[#E8E4DD] text-[#1A1A1A] placeholder:text-[#999999] transition-all duration-300 focus:border-[#800020] focus:ring-2 focus:ring-[#D4A017]/30 h-11'

const selectTriggerStyles =
  'rounded-lg bg-white border-[#E8E4DD] text-[#1A1A1A] transition-all duration-300 focus:border-[#800020] focus:ring-2 focus:ring-[#D4A017]/30 h-11'

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      guests: '',
      requirements: '',
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      toast.success('Booking Request Sent!', {
        description:
          "Thank you for reaching out! We'll get back to you within 24 hours to plan your royal feast.",
      })
      form.reset()
    } catch {
      toast.error('Submission Failed', {
        description:
          'Something went wrong. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#FAFAF5' }}
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#800020] font-[family-name:var(--font-lato)]">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800020] font-[family-name:var(--font-playfair)] mb-4">
            Let&apos;s Plan Your Royal Feast
          </h2>

          {/* Ornament Divider */}
          <div className="ornament-divider max-w-xs mx-auto mb-4">
            <span className="text-[#D4A017] text-lg">&#10022;</span>
          </div>

          {/* Subheading */}
          <p className="text-[#444444] text-base md:text-lg max-w-2xl mx-auto font-[family-name:var(--font-lato)] leading-relaxed">
            Tell us about your event and we&apos;ll create the perfect menu for
            you. No obligation, no hidden costs.
          </p>
        </div>

        {/* ── Two-Column Layout ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* LEFT — Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E4DD] shadow-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                        Name <span className="text-[#800020]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className={inputStyles}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                        Phone Number <span className="text-[#800020]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className={inputStyles}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                        Email{' '}
                        <span className="text-[#999999] text-xs font-normal">
                          (optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className={inputStyles}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Event Type + Event Date (2 col on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                          Event Type <span className="text-[#800020]">*</span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className={selectTriggerStyles}>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                          Event Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className={inputStyles}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Number of Guests */}
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                        Number of Guests
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g. 200"
                          min="1"
                          className={inputStyles}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Special Requirements */}
                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A] text-sm font-medium font-[family-name:var(--font-lato)]">
                        Special Requirements
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about any dietary preferences, special dishes, or other requirements..."
                          className="rounded-lg bg-white border-[#E8E4DD] text-[#1A1A1A] placeholder:text-[#999999] transition-all duration-300 focus:border-[#800020] focus:ring-2 focus:ring-[#D4A017]/30 min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#800020] hover:bg-[#6B0018] text-white font-semibold py-3 h-12 text-base rounded-lg shadow-lg shadow-[#800020]/20 hover:shadow-xl transition-all duration-300 font-[family-name:var(--font-lato)] group"
                >
                  {isSubmitting ? (
                    <Loader2 className="size-5 animate-spin mr-2" />
                  ) : (
                    <Calendar className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Book My Event'}
                </Button>
              </form>
            </Form>
          </div>

          {/* RIGHT — Contact Information + Map */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E4DD] shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-[#800020] font-[family-name:var(--font-playfair)] mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#800020]/5 flex items-center justify-center shrink-0">
                      <info.icon className="size-[18px] text-[#800020]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#999999] mb-0.5 font-[family-name:var(--font-lato)]">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            info.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="text-sm text-[#1A1A1A] hover:text-[#800020] transition-colors break-all font-medium font-[family-name:var(--font-lato)]"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#1A1A1A] font-medium font-[family-name:var(--font-lato)]">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative divider */}
              <div className="my-6 border-t border-[#E8E4DD]" />

              {/* Quick CTA Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+918945005456"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#800020]/20 bg-[#800020]/5 text-[#800020] text-sm font-medium hover:bg-[#800020] hover:text-white transition-all duration-300 font-[family-name:var(--font-lato)]"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918945005456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-green-600/20 bg-green-50 text-green-700 text-sm font-medium hover:bg-green-600 hover:text-white transition-all duration-300 font-[family-name:var(--font-lato)]"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8E4DD] shadow-sm overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-[#E8E4DD]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29179.47498524618!2d86.35!3d23.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3f8e0b0b0b1%3A0x4b0b0b0b0b0b0b0b!2sPurulia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  className="h-[280px] grayscale-[20%] contrast-[1.05]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maharaja Caterer Location — Purulia, West Bengal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

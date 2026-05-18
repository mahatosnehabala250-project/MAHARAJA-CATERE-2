'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Globe,
  Facebook,
  Send,
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

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  eventType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Near Fan House, Nadiha, Chowk Bazar, Purulia, West Bengal 723101',
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '089450 05456 / 8293829200',
    href: 'tel:+918945005456',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '8945005456',
    href: 'https://wa.me/918945005456',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'maharajaCaterer104@gmail.com',
    href: 'mailto:maharajaCaterer104@gmail.com',
  },
  {
    icon: Mail,
    label: 'Alt. Email',
    value: 'maharajacaterer24@gmail.com',
    href: 'mailto:maharajacaterer24@gmail.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '9:00 AM - 10:00 PM Daily',
    href: undefined,
  },
  {
    icon: Globe,
    label: 'Languages',
    value: 'English, Bengali',
    href: undefined,
  },
]

const eventTypes = [
  'Wedding',
  'Birthday',
  'Reception',
  'Family Function',
  'Social Event',
  'Other',
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: '',
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

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Royal Request Sent!', {
        description:
          'Thank you for reaching out! We will get back to you shortly.',
      })
      form.reset()
    } catch {
      toast.error('Failed to Send', {
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
      className="section-royal py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 mandala-bg opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-royal-maroon/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-maroon-gradient font-[var(--font-playfair)] mb-4">
            Get In Touch
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-4">
            <span className="text-royal-gold text-xl">✦</span>
          </div>
          <p className="text-royal-maroon/70 text-lg font-[var(--font-cormorant)]">
            Let Us Make Your Event Royal
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-royal-gold/20 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-royal-maroon mb-6 font-[var(--font-playfair)]">
                Send Us a Message
              </h3>

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
                        <FormLabel className="text-royal-maroon font-medium">
                          Name <span className="text-royal-red">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="border-royal-gold/30 bg-white/50 transition-all duration-300 focus:ring-2 focus:ring-royal-gold/40 focus:border-royal-gold placeholder:text-royal-gold/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-royal-maroon font-medium">
                          Email <span className="text-royal-red">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="border-royal-gold/30 bg-white/50 transition-all duration-300 focus:ring-2 focus:ring-royal-gold/40 focus:border-royal-gold placeholder:text-royal-gold/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-royal-maroon font-medium">
                          Phone{' '}
                          <span className="text-muted-foreground text-xs">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Your phone number"
                            className="border-royal-gold/30 bg-white/50 transition-all duration-300 focus:ring-2 focus:ring-royal-gold/40 focus:border-royal-gold placeholder:text-royal-gold/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Event Type */}
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-royal-maroon font-medium">
                          Event Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full border-royal-gold/30 bg-white/50 transition-all duration-300 focus:ring-2 focus:ring-royal-gold/40 focus:border-royal-gold">
                              <SelectValue placeholder="Select event type" />
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-royal-maroon font-medium">
                          Message <span className="text-royal-red">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your event..."
                            className="min-h-[120px] border-royal-gold/30 bg-white/50 resize-none transition-all duration-300 focus:ring-2 focus:ring-royal-gold/40 focus:border-royal-gold placeholder:text-royal-gold/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-light hover:from-royal-gold hover:via-royal-gold-light hover:to-royal-gold text-white font-semibold py-3 h-12 text-base shadow-lg hover:shadow-xl hover:shadow-royal-gold/30 transition-all duration-300 group hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="size-5 animate-spin mr-2" />
                    ) : (
                      <Send className="size-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Royal Request'}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-royal-gold/20 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-royal-maroon mb-6 font-[var(--font-playfair)]">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center shrink-0 group-hover:bg-royal-gold/20 transition-colors">
                      <info.icon className="size-4 md:size-5 text-royal-gold-dark" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-royal-maroon/60 font-medium uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-royal-maroon hover:text-royal-gold-dark transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-royal-maroon">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-4 border-t border-royal-gold/20">
                <p className="text-sm text-royal-maroon/60 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064833288803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-royal-maroon flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="size-4" />
                  </a>
                  <a
                    href="https://wa.me/918945005456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="size-4" />
                  </a>
                  <a
                    href="tel:+918945005456"
                    className="w-10 h-10 rounded-full bg-royal-gold-dark flex items-center justify-center text-white hover:bg-royal-gold transition-all duration-300"
                    aria-label="Phone"
                  >
                    <Phone className="size-4" />
                  </a>
                  <a
                    href="mailto:maharajaCaterer104@gmail.com"
                    className="w-10 h-10 rounded-full bg-royal-maroon-light flex items-center justify-center text-white hover:bg-royal-maroon transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-royal-gold/20 shadow-lg overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29179.47498524618!2d86.35!3d23.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3f8e0b0b0b1%3A0x4b0b0b0b0b0b0b0b!2sPurulia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maharaja Caterer Location - Purulia, West Bengal"
                  className="grayscale-[30%] contrast-[1.1]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

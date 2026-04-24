'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO, PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/cn'

const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

const inputClass = cn(
  'w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]',
  'px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]',
  'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
  'transition-all duration-150'
)

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
      reset()
    } catch {
      // still show success for demo purposes
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <AnimateInView className="mb-14 text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Ready to transform your business?"
            subtitle="Tell us about your project and we'll reach out within 24 hours to schedule your free demo."
            align="center"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <AnimateInView direction="left" className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--foreground)] mb-2">
                    Message sent!
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Full Name <span className="text-brand-500">*</span>
                      </label>
                      <input
                        {...register('name')}
                        placeholder="Jane Smith"
                        className={cn(inputClass, errors.name && 'border-red-500 focus:ring-red-500')}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Company
                      </label>
                      <input
                        {...register('company')}
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Email <span className="text-brand-500">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="jane@company.com"
                        className={cn(inputClass, errors.email && 'border-red-500 focus:ring-red-500')}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                        Phone
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+1 (xxx) xxx-xxxx"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Product interest */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      Product Interest
                    </label>
                    <select {...register('product')} className={inputClass}>
                      <option value="">Select a product...</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      Message <span className="text-brand-500">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your business and what you're looking to solve..."
                      className={cn(
                        inputClass,
                        'resize-none',
                        errors.message && 'border-red-500 focus:ring-red-500'
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full gap-2"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message & Request Demo'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimateInView>

          {/* Company info */}
          <AnimateInView direction="right" delay={0.15} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--foreground)] mb-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm">
                  {COMPANY_INFO.tagline}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
                      Email
                    </div>
                    <div className="text-sm font-medium text-[var(--foreground)] group-hover:text-brand-500 transition-colors">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
                      Phone
                    </div>
                    <div className="text-sm font-medium text-[var(--foreground)]">
                      {COMPANY_INFO.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
                      Location
                    </div>
                    <div className="text-sm font-medium text-[var(--foreground)]">
                      🇨🇦 {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Why contact us */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 mt-6">
                <h4 className="font-display font-semibold text-[var(--foreground)] mb-3 text-sm">
                  What happens next?
                </h4>
                <ol className="space-y-2.5">
                  {[
                    'We review your message within 24 hours',
                    'Schedule a free 30-minute discovery call',
                    'Receive a tailored product demo',
                    'Get a custom proposal for your business',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--muted-foreground)]">
                      <span className="w-5 h-5 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

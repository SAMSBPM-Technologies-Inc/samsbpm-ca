'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQS } from '@/lib/constants'
import { cn } from '@/lib/cn'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[var(--card)] hover:bg-[var(--muted)] transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-[var(--foreground)]">{question}</span>
        <ChevronDown
          size={18}
          className={cn(
            'flex-shrink-0 text-[var(--muted-foreground)] transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-[var(--background)] border-t border-[var(--border)]">
          <p className="text-[var(--muted-foreground)] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-max">
        <AnimateInView className="mb-12 text-center">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about SAMSBPM Technologies and our products."
            align="center"
          />
        </AnimateInView>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq) => (
            <AnimateInView key={faq.question}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

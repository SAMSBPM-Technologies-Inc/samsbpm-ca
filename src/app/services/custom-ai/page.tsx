import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Sparkles, BrainCircuit, Bot, FileSearch, Workflow, Database, Rocket } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Custom AI Solutions Canada — AI Software Development for Businesses | SAMSBPM',
  description: 'SAMSBPM Technologies builds custom AI solutions for Canadian businesses — AI workflow automation, LLM integrations (OpenAI, Claude), intelligent chatbots, document parsing, and data pipelines. From idea to production.',
  keywords: [
    'custom AI solutions Canada',
    'AI software development Canada',
    'business AI automation Canada',
    'LLM integration Canada',
    'AI chatbot development Canada',
    'custom AI for small business Canada',
    'AI workflow automation Canada',
    'artificial intelligence development Canada',
    'OpenAI integration Canada',
    'Claude AI integration Canada',
    'document AI parsing Canada',
    'AI consulting Canada',
  ],
  alternates: { canonical: 'https://samsbpm.ca/services/custom-ai' },
  openGraph: {
    title: 'Custom AI Solutions for Canadian Businesses — SAMSBPM Technologies',
    description: 'We design and build custom AI solutions tailored to your business — LLM integrations, intelligent chatbots, document parsing, AI workflow automation, and data pipelines. Canadian-owned, PIPEDA-compliant.',
    url: 'https://samsbpm.ca/services/custom-ai',
    siteName: 'SAMSBPM Technologies Inc.',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Solutions Canada — SAMSBPM Technologies',
    description: 'Custom AI software development for Canadian businesses. LLM integrations, chatbots, document AI, workflow automation.',
    images: ['/og-image.png'],
  },
}

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'LLM Integration',
    description: 'Integrate large language models — OpenAI GPT, Anthropic Claude, or open-source models — directly into your product, internal tools, or customer-facing applications.',
    examples: ['AI-powered search inside your app', 'Intelligent product recommendations', 'Automated content generation workflows', 'LLM-driven decision support tools'],
  },
  {
    icon: Bot,
    title: 'Custom AI Chatbots',
    description: 'Build AI chatbots trained on your business data for customer support, internal knowledge bases, sales qualification, or any conversational interface your business needs.',
    examples: ['Customer support bot trained on your FAQs', 'Internal HR and policy Q&A assistant', 'AI sales assistant for your website', 'WhatsApp AI assistant for order queries'],
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence',
    description: 'Use AI to extract structured data from unstructured documents — invoices, contracts, forms, receipts, and PDFs — with high accuracy and no manual data entry.',
    examples: ['Automated invoice and PO data extraction', 'Contract clause identification and review', 'Medical form digitization', 'Receipt parsing for expense automation'],
  },
  {
    icon: Workflow,
    title: 'AI Workflow Automation',
    description: 'Replace manual, repetitive business processes with intelligent AI workflows that understand context, make decisions, and trigger the right actions automatically.',
    examples: ['Intelligent order triage and routing', 'AI-powered email classification and response', 'Automated report generation from raw data', 'Smart lead scoring and CRM enrichment'],
  },
  {
    icon: Database,
    title: 'Data Pipelines & AI Infrastructure',
    description: 'Build the data foundation your AI systems need — clean, structured, and accessible pipelines that feed your models with the right information at the right time.',
    examples: ['ETL pipelines for AI model training data', 'Vector databases for semantic search', 'Real-time data feeds for AI decision systems', 'AI-ready data warehouse architecture'],
  },
  {
    icon: Rocket,
    title: 'End-to-End AI Product Build',
    description: 'From discovery and architecture through design, development, testing, and production deployment — we build complete AI-powered products for your business.',
    examples: ['Full AI SaaS product development', 'AI feature addition to existing software', 'Proof-of-concept to production builds', 'Ongoing AI model improvement and maintenance'],
  },
]

const process = [
  { step: 1, title: 'Discovery Call',     desc: 'We learn your business, your workflows, and the problem you want AI to solve.' },
  { step: 2, title: 'Solution Design',    desc: 'We propose an AI architecture tailored to your goals, data, and budget.' },
  { step: 3, title: 'Build & Iterate',   desc: 'We develop the solution in sprints with regular demos and your feedback.' },
  { step: 4, title: 'Deploy & Support',  desc: 'We deploy to production and provide ongoing support and model improvements.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://samsbpm.ca' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://samsbpm.ca/#products' },
        { '@type': 'ListItem', position: 3, name: 'Custom AI Solutions', item: 'https://samsbpm.ca/services/custom-ai' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Custom AI Solutions',
      description: 'SAMSBPM Technologies designs and builds custom AI solutions for Canadian businesses — including LLM integrations, AI chatbots, document intelligence, workflow automation, and data pipelines.',
      provider: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
        url: 'https://samsbpm.ca',
      },
      areaServed: { '@type': 'Country', name: 'Canada' },
      serviceType: 'Custom AI Software Development',
      audience: { '@type': 'Audience', audienceType: 'Canadian businesses seeking custom AI solutions' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Custom AI Services',
        itemListElement: capabilities.map((c) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: c.title, description: c.description },
        })),
      },
    },
  ],
}

export default function CustomAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[var(--background)]">
        {/* Breadcrumb */}
        <div className="border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
              <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-brand-500 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[var(--foreground)]">Custom AI Solutions</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors mb-10"
          >
            <ArrowLeft size={15} />
            Back to all products & services
          </Link>

          {/* Hero */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-brand-500/10 text-brand-500">
              <Sparkles size={12} />
              Custom AI Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4 leading-tight">
              Custom AI Built Around<br />Your Business
            </h1>
            <p className="text-xl text-brand-500 font-medium mb-6">
              From idea to production — AI solutions designed for your workflows, your data, your goals.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-3xl mb-8">
              Off-the-shelf AI tools solve generic problems. SAMSBPM designs and builds AI solutions
              specifically for your business — your processes, your data, and your customers.
              Whether you need to automate a complex internal workflow, integrate a large language model
              into your product, or build an intelligent customer-facing experience, we take you from
              discovery through to production deployment — reliably, securely, and PIPEDA-compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
              >
                Book a Free Discovery Call
              </Link>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:bg-[var(--muted)] transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-[var(--foreground)] mb-2">What We Build</h2>
            <p className="text-[var(--muted-foreground)] mb-10">Six areas of custom AI development we deliver for Canadian businesses.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map(({ icon: Icon, title, description, examples }) => (
                <div key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--foreground)] mb-2">{title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">{description}</p>
                  <ul className="space-y-1.5">
                    {examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                        <CheckCircle2 size={14} className="text-brand-500 mt-0.5 flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-[var(--foreground)] mb-2">How It Works</h2>
            <p className="text-[var(--muted-foreground)] mb-10">A straightforward process from first call to live deployment.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <div className="w-10 h-10 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center mb-4 text-sm">
                    {step}
                  </div>
                  <h3 className="font-display font-bold text-[var(--foreground)] mb-2">{title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why SAMSBPM */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[var(--foreground)] mb-8">Why SAMSBPM for AI?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Canadian-Owned & PIPEDA-Compliant', desc: 'Your data stays in Canada. Every AI solution we build is designed with Canadian privacy law in mind.' },
                { title: 'Built for Small & Medium Businesses', desc: 'Enterprise-grade AI without enterprise price tags. We work within realistic budgets and timelines.' },
                { title: 'Full-Stack AI Expertise', desc: 'From data pipelines to frontend UX, we handle the entire AI solution — not just one piece of it.' },
                { title: 'Ongoing Partnership', desc: 'We don\'t disappear after launch. We iterate, improve, and support your AI solution as your business grows.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                  <CheckCircle2 size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[var(--foreground)] mb-1">{title}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-brand-500" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[var(--foreground)] mb-3">
              Ready to build your custom AI solution?
            </h2>
            <p className="text-[var(--muted-foreground)] mb-6 max-w-xl mx-auto">
              Book a free 30-minute discovery call and we&apos;ll explore how AI can solve your
              biggest business challenges.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

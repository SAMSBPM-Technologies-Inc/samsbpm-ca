import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react'
import { PRODUCTS, TOOLS, COMPANY_INFO } from '@/lib/constants'

export const dynamic = 'force-static'

const ALL_ITEMS = [...PRODUCTS, ...TOOLS]

export async function generateStaticParams() {
  return ALL_ITEMS.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = ALL_ITEMS.find((p) => p.id === id)
  if (!product) return {}

  return {
    title: product.seoTitle ?? `${product.name} | SAMSBPM Technologies`,
    description: product.seoDescription ?? product.description,
    keywords: product.keywords ?? [],
    alternates: { canonical: `https://samsbpm.ca/products/${product.id}` },
    openGraph: {
      title: product.seoTitle ?? product.name,
      description: product.seoDescription ?? product.description,
      url: `https://samsbpm.ca/products/${product.id}`,
      siteName: 'SAMSBPM Technologies Inc.',
      locale: 'en_CA',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle ?? product.name,
      description: product.seoDescription ?? product.description,
      images: ['/og-image.png'],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = ALL_ITEMS.find((p) => p.id === id)
  if (!product) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://samsbpm.ca' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://samsbpm.ca/#products' },
          { '@type': 'ListItem', position: 3, name: product.name, item: `https://samsbpm.ca/products/${product.id}` },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: product.name,
        description: product.longDescription ?? product.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: product.productUrl ?? `https://samsbpm.ca/products/${product.id}`,
        offers: {
          '@type': 'Offer',
          seller: {
            '@type': 'Organization',
            name: COMPANY_INFO.name,
            url: 'https://samsbpm.ca',
          },
        },
        creator: {
          '@type': 'Organization',
          name: COMPANY_INFO.name,
          url: 'https://samsbpm.ca',
        },
        featureList: product.features.join(', '),
        audience: {
          '@type': 'Audience',
          audienceType: product.targetAudience,
        },
      },
    ],
  }

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
              <Link href="/#products" className="hover:text-brand-500 transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[var(--foreground)]">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors mb-10"
          >
            <ArrowLeft size={15} />
            Back to all products
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-brand-500/10 text-brand-500`}>
              {product.badge}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-brand-500 font-medium mb-6">{product.tagline}</p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-3xl">
              {product.longDescription ?? product.description}
            </p>
            {product.productUrl && (
              <a
                href={product.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
              >
                Visit {product.productUrl.replace('https://', '')}
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--foreground)] mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--muted-foreground)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use cases + audience */}
            <div className="space-y-8">
              {product.targetAudience && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-[var(--foreground)] mb-4">
                    Who It&apos;s For
                  </h2>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {product.targetAudience}
                  </p>
                </div>
              )}

              {product.useCases && product.useCases.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-[var(--foreground)] mb-4">
                    Common Use Cases
                  </h2>
                  <ul className="space-y-3">
                    {product.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                        <span className="text-[var(--muted-foreground)]">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-[var(--foreground)] mb-3">
              Interested in {product.name}?
            </h2>
            <p className="text-[var(--muted-foreground)] mb-6">
              Get in touch and we&apos;ll set up a free demo tailored to your business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              Request a Free Demo
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

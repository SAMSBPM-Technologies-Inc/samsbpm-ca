import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://samsbpm.ca'),
  title: {
    default: 'SAMSBPM Technologies Inc. — Canadian SaaS & Automation Solutions',
    template: '%s | SAMSBPM Technologies',
  },
  description:
    'SAMSBPM Technologies Inc. builds automation tools, API platforms, eCommerce solutions, invoicing software, and subscription management platforms for small businesses and enterprises across Canada.',
  keywords: [
    'SAMSBPM',
    'SAMSBPM Technologies',
    'Canadian tech company',
    'Canadian SaaS',
    'SaaS automation',
    'small business software Canada',
    'API platform Canada',
    'eCommerce solutions Canada',
    'AutoOrderSync',
    'WhatsApp order automation',
    'BillBridge',
    'invoice management software',
    'ServStack',
    'subscription management platform',
    'Vedoryx',
    'rental management system',
    'portfolio hosting',
    'website builder Canada',
    'digital solutions Canada',
    'business automation Canada',
    'PIPEDA compliant software',
  ],
  alternates: {
    canonical: 'https://samsbpm.ca',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://samsbpm.ca',
    siteName: 'SAMSBPM Technologies Inc.',
    title: 'SAMSBPM Technologies Inc. — Built in Canada. Built for Growth.',
    description:
      'Automation tools, API platforms, invoicing software, subscription management, and digital solutions purpose-built for Canadian small businesses and enterprises.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SAMSBPM Technologies Inc. — Canadian SaaS & Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMSBPM Technologies Inc. — Built in Canada. Built for Growth.',
    description: 'Canadian SaaS & automation solutions for modern businesses. AutoOrderSync, BillBridge, ServStack, and more.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SAMSBPM Technologies Inc.',
              alternateName: 'SAMSBPM',
              url: 'https://samsbpm.ca',
              sameAs: [
                'https://samsbpm.com',
                'https://linkedin.com/company/samsbpm',
                'https://twitter.com/samsbpm',
                'https://github.com/SAMSBPM-Technologies-Inc',
              ],
              logo: 'https://samsbpm.ca/samsbpm-lockup.svg',
              description:
                'SAMSBPM Technologies Inc. is a Canadian SaaS company building automation tools, API platforms, invoicing software, and subscription management systems for small businesses and enterprises.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@samsbpm.com',
                contactType: 'customer support',
                availableLanguage: 'English',
              },
              foundingLocation: {
                '@type': 'Place',
                address: { '@type': 'PostalAddress', addressCountry: 'CA' },
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'SAMSBPM Products',
                itemListElement: [
                  { '@type': 'SoftwareApplication', name: 'AutoOrderSync Tool',        applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                  { '@type': 'SoftwareApplication', name: 'BillBridge',                applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://billbridge.ca'         },
                  { '@type': 'SoftwareApplication', name: 'ServStack',                 applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://servstack.ca'          },
                  { '@type': 'SoftwareApplication', name: 'Vedoryx-API',               applicationCategory: 'DeveloperApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                  { '@type': 'SoftwareApplication', name: 'Vedoryx-Dashboard',         applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                  { '@type': 'SoftwareApplication', name: 'eCommerce Frontend',        applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                  { '@type': 'SoftwareApplication', name: 'Simple Website Builder',    applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                  { '@type': 'SoftwareApplication', name: 'Rental Management System',  applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                  { '@type': 'SoftwareApplication', name: 'Portfolio Hosting Platform',applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: 'https://samsbpm.ca/#products' },
                ],
              },
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

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
    'SAMSBPM Technologies Inc. builds automation tools, API platforms, eCommerce solutions, and smart digital products for small businesses and enterprises across Canada.',
  keywords: [
    'SAMSBPM',
    'Canadian tech company',
    'SaaS automation',
    'small business software',
    'API platform',
    'eCommerce solutions',
    'AutoOrderSync',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://samsbpm.ca',
    siteName: 'SAMSBPM Technologies Inc.',
    title: 'SAMSBPM Technologies Inc. — Built in Canada. Built for Growth.',
    description:
      'Automation tools, API platforms, and digital solutions purpose-built for Canadian small businesses and enterprises.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMSBPM Technologies Inc.',
    description: 'Canadian SaaS & automation solutions for modern businesses.',
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

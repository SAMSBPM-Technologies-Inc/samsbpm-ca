import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { PRODUCTS, COMPANY_INFO } from '@/lib/constants'

const productLinks = PRODUCTS.slice(0, 5).map((p) => ({
  label: p.name,
  href: '#products',
}))

const companyLinks = [
  { label: 'About Us',     href: '#about'       },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Industries',   href: '#industries'   },
  { label: 'Contact',      href: '#contact'      },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/samsbpm-lockup.svg"
                alt="samsbpm – small business, big tools"
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4 max-w-[200px]">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: COMPANY_INFO.socials.linkedin, label: 'LinkedIn', text: 'in' },
                { href: COMPANY_INFO.socials.twitter,  label: 'Twitter',  text: 'X'  },
                { href: COMPANY_INFO.socials.github,   label: 'GitHub',   text: 'gh' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-brand-500 hover:bg-brand-500/10 transition-colors text-xs font-bold"
                >
                  {social.text}
                </a>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="font-display font-semibold text-[var(--foreground)] mb-4 text-sm">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  className="text-sm text-brand-500 hover:text-brand-600 transition-colors"
                >
                  View all →
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-display font-semibold text-[var(--foreground)] mb-4 text-sm">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display font-semibold text-[var(--foreground)] mb-4 text-sm">
              Get in Touch
            </h3>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors mb-3"
            >
              <Mail size={14} />
              {COMPANY_INFO.email}
            </a>
            <p className="text-sm text-[var(--muted-foreground)]">📍 Canada</p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400">
                🇨🇦 Canadian Company
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {year} SAMSBPM Technologies Inc. 🇨🇦 All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, COMPANY_INFO } from '@/lib/constants'

const companyLinks = [
  { label: 'About Us',     href: '#about'       },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Industries',   href: '#industries'   },
  { label: 'FAQ',          href: '#faq'          },
  { label: 'Contact',      href: '#contact'      },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Big top statement ── */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="label-mono text-white/40 mb-4">Built in Canada · Built for Growth</p>
              <h2 className="display-xl text-white leading-[0.9]">
                Ready to<br />
                <span className="text-brand-500">grow?</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold text-sm hover:bg-brand-600 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* ── Link grid ── */}
        <div className="py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-5">
              <Image
                src="/samsbpm-lockup-dark.svg"
                alt="SAMSBPM Technologies"
                width={150}
                height={42}
                className="h-9 w-auto invert brightness-0"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[180px] mb-5">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex gap-2">
              {[
                { href: COMPANY_INFO.socials.linkedin, label: 'LinkedIn', text: 'in' },
                { href: COMPANY_INFO.socials.twitter,  label: 'Twitter',  text: 'X'  },
                { href: COMPANY_INFO.socials.github,   label: 'GitHub',   text: 'gh' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors text-xs font-bold"
                >
                  {s.text}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="label-mono text-white/30 mb-4">Products</p>
            <ul className="space-y-2">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.id}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#products" className="text-sm text-brand-400 hover:text-brand-300 transition-colors">
                  View all →
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="label-mono text-white/30 mb-4">Company</p>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="label-mono text-white/30 mb-4">Services</p>
            <ul className="space-y-2">
              <li>
                <Link href="/services/custom-ai" className="text-sm text-white/60 hover:text-white transition-colors">
                  Custom AI Solutions
                </Link>
              </li>
              <li>
                <a href="#products" className="text-sm text-white/60 hover:text-white transition-colors">
                  API Platforms
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-white/60 hover:text-white transition-colors">
                  eCommerce
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label-mono text-white/30">
            © {year} SAMSBPM Technologies Inc. · 🇨🇦 Canada
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

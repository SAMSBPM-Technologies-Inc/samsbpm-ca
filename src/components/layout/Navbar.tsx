'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const scrolled = useScrolled(10)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-[var(--background)]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" aria-label="SAMSBPM Technologies homepage" className="flex-shrink-0">
            <Image
              src="/samsbpm-lockup.svg"
              alt="SAMSBPM Technologies"
              width={180}
              height={50}
              priority
              className="h-10 w-auto dark:hidden"
            />
            <Image
              src="/samsbpm-lockup-dark.svg"
              alt="SAMSBPM Technologies"
              width={180}
              height={50}
              priority
              className="h-10 w-auto hidden dark:block"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-lg hover:bg-[var(--muted)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold hover:bg-brand-500 transition-colors"
            >
              Request Demo
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--border)] py-4 space-y-0.5 bg-[var(--background)]">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 px-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-2.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold hover:bg-brand-500 transition-colors"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

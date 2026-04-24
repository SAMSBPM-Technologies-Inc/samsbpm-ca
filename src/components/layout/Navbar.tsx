'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Cpu } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const scrolled = useScrolled(10)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="SAMSBPM Technologies homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-brand-sm group-hover:shadow-brand-md transition-shadow">
              <Cpu size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg text-[var(--foreground)] hidden sm:block">
              SAMSBPM
            </span>
            <span className="hidden lg:block text-xs text-[var(--muted-foreground)] -mt-0.5">
              Technologies Inc.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium',
                  'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',
                  'hover:bg-[var(--muted)] transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: theme + CTA */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => handleNavClick('#contact')}
            >
              Request Demo
            </Button>

            {/* Mobile hamburger */}
            <button
              className={cn(
                'lg:hidden w-9 h-9 rounded-lg flex items-center justify-center',
                'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',
                'hover:bg-[var(--muted)] transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--border)] py-4 space-y-1 bg-[var(--background)]/95 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium',
                  'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',
                  'hover:bg-[var(--muted)] transition-colors duration-150'
                )}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => handleNavClick('#contact')}
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

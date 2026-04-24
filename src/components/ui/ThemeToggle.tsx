'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-lg', className)} aria-hidden />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={cn(
        'w-9 h-9 rounded-lg flex items-center justify-center',
        'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',
        'hover:bg-[var(--muted)] transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        className
      )}
    >
      {isDark ? (
        <Sun size={18} className="transition-transform duration-200 rotate-0 hover:rotate-12" />
      ) : (
        <Moon size={18} className="transition-transform duration-200" />
      )}
    </button>
  )
}

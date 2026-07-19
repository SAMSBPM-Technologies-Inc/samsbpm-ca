import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',         'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':    'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-hero':     'radial-gradient(ellipse 70% 50% at 50% -5%, #7c2d12 0%, #0e0c09 60%)',
        'gradient-subtle':   'linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.03) 100%)',
        'gradient-card':     'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(234,88,12,0.06) 100%)',
        'gradient-warm':     'linear-gradient(180deg, #f8f5ef 0%, #f0ece0 100%)',
        'gradient-ink':      'linear-gradient(135deg, #16120d 0%, #2e2820 100%)',
      },
      boxShadow: {
        'brand-sm':   '0 2px 8px rgba(249, 115, 22, 0.25)',
        'brand-md':   '0 4px 24px rgba(249, 115, 22, 0.35)',
        'brand-lg':   '0 8px 48px rgba(249, 115, 22, 0.4)',
        'card':       '0 1px 3px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.12), 0 16px 48px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config

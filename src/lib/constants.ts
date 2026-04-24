import type { NavLink, Product, Feature, Step, Industry } from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About',       href: '#about'        },
  { label: 'Products',    href: '#products'      },
  { label: 'How It Works',href: '#how-it-works'  },
  { label: 'Features',    href: '#features'      },
  { label: 'Industries',  href: '#industries'    },
  { label: 'Contact',     href: '#contact'       },
]

export const PRODUCTS: Product[] = [
  {
    id: 'autoordersync',
    name: 'AutoOrderSync Tool',
    tagline: 'Orders from any channel — automated end-to-end.',
    description:
      'Customers place orders via WhatsApp, Messenger, or Email. AutoOrderSync captures, validates, and creates them in your backend instantly — complete with reports and analytics.',
    icon: 'MessageSquare',
    gradient: 'from-emerald-500 to-green-600',
    badge: 'AI-Powered',
    badgeColor: 'emerald',
  },
  {
    id: 'api-vedoryx',
    name: 'Vedoryx-API',
    tagline: 'Scalable backend API platform for multi-business support.',
    description:
      'Build, deploy, and manage robust APIs with enterprise-grade reliability, intelligent rate limiting, versioning, and developer-friendly documentation out of the box.',
    icon: 'Layers',
    gradient: 'from-blue-500 to-cyan-600',
    badge: 'Platform',
    badgeColor: 'blue',
  },
  {
    id: 'dashboard-vedoryx',
    name: 'Vedoryx-Dashboard',
    tagline: 'Unified admin dashboard for operations and analytics.',
    description:
      'Real-time analytics, user management, product catalog control, and business intelligence — all in a single, customizable, role-based admin interface.',
    icon: 'BarChart3',
    gradient: 'from-orange-500 to-amber-600',
    badge: 'Analytics',
    badgeColor: 'orange',
  },
  {
    id: 'ecommerce-frontend',
    name: 'eCommerce Frontend',
    tagline: 'Ready-to-use storefronts for small businesses.',
    description:
      'Launch a professional online store within hours. Conversion-optimized templates, product catalogs, cart flows, and built-in payment gateway integrations.',
    icon: 'ShoppingCart',
    gradient: 'from-orange-500 to-amber-600',
    badge: 'eCommerce',
    badgeColor: 'orange',
  },
  {
    id: 'website-builder',
    name: 'Simple Website Builder',
    tagline: 'Lightweight sites for local organizations.',
    description:
      'Purpose-built templates for temples, non-profits, clinics, and local businesses. Launch a beautiful, fast-loading website without any coding knowledge.',
    icon: 'Globe',
    gradient: 'from-pink-500 to-rose-600',
    badge: 'No-Code',
    badgeColor: 'pink',
  },
  {
    id: 'rental-management',
    name: 'Rental Management System',
    tagline: 'Bookings, availability, and notifications — handled.',
    description:
      'Manage rentable products or properties with real-time availability calendars, automated confirmation notifications, and built-in reporting for your rental business.',
    icon: 'Calendar',
    gradient: 'from-teal-500 to-cyan-600',
    badge: 'Management',
    badgeColor: 'teal',
  },
  {
    id: 'portfolio-hosting',
    name: 'Portfolio Hosting Platform',
    tagline: 'Editable portfolios with real-time updates.',
    description:
      'Host and edit your professional portfolio in real time through a backend dashboard — no redeploys, no developers, no downtime. Always current, always impressive.',
    icon: 'Layout',
    gradient: 'from-indigo-500 to-blue-600',
    badge: 'Hosting',
    badgeColor: 'indigo',
  },
]

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    step: 1,
    title: 'Choose Your Solution',
    description:
      'Browse our suite and pick the product that fits your business needs — or contact us for a custom combination.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Quick Onboarding',
    description:
      'Our team configures, integrates, and tailors the platform to your workflows within days — not months.',
    icon: 'Settings',
  },
  {
    step: 3,
    title: 'Launch & Automate',
    description:
      'Go live and let SAMSBPM automation handle the repetitive work, so your team can focus on growth.',
    icon: 'Zap',
  },
  {
    step: 4,
    title: 'Scale With Confidence',
    description:
      'Monitor performance through your dashboard, gain insights from analytics, and scale as your business grows.',
    icon: 'TrendingUp',
  },
]

export const FEATURES: Feature[] = [
  {
    icon: 'Shield',
    title: 'Enterprise-Grade Security',
    description:
      'SOC2-ready infrastructure with end-to-end encryption and data residency options in Canada.',
  },
  {
    icon: 'Zap',
    title: 'Instant Automation',
    description:
      'Reduce manual operations by up to 80% from day one with our AI-powered workflow automation.',
  },
  {
    icon: 'MapPin',
    title: 'Canadian-Owned & Operated',
    description:
      'Proudly built in Canada. Your data stays in Canada. Privacy-first by design, PIPEDA-compliant.',
  },
  {
    icon: 'Headphones',
    title: 'Dedicated Support',
    description:
      'Dedicated account managers and a responsive support team ensure you\'re never left behind.',
  },
  {
    icon: 'RefreshCw',
    title: 'Always Up-to-Date',
    description:
      'Continuous deployment means you automatically receive new features and security patches.',
  },
  {
    icon: 'Puzzle',
    title: 'Seamless Integrations',
    description:
      'Connect to WhatsApp, Stripe, Shopify, Messenger, email providers, and 50+ other platforms.',
  },
]

export const INDUSTRIES: Industry[] = [
  {
    title: 'Retail & eCommerce',
    icon: 'ShoppingBag',
    description: 'Online stores, order management, and inventory automation',
    color: 'blue',
  },
  {
    title: 'Real Estate & Rental',
    icon: 'Home',
    description: 'Property listings, availability calendars, and tenant management',
    color: 'teal',
  },
  {
    title: 'Food & Produce',
    icon: 'Leaf',
    description: 'Grocery, fruit vendors, and delivery order automation',
    color: 'green',
  },
  {
    title: 'Temples & Non-Profits',
    icon: 'Heart',
    description: 'Community websites, event pages, and donation flows',
    color: 'rose',
  },
  {
    title: 'Health & Wellness',
    icon: 'Activity',
    description: 'Clinics, salons, and service appointment booking',
    color: 'amber',
  },
  {
    title: 'Freelancers & Creatives',
    icon: 'Palette',
    description: 'Portfolio hosting and real-time profile management',
    color: 'orange',
  },
]

export const COMPANY_INFO = {
  name: 'SAMSBPM Technologies Inc.',
  tagline: 'Built in Canada. Built for Growth.',
  address: 'Canada',
  email: 'contact@samsbpm.ca',
  phone: '+1 (xxx) xxx-xxxx',
  socials: {
    linkedin: 'https://linkedin.com/company/samsbpm',
    twitter:  'https://twitter.com/samsbpm',
    github:   'https://github.com/SAMSBPM-Technologies-Inc',
  },
}

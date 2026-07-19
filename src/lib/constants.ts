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
    features: [
      'WhatsApp, Messenger & Email order intake',
      'AI-powered message parsing',
      'Real-time order creation in your backend',
      'Inventory validation & stock checks',
      'Automated order confirmation notifications',
      'Daily summary reports & analytics',
    ],
    seoTitle: 'AutoOrderSync — WhatsApp & Messenger Order Automation Software Canada',
    seoDescription: 'AutoOrderSync by SAMSBPM automatically captures customer orders from WhatsApp, Messenger, and Email — validating, creating, and confirming them in your backend instantly. Built for Canadian small businesses.',
    keywords: ['WhatsApp order automation Canada', 'Messenger order management software', 'automated order processing Canada', 'AI order intake software', 'WhatsApp business order system', 'order automation for small business Canada'],
    longDescription: 'AutoOrderSync eliminates the manual work of processing customer orders received through messaging channels. Whether your customers place orders via WhatsApp, Facebook Messenger, or email, AutoOrderSync uses AI-powered message parsing to extract order details, validate inventory, create the order in your backend system, and send automated confirmation notifications — all in seconds. Canadian businesses in food, produce, retail, and wholesale use AutoOrderSync to reduce order processing time by up to 80% and eliminate costly errors.',
    targetAudience: 'Small and medium businesses in Canada that receive customer orders via WhatsApp, Messenger, or email — including food vendors, grocery stores, produce distributors, and retail businesses.',
    useCases: ['Mango and produce vendors receiving WhatsApp orders', 'Grocery stores managing email order lists', 'Wholesale distributors processing Messenger orders', 'Food businesses automating order confirmation workflows'],
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
    features: [
      'Multi-tenant architecture',
      'Intelligent rate limiting & versioning',
      'Auto-generated API documentation',
      'Webhook support & event streaming',
      'Role-based access control',
      '99.9% uptime SLA',
    ],
    seoTitle: 'Vedoryx-API — Multi-Tenant Backend API Platform for Canadian Businesses',
    seoDescription: 'Vedoryx-API is a scalable, multi-tenant API platform by SAMSBPM Technologies. Deploy enterprise-grade APIs with rate limiting, versioning, webhooks, and auto-generated documentation. Built for Canadian SaaS companies.',
    keywords: ['multi-tenant API platform Canada', 'backend API development Canada', 'SaaS API infrastructure', 'API management platform Canada', 'scalable API platform small business', 'Canadian API hosting'],
    longDescription: 'Vedoryx-API gives Canadian businesses and developers a production-ready API backbone without the infrastructure overhead. Supporting multi-tenant architectures, it lets multiple businesses share a single deployment while keeping data completely isolated. Intelligent rate limiting protects your API from abuse, automatic versioning ensures backwards compatibility, and auto-generated documentation keeps developers productive. Webhook support and event streaming make real-time integrations with third-party tools simple.',
    targetAudience: 'Canadian SaaS companies, development agencies, and businesses needing a scalable, multi-tenant backend API platform.',
    useCases: ['SaaS startups needing a multi-tenant API backbone', 'Agencies building client-facing API products', 'Businesses integrating WhatsApp, Stripe, and Shopify workflows', 'Enterprises requiring role-based access and 99.9% uptime'],
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
    features: [
      'Real-time analytics & live order tracking',
      'User & role management',
      'Product catalog control',
      'Custom reports & data exports',
      'White-label ready',
      'Mobile-responsive interface',
    ],
    seoTitle: 'Vedoryx-Dashboard — Business Analytics & Admin Dashboard Software Canada',
    seoDescription: 'Vedoryx-Dashboard by SAMSBPM is a unified, role-based admin dashboard for Canadian businesses. Monitor real-time orders, manage users, control product catalogs, and export custom reports — all from one interface.',
    keywords: ['business admin dashboard Canada', 'operations analytics software Canada', 'real-time order tracking dashboard', 'business intelligence dashboard small business', 'white-label admin dashboard Canada', 'SaaS admin panel Canada'],
    longDescription: 'Vedoryx-Dashboard gives business owners and operations teams a single pane of glass to run their entire operation. Track live orders as they come in, manage your team with granular role-based access, update your product catalog without developer help, and pull custom reports for any date range. Designed to be white-label ready, it can be branded for your business and accessed on any device. Whether you run a single store or manage multiple locations, Vedoryx-Dashboard scales with you.',
    targetAudience: 'Business owners, operations managers, and teams in Canada who need a centralized dashboard to manage orders, users, products, and analytics.',
    useCases: ['eCommerce businesses tracking live orders', 'Multi-location businesses managing central operations', 'Managers needing role-based team access controls', 'Business owners wanting daily and weekly performance reports'],
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
    features: [
      'Conversion-optimized templates',
      'Product catalog & shopping cart',
      'Payment gateway integrations',
      'Mobile-first, SEO-ready design',
      'Order confirmation emails',
      'Inventory management',
    ],
    seoTitle: 'eCommerce Frontend — Online Store Builder for Canadian Small Businesses',
    seoDescription: 'Launch a professional online store in hours with SAMSBPM\'s eCommerce Frontend. Conversion-optimized templates, shopping cart, Stripe & payment gateway integrations, and mobile-first SEO-ready design for Canadian small businesses.',
    keywords: ['eCommerce website builder Canada', 'online store for small business Canada', 'Canadian eCommerce solution', 'launch online store Canada', 'eCommerce templates Canada', 'small business online shop Canada', 'Stripe eCommerce Canada'],
    longDescription: 'SAMSBPM\'s eCommerce Frontend gets Canadian small businesses selling online fast. Choose from conversion-optimized templates designed for your industry, add your products with our intuitive catalog manager, and connect your preferred payment gateway — Stripe, PayPal, or others — in minutes. Every storefront is built mobile-first and SEO-ready so customers can find you on Google. Automated order confirmation emails keep customers informed, and built-in inventory management prevents overselling.',
    targetAudience: 'Canadian small and medium businesses looking to launch or upgrade their online store quickly without large development costs.',
    useCases: ['Local retailers launching their first online store', 'Food vendors selling products online', 'Small businesses migrating from Shopify to a custom storefront', 'Wholesale businesses building a B2B ordering portal'],
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
    features: [
      'No-code drag-and-drop editor',
      'Templates for temples, non-profits & clinics',
      'Event calendar support',
      'Donation & contact links',
      'Fast-loading static pages',
      'Custom domain support',
    ],
    seoTitle: 'Simple Website Builder — No-Code Websites for Temples, Clinics & Non-Profits Canada',
    seoDescription: 'SAMSBPM\'s Simple Website Builder creates beautiful, fast-loading websites for Canadian temples, non-profits, clinics, and local businesses — no coding required. Includes event calendars, donation links, and custom domain support.',
    keywords: ['website builder for temples Canada', 'non-profit website builder Canada', 'clinic website builder Canada', 'no-code website for local business Canada', 'simple website builder Canada', 'community organization website Canada', 'temple website design Canada'],
    longDescription: 'Not every organization needs a complex website — they just need a beautiful, fast, and easy-to-update one. SAMSBPM\'s Simple Website Builder is purpose-built for Canadian temples, non-profit organizations, medical clinics, and local community businesses. Choose from professionally designed templates for your type of organization, add your events calendar, set up donation or contact links, and go live on your custom domain — all without writing a single line of code. Pages load fast on any device and are optimized for local search.',
    targetAudience: 'Canadian temples, non-profit organizations, medical clinics, community groups, and local businesses that need a simple, professional web presence without technical complexity.',
    useCases: ['Hindu and Sikh temples publishing event schedules and donation links', 'Non-profits sharing their mission and accepting online donations', 'Clinics publishing hours, services, and appointment contact info', 'Local businesses establishing a professional web presence'],
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
    features: [
      'Real-time availability calendar',
      'Automated booking confirmations',
      'Double-booking prevention',
      'SMS & Email notifications',
      'Revenue reports',
      'Customer booking history',
    ],
    seoTitle: 'Rental Management System — Booking & Availability Software for Canadian Rental Businesses',
    seoDescription: 'SAMSBPM\'s Rental Management System helps Canadian rental businesses manage bookings, availability calendars, automated confirmations, and revenue reports. Prevent double-bookings with real-time availability tracking.',
    keywords: ['rental management software Canada', 'property booking system Canada', 'rental availability calendar software', 'booking management software Canada', 'equipment rental software Canada', 'rental business software Canada', 'automated booking confirmations Canada'],
    longDescription: 'Running a rental business without the right tools means constant double-booking risks, missed confirmations, and hours spent on manual tracking. SAMSBPM\'s Rental Management System gives Canadian rental businesses a real-time availability calendar that updates instantly when bookings are made, preventing double-bookings entirely. Automated SMS and email notifications keep customers informed at every step. Revenue reports help you understand your most profitable periods, and a complete customer booking history makes managing repeat clients easy.',
    targetAudience: 'Canadian rental businesses including equipment rentals, property rentals, vehicle rentals, party supply rentals, and any business managing bookable inventory.',
    useCases: ['Equipment rental companies managing availability across multiple items', 'Property managers handling short and long-term bookings', 'Party supply businesses tracking availability and deliveries', 'Vehicle rental companies preventing double-bookings'],
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
    features: [
      'Real-time portfolio editing via dashboard',
      'Project showcase grid',
      'Skills & experience sections',
      'Custom domain support',
      'No redeploy needed for updates',
      'Built-in analytics',
    ],
    seoTitle: 'Portfolio Hosting Platform — Real-Time Editable Portfolios for Professionals Canada',
    seoDescription: 'Host and update your professional portfolio in real time with SAMSBPM\'s Portfolio Hosting Platform. Edit projects, skills, and experience through a dashboard — no developers or redeploys needed. Custom domain support included.',
    keywords: ['portfolio hosting Canada', 'professional portfolio website Canada', 'editable portfolio platform', 'portfolio builder for freelancers Canada', 'real-time portfolio editor', 'portfolio website for developers Canada', 'portfolio hosting with custom domain Canada'],
    longDescription: 'Your portfolio should evolve as fast as your career does. SAMSBPM\'s Portfolio Hosting Platform lets Canadian freelancers, developers, designers, and creatives host a professional portfolio that they can update instantly through a backend dashboard — no code, no redeploys, no downtime. Add new projects, update your skills and experience, or change your bio and have it live within seconds. Built-in analytics show you who\'s visiting and which projects get the most attention. Connect your custom domain and present a professional image to every client.',
    targetAudience: 'Canadian freelancers, developers, designers, photographers, and creative professionals who want a professional portfolio they can update without technical knowledge.',
    useCases: ['Freelance developers showcasing project work to clients', 'Designers building a visual portfolio with project grids', 'Photographers displaying galleries with live updates', 'Job seekers maintaining an always-current professional profile'],
  },
  {
    id: 'billbridge',
    name: 'BillBridge',
    tagline: 'Professional invoicing for consulting firms — multi-tenant & automated.',
    description:
      'BillBridge is a multi-tenant invoice management SaaS built for consulting businesses. Create, send, and track professional invoices with automated tenant provisioning, Stripe payment tracking, and role-based access — all at billbridge.ca.',
    icon: 'Receipt',
    gradient: 'from-violet-500 to-purple-600',
    badge: 'Invoicing',
    badgeColor: 'violet',
    features: [
      'Multi-tenant architecture with isolated firm data',
      'Professional invoice creation & delivery',
      'Stripe payment integration & billing records',
      'Role-based access control (admin / staff)',
      'Automated tenant provisioning via Platform API',
      'Real-time dashboard & financial reporting',
    ],
    seoTitle: 'BillBridge — Invoice Management Software for Canadian Consulting Firms',
    seoDescription: 'BillBridge by SAMSBPM is a multi-tenant invoicing SaaS for Canadian consulting businesses. Create, send, and track professional invoices with Stripe payments, role-based access, and real-time financial reporting at billbridge.ca.',
    keywords: ['invoice management software Canada', 'invoicing software for consulting firms Canada', 'multi-tenant invoicing SaaS', 'billing software for consultants Canada', 'professional invoice software Canada', 'Stripe invoicing Canada', 'invoice tracking software Canada'],
    longDescription: 'BillBridge brings enterprise-grade invoice management to Canadian consulting firms of all sizes. Built on a secure multi-tenant architecture, each consulting firm gets completely isolated data and their own branded invoicing environment. Create professional invoices in seconds, deliver them to clients by email, and track payment status in real time. Stripe integration handles online payments seamlessly, and full billing records give you everything you need for accounting. Role-based access lets principals manage everything while staff handle day-to-day billing. Live at billbridge.ca.',
    targetAudience: 'Canadian consulting firms, agencies, freelance consultants, and professional services businesses that need a streamlined, professional invoicing and billing system.',
    useCases: ['IT consulting firms billing multiple clients monthly', 'Marketing agencies tracking invoices and payments', 'Independent consultants sending professional invoices', 'Professional services firms managing multi-staff billing workflows'],
    productUrl: 'https://billbridge.ca',
  },
  {
    id: 'custom-ai',
    name: 'Custom AI Solutions',
    tagline: 'Bespoke AI built around your business — from idea to production.',
    description:
      'SAMSBPM designs and builds custom AI solutions tailored to your specific business challenges — intelligent automation, AI-powered workflows, LLM integrations, data pipelines, and more. No off-the-shelf limitations.',
    icon: 'Sparkles',
    gradient: 'from-rose-500 to-orange-500',
    badge: 'Custom',
    badgeColor: 'rose',
    features: [
      'AI workflow automation & process intelligence',
      'LLM integration (OpenAI, Claude, custom models)',
      'Custom chatbots & AI-powered customer support',
      'Data pipelines & AI-ready infrastructure',
      'Document parsing & intelligent data extraction',
      'End-to-end build: discovery, design, deployment',
    ],
    seoTitle: 'Custom AI Solutions Canada — AI Software Development for Businesses | SAMSBPM',
    seoDescription: 'SAMSBPM Technologies builds custom AI solutions for Canadian businesses — AI workflow automation, LLM integrations, intelligent chatbots, document parsing, and data pipelines. From idea to production.',
    keywords: ['custom AI solutions Canada', 'AI software development Canada', 'business AI automation Canada', 'LLM integration Canada', 'AI chatbot development Canada', 'custom AI for small business Canada', 'AI workflow automation Canada', 'artificial intelligence solutions Canada'],
    longDescription: 'Off-the-shelf AI tools solve generic problems. SAMSBPM builds AI solutions designed specifically for your business — your data, your workflows, your outcomes. Whether you need to automate a complex internal process with AI, integrate a large language model into your product, build an intelligent customer-facing chatbot, or create a data pipeline that feeds your AI systems, our team takes you from discovery through to production deployment. We work with Canadian businesses of all sizes to identify where AI can create the most value and then build it — reliably, securely, and in compliance with Canadian data regulations.',
    targetAudience: 'Canadian businesses of all sizes looking to leverage AI to automate operations, enhance customer experiences, extract insights from data, or build AI-powered products.',
    useCases: [
      'Automating invoice and document processing with AI extraction',
      'Building a custom AI chatbot for customer support or internal Q&A',
      'Integrating GPT or Claude into an existing business product',
      'Creating AI-powered order triage and routing workflows',
      'Building data pipelines that feed business intelligence AI models',
    ],
  },
  {
    id: 'servstack',
    name: 'ServStack',
    tagline: 'Subscription plans for recurring-service businesses.',
    description:
      'ServStack is a multi-vendor SaaS platform for recurring-service businesses — meal delivery, cleaning, lawn care, and more. Sell fixed or fully configurable subscription plans directly to customers, with Stripe checkout and an analytics dashboard at servstack.ca.',
    icon: 'Repeat',
    gradient: 'from-cyan-500 to-sky-600',
    badge: 'Subscriptions',
    badgeColor: 'cyan',
    features: [
      'Fixed & configurable subscription plan builder',
      'Multi-vendor / multi-tenant architecture',
      'Stripe Checkout for subscription payments',
      'Customer self-serve portal per vendor',
      'Pause, cancel & skip subscription controls',
      'Revenue reports & subscription analytics',
    ],
    seoTitle: 'ServStack — Subscription Management Platform for Recurring Service Businesses Canada',
    seoDescription: 'ServStack by SAMSBPM is a multi-vendor subscription management platform for Canadian recurring-service businesses. Sell meal delivery, cleaning, lawn care, and other subscription plans with Stripe payments and customer portals at servstack.ca.',
    keywords: ['subscription management software Canada', 'recurring service business software Canada', 'meal delivery subscription platform Canada', 'cleaning service subscription software', 'subscription billing platform Canada', 'service subscription SaaS Canada', 'recurring revenue platform Canada'],
    longDescription: 'ServStack is built for Canadian businesses that sell services on a recurring basis — meal delivery companies, cleaning services, lawn care providers, and more. Create flexible subscription plans that customers can browse and subscribe to through a self-serve portal branded to your business. Offer fixed bundle tiers or fully configurable plans where customers pick exactly what they need. Stripe Checkout handles all payments securely, and customers can pause, cancel, or modify their subscriptions on their own. Revenue reports and subscription analytics give you full visibility into churn, growth, and performance. Live at servstack.ca.',
    targetAudience: 'Canadian businesses that sell recurring services including meal delivery, cleaning companies, lawn care, personal training, tutoring, and any service sold on a subscription basis.',
    useCases: ['Meal delivery companies selling weekly meal plan subscriptions', 'Cleaning services offering recurring home cleaning packages', 'Lawn care businesses managing seasonal subscription customers', 'Personal trainers and fitness coaches selling monthly program subscriptions'],
    productUrl: 'https://servstack.ca',
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

export const FAQS = [
  {
    question: 'What does SAMSBPM Technologies do?',
    answer: 'SAMSBPM Technologies Inc. is a Canadian SaaS company that builds automation tools, API platforms, invoicing software, subscription management systems, eCommerce storefronts, and digital solutions for small and medium businesses across Canada.',
  },
  {
    question: 'Can AutoOrderSync receive orders from WhatsApp?',
    answer: 'Yes. AutoOrderSync automatically captures customer orders sent via WhatsApp, Facebook Messenger, or Email — parsing the message with AI, validating inventory, creating the order in your system, and sending a confirmation to the customer, all in seconds.',
  },
  {
    question: 'What is BillBridge and who is it for?',
    answer: 'BillBridge is a multi-tenant invoice management SaaS for Canadian consulting firms and professional services businesses. It lets you create, send, and track professional invoices with Stripe payment integration and role-based access for your team. Available at billbridge.ca.',
  },
  {
    question: 'What is ServStack and how does it work?',
    answer: 'ServStack is a subscription management platform for recurring-service businesses such as meal delivery, cleaning services, and lawn care. Businesses create subscription plans, customers subscribe through a self-serve portal, and Stripe handles all billing. Available at servstack.ca.',
  },
  {
    question: 'Is SAMSBPM software PIPEDA-compliant?',
    answer: 'Yes. All SAMSBPM products are built and hosted in Canada, designed to comply with PIPEDA (Canada\'s Personal Information Protection and Electronic Documents Act). Your data stays in Canada.',
  },
  {
    question: 'How quickly can my business get started with a SAMSBPM product?',
    answer: 'Most businesses are up and running within days, not months. Our team handles configuration, integration, and onboarding tailored to your workflows. Contact us for a free 30-minute discovery call.',
  },
  {
    question: 'Do you build custom AI solutions for businesses?',
    answer: 'Yes. Custom AI development is a core SAMSBPM service. We build AI workflow automation, LLM integrations (OpenAI, Claude, and others), intelligent chatbots, document parsing systems, and data pipelines — all tailored to your specific business needs and compliant with Canadian data regulations.',
  },
  {
    question: 'What kinds of custom AI solutions does SAMSBPM build?',
    answer: 'We build: AI-powered workflow automation, custom chatbots for customer support or internal Q&A, LLM integrations into existing products, intelligent document and invoice parsing, data pipelines for AI-ready infrastructure, and end-to-end AI product development from discovery to production.',
  },
  {
    question: 'Can SAMSBPM integrate AI into my existing business software?',
    answer: 'Yes. We specialize in integrating AI capabilities — including OpenAI GPT and Anthropic Claude — into existing business systems, websites, and internal tools. Whether it\'s adding a smart search, an AI assistant, or automated document processing, we handle the integration end-to-end.',
  },
  {
    question: 'Do you offer custom software solutions?',
    answer: 'Yes. In addition to our off-the-shelf products, SAMSBPM builds fully custom digital and AI solutions. Contact us at contact@samsbpm.com to discuss your specific requirements.',
  },
  {
    question: 'Which industries does SAMSBPM serve?',
    answer: 'SAMSBPM serves retail & eCommerce, food & produce, real estate & rental, temples & non-profits, health & wellness, consulting & professional services, and freelancers & creatives across Canada.',
  },
]

export const COMPANY_INFO = {
  name: 'SAMSBPM Technologies Inc.',
  tagline: 'Built in Canada. Built for Growth.',
  address: 'Canada',
  email: 'contact@samsbpm.com',
  phone: '+1 (xxx) xxx-xxxx',
  socials: {
    linkedin: 'https://linkedin.com/company/samsbpm',
    twitter:  'https://twitter.com/samsbpm',
    github:   'https://github.com/SAMSBPM-Technologies-Inc',
  },
}

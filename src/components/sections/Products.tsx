'use client'
import { motion } from 'framer-motion'
import {
  MessageSquare, Layers, BarChart3, ShoppingCart,
  Globe, Calendar, Layout, ArrowRight,
  LucideIcon,
} from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { PRODUCTS } from '@/lib/constants'
import type { Product } from '@/lib/types'
import { cn } from '@/lib/cn'

// Map string icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Layers,
  BarChart3,
  ShoppingCart,
  Globe,
  Calendar,
  Layout,
}

type BadgeColor = React.ComponentProps<typeof Badge>['color']

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = iconMap[product.icon] ?? Layers

  return (
    <AnimateInView delay={index * 0.07}>
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className={cn(
          'group relative h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]',
          'p-6 flex flex-col cursor-pointer overflow-hidden',
          'transition-colors duration-300'
        )}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Top row: icon + badge */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={cn(
                'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center',
                product.gradient,
                'shadow-brand-sm'
              )}
            >
              <Icon size={22} className="text-white" />
            </div>
            <Badge color={product.badgeColor as BadgeColor}>{product.badge}</Badge>
          </div>

          {/* Name + tagline */}
          <h3 className="font-display font-bold text-lg text-[var(--foreground)] mb-1 leading-snug">
            {product.name}
          </h3>
          <p className="text-brand-500 dark:text-brand-400 text-sm font-medium mb-3">
            {product.tagline}
          </p>

          {/* Description */}
          <p className="text-[var(--muted-foreground)] text-sm leading-relaxed flex-1 mb-6">
            {product.description}
          </p>

          {/* Learn More */}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 transition-colors group/btn w-fit"
          >
            Learn More
            <ArrowRight
              size={14}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </motion.div>
    </AnimateInView>
  )
}

export default function Products() {
  return (
    <section id="products" className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <AnimateInView className="mb-14 text-center">
          <SectionHeading
            eyebrow="Our Suite"
            title="7 Products. One Platform."
            subtitle="Purpose-built tools designed to work independently or together — giving your business exactly the capabilities it needs."
            align="center"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                // Center the 7th card on large screens
                index === 6 && 'sm:col-span-2 lg:col-span-1 lg:col-start-2'
              )}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateInView className="mt-12 text-center" delay={0.3}>
          <p className="text-[var(--muted-foreground)] text-sm">
            Need something custom?{' '}
            <a
              href="#contact"
              className="text-brand-500 hover:text-brand-600 font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let&apos;s talk →
            </a>
          </p>
        </AnimateInView>
      </div>
    </section>
  )
}

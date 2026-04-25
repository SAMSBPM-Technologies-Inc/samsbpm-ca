'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare, Layers, BarChart3, ShoppingCart,
  Globe, Calendar, Layout, ArrowRight, X,
  LucideIcon,
} from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PRODUCTS } from '@/lib/constants'
import type { Product } from '@/lib/types'
import { cn } from '@/lib/cn'

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

function ProductModal({ product, onClose, onContact }: {
  product: Product
  onClose: () => void
  onContact: () => void
}) {
  const Icon = iconMap[product.icon] ?? Layers

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="w-full max-w-lg bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0',
                product.gradient, 'shadow-brand-sm'
              )}>
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-display font-bold text-lg text-[var(--foreground)] leading-tight">
                    {product.name}
                  </h3>
                  <Badge color={product.badgeColor as BadgeColor}>{product.badge}</Badge>
                </div>
                <p className="text-sm text-brand-500 font-medium">{product.tagline}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors flex-shrink-0 ml-2"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 pb-6 space-y-5">
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                Key Features
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="sm"
                className="flex-1 gap-1.5"
                onClick={() => { onClose(); onContact() }}
              >
                Contact us about {product.name}
                <ArrowRight size={14} />
              </Button>
              <Button variant="secondary" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProductCard({ product, index, onClick }: { product: Product; index: number; onClick: () => void }) {
  const Icon = iconMap[product.icon] ?? Layers

  return (
    <AnimateInView delay={index * 0.07}>
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        onClick={onClick}
        className={cn(
          'group relative h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]',
          'p-6 flex flex-col cursor-pointer overflow-hidden',
          'transition-colors duration-300'
        )}
      >
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className={cn(
              'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center',
              product.gradient, 'shadow-brand-sm'
            )}>
              <Icon size={22} className="text-white" />
            </div>
            <Badge color={product.badgeColor as BadgeColor}>{product.badge}</Badge>
          </div>

          <h3 className="font-display font-bold text-lg text-[var(--foreground)] mb-1 leading-snug">
            {product.name}
          </h3>
          <p className="text-brand-500 dark:text-brand-400 text-sm font-medium mb-3">
            {product.tagline}
          </p>

          <p className="text-[var(--muted-foreground)] text-sm leading-relaxed flex-1 mb-6">
            {product.description}
          </p>

          <button className="flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 transition-colors group/btn w-fit">
            Learn More
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </AnimateInView>
  )
}

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
  }

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
              className={cn(index === 6 && 'sm:col-span-2 lg:col-span-1 lg:col-start-2')}
            >
              <ProductCard
                product={product}
                index={index}
                onClick={() => setActiveProduct(product)}
              />
            </div>
          ))}
        </div>

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

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onContact={() => handleContact()}
        />
      )}
    </section>
  )
}

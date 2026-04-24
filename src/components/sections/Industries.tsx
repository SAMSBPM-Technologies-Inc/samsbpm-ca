'use client'
import { motion } from 'framer-motion'
import {
  ShoppingBag, Home, Leaf, Heart, Activity, Palette, LucideIcon
} from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { INDUSTRIES } from '@/lib/constants'
import { cn } from '@/lib/cn'

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Home,
  Leaf,
  Heart,
  Activity,
  Palette,
}

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue:   { bg: 'hover:bg-blue-500/8',   icon: 'text-blue-500',   border: 'hover:border-blue-500/30'   },
  teal:   { bg: 'hover:bg-teal-500/8',   icon: 'text-teal-500',   border: 'hover:border-teal-500/30'   },
  green:  { bg: 'hover:bg-green-500/8',  icon: 'text-green-500',  border: 'hover:border-green-500/30'  },
  rose:   { bg: 'hover:bg-rose-500/8',   icon: 'text-rose-500',   border: 'hover:border-rose-500/30'   },
  amber:  { bg: 'hover:bg-amber-500/8',  icon: 'text-amber-500',  border: 'hover:border-amber-500/30'  },
  orange: { bg: 'hover:bg-orange-500/8', icon: 'text-orange-500', border: 'hover:border-orange-500/30' },
}

export default function Industries() {
  return (
    <section id="industries" className="section-padding">
      <div className="container-max">
        <AnimateInView className="mb-14 text-center">
          <SectionHeading
            eyebrow="Use Cases"
            title="Serving businesses across every sector"
            subtitle="From mango vendors to non-profits, our products adapt to the unique needs of your industry."
            align="center"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? ShoppingBag
            const colors = colorClasses[industry.color] ?? colorClasses.blue

            return (
              <AnimateInView key={industry.title} delay={index * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className={cn(
                    'rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6',
                    'transition-colors duration-200 cursor-default',
                    colors.bg,
                    colors.border
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center flex-shrink-0',
                        colors.icon
                      )}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[var(--foreground)] mb-1">
                        {industry.title}
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimateInView>
            )
          })}
        </div>

        {/* Real examples */}
        <AnimateInView delay={0.35} className="mt-12">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <h3 className="font-display font-semibold text-[var(--foreground)] mb-4 text-center">
              Real projects we&apos;ve built
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { emoji: '🥭', label: 'Amrit Mangoes Inc.',    desc: 'Grocery eCommerce + Order Automation' },
                { emoji: '🛕', label: 'Sai Temple',             desc: 'Community Website Builder' },
                { emoji: '🔌', label: 'Vedoryx-API',            desc: 'Multi-business API Platform' },
                { emoji: '📊', label: 'AOS Dashboard',          desc: 'Admin & Operations Dashboard' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--muted)] min-w-[200px] flex-1"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm text-[var(--foreground)]">{item.label}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}

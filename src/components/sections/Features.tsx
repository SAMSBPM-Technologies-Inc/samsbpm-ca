import {
  Shield, Zap, MapPin, Headphones, RefreshCw, Puzzle, LucideIcon
} from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GradientText } from '@/components/ui/GradientText'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Zap,
  MapPin,
  Headphones,
  RefreshCw,
  Puzzle,
}

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <AnimateInView className="mb-14 text-center">
          <SectionHeading
            eyebrow="Why SAMSBPM"
            title={
              <>
                Built for the way{' '}
                <GradientText>modern businesses</GradientText> operate
              </>
            }
            subtitle="We combine Canadian reliability with cutting-edge technology to deliver solutions that actually work for your business."
            align="center"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Shield

            return (
              <AnimateInView key={feature.title} delay={index * 0.08}>
                <div className="group flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 transition-colors group-hover:bg-brand-500/20">
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display font-bold text-[var(--foreground)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateInView>
            )
          })}
        </div>

        {/* Trust bar */}
        <AnimateInView delay={0.4} className="mt-16">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
              {[
                { label: 'Uptime SLA',              value: '99.9%' },
                { label: 'Faster order processing', value: '80%'   },
                { label: 'Setup time',              value: '< 48h' },
                { label: 'Dedicated support',       value: '24/7'  },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--foreground)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] font-medium uppercase tracking-wide">
                    {stat.label}
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

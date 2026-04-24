import { Search, Settings, Zap, TrendingUp, LucideIcon } from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Settings,
  Zap,
  TrendingUp,
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-max">
        <AnimateInView className="mb-14 text-center">
          <SectionHeading
            eyebrow="Process"
            title="From Zero to Automated in 4 Steps"
            subtitle="Getting started with SAMSBPM is fast. Here's how we take you from discovery to a fully running system."
            align="center"
          />
        </AnimateInView>

        {/* Steps: horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px border-t-2 border-dashed border-brand-500/25"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] ?? Zap
              const stepNum = String(step.step).padStart(2, '0')

              return (
                <AnimateInView key={step.step} delay={index * 0.1}>
                  <div className="relative flex flex-col items-center text-center lg:items-center">
                    {/* Step number circle */}
                    <div className="relative mb-6">
                      {/* Background ring */}
                      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center relative z-10">
                        <Icon size={24} className="text-brand-500" />
                      </div>
                      {/* Step number badge */}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-brand text-white text-xs font-bold flex items-center justify-center shadow-brand-sm z-20">
                        {step.step}
                      </span>
                    </div>

                    {/* Large step label */}
                    <div className="font-display text-5xl font-bold text-[var(--border)] mb-3 select-none leading-none">
                      {stepNum}
                    </div>

                    <h3 className="font-display font-bold text-lg text-[var(--foreground)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </AnimateInView>
              )
            })}
          </div>
        </div>

        {/* Flow diagram — visual summary */}
        <AnimateInView delay={0.4} className="mt-16">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 overflow-x-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-max mx-auto flex-wrap sm:flex-nowrap">
              {[
                { icon: '💬', label: 'Customer Interacts',  sub: 'WhatsApp / Web / Email' },
                { icon: '⚡', label: 'System Processes',    sub: 'AutoOrderSync / APIs' },
                { icon: '📊', label: 'Business Manages',    sub: 'Vedoryx-Dashboard' },
                { icon: '📈', label: 'Insights Generated',  sub: 'Reports & Analytics' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[var(--muted)] min-w-[120px]">
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <span className="font-semibold text-xs text-[var(--foreground)]">{item.label}</span>
                    <span className="text-[10px] text-[var(--muted-foreground)] mt-0.5">{item.sub}</span>
                  </div>
                  {i < 3 && (
                    <span className="text-[var(--muted-foreground)] text-lg flex-shrink-0">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}

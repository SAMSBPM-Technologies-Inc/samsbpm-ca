import { CheckCircle2 } from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GradientText } from '@/components/ui/GradientText'

const highlights = [
  'Automation-first engineering approach',
  'Canadian data sovereignty & PIPEDA-compliant',
  'Scalable from day 1 to 1 million users',
  'Serving retail, non-profits, and enterprises',
]

export default function AboutUs() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <AnimateInView direction="left">
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  Built in Canada,{' '}
                  <GradientText>Built for the World</GradientText>
                </>
              }
              subtitle="SAMSBPM Technologies Inc. is a proudly Canadian technology company on a mission to democratize enterprise-grade software for small and medium businesses."
            />

            <div className="mt-6 space-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--muted-foreground)] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[var(--muted-foreground)] leading-relaxed">
              We believe every business — from a local mango vendor to a national rental chain —
              deserves access to intelligent automation and beautiful digital experiences.
              Our products are purpose-built, affordable, and ready to grow with you.
            </p>
          </AnimateInView>

          {/* Visual column */}
          <AnimateInView direction="right" delay={0.15}>
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl bg-gradient-brand p-px shadow-brand-lg">
                <div className="rounded-3xl bg-[var(--card)] p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '⚡', label: 'AutoOrderSync',     desc: 'WhatsApp → Orders',         color: 'emerald' },
                      { icon: '🔌', label: 'Vedoryx-API',       desc: 'Scalable APIs',             color: 'blue'    },
                      { icon: '📊', label: 'Dashboard',         desc: 'Analytics & Admin',         color: 'amber'   },
                      { icon: '🛍️', label: 'eCommerce',         desc: 'Store Templates',           color: 'orange'  },
                      { icon: '🏠', label: 'Rental RMS',        desc: 'Availability & Bookings',   color: 'teal'    },
                      { icon: '💼', label: 'Portfolio Platform', desc: 'Real-time Portfolios',     color: 'indigo'  },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-[var(--muted)] p-4 flex flex-col gap-1"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-semibold text-sm text-[var(--foreground)]">
                          {item.label}
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-[var(--foreground)]">
                    7 Products Active
                  </span>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -left-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-card">
                <span className="text-sm font-medium text-[var(--foreground)]">
                  🇨🇦 Made in Canada
                </span>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

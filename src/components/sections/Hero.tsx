'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/constants'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
})

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col">

      {/* ── Editorial top bar ───────────────────────── */}
      <div className="rule mt-[72px]" />
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fade(0.05)}
          className="flex items-center justify-between py-3 border-b border-[var(--border)]"
        >
          <span className="label-mono text-[var(--muted-foreground)]">
            SAMSBPM Technologies Inc.
          </span>
          <span className="label-mono text-[var(--muted-foreground)] hidden sm:block">
            🇨🇦 Canada · Software & AI
          </span>
        </motion.div>
      </div>

      {/* ── Main hero grid ──────────────────────────── */}
      <div className="flex-1 flex items-center">
        <div className="container-max w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center">

            {/* ── Left: Headline ──── */}
            <div>
              <motion.p {...fade(0.1)} className="label-mono text-brand-500 mb-6">
                Built in Canada — Built for Growth
              </motion.p>

              <motion.h1 {...fade(0.18)} className="display-2xl text-[var(--foreground)] mb-8">
                Software<br />
                that moves<br />
                <span className="text-brand-500">your business.</span>
              </motion.h1>

              <motion.p {...fade(0.26)} className="text-lg text-[var(--muted-foreground)] max-w-lg leading-relaxed mb-10">
                Automation tools, AI solutions, API platforms, and complete digital
                ecosystems — purpose-built for Canadian businesses of every size.
              </motion.p>

              <motion.div {...fade(0.32)} className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollTo('#products')}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-semibold text-sm hover:bg-brand-500 transition-colors"
                >
                  Explore Products
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm hover:border-brand-500 hover:text-brand-500 transition-colors"
                >
                  Request a Demo
                </button>
              </motion.div>

              {/* ── Stats ── */}
              <motion.div {...fade(0.4)} className="flex gap-8 mt-12 pt-10 border-t border-[var(--border)]">
                {[
                  { value: '9+',   label: 'Products & services' },
                  { value: '100%', label: 'Canadian-owned'       },
                  { value: '∞',    label: 'Scalable'             },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-black text-[var(--foreground)]">{s.value}</div>
                    <div className="label-mono text-[var(--muted-foreground)] mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Product roster panel ── */}
            <motion.div {...fade(0.22)}>
              <div className="card-flat p-0 overflow-hidden">
                {/* Panel header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--muted)]">
                  <span className="label-mono text-[var(--muted-foreground)]">Our Products</span>
                  <span className="label-mono text-brand-500">{PRODUCTS.length} active</span>
                </div>

                {/* Product list */}
                <ul className="divide-y divide-[var(--border)]">
                  {PRODUCTS.slice(0, 8).map((p, i) => (
                    <li key={p.id}>
                      <button
                        onClick={() => scrollTo('#products')}
                        className="w-full flex items-center justify-between px-5 py-3 text-left group hover:bg-[var(--muted)] transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="label-mono text-[var(--muted-foreground)] w-5 text-right">{String(i + 1).padStart(2, '0')}</span>
                          <span className="text-sm font-medium text-[var(--foreground)]">{p.name}</span>
                        </span>
                        <ArrowDownRight size={13} className="text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                  {PRODUCTS.length > 8 && (
                    <li>
                      <button
                        onClick={() => scrollTo('#products')}
                        className="w-full px-5 py-3 text-left text-sm text-brand-500 font-medium hover:bg-[var(--muted)] transition-colors"
                      >
                        + {PRODUCTS.length - 8} more →
                      </button>
                    </li>
                  )}
                </ul>

                {/* Panel footer */}
                <div className="px-5 py-3.5 border-t border-[var(--border)] bg-[var(--muted)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="label-mono text-[var(--muted-foreground)]">All systems operational</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Bottom rule ──────────────────────────────── */}
      <div className="rule" />

    </section>
  )
}

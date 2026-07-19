import Link from 'next/link'
import { Sparkles, ArrowRight, BrainCircuit, Bot, FileSearch, Workflow } from 'lucide-react'
import { AnimateInView } from '@/components/ui/AnimateInView'

const capabilities = [
  { icon: BrainCircuit, label: 'LLM Integration',       desc: 'OpenAI, Claude & custom models wired into your product'  },
  { icon: Bot,          label: 'AI Chatbots',            desc: 'Intelligent support bots and internal knowledge assistants' },
  { icon: FileSearch,   label: 'Document Intelligence',  desc: 'AI-powered parsing of invoices, forms, and contracts'     },
  { icon: Workflow,     label: 'AI Workflow Automation', desc: 'Replace manual processes with intelligent automation'      },
]

export default function CustomAI() {
  return (
    <section id="custom-ai" className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <AnimateInView>
          <div className="rounded-3xl bg-gradient-to-br from-[#0f0f13] to-[#1a0a00] border border-brand-500/20 overflow-hidden">
            <div className="p-8 sm:p-12 lg:p-16">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Custom AI Solutions
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: text */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                    Need AI built around{' '}
                    <span className="text-brand-400">your business?</span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Off-the-shelf AI tools solve generic problems. SAMSBPM designs and builds
                    custom AI solutions tailored to your specific workflows, data, and goals —
                    from discovery and design through to production deployment in Canada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/services/custom-ai"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
                    >
                      Explore Custom AI
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                    >
                      Talk to Us
                    </Link>
                  </div>
                </div>

                {/* Right: capability grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center mb-3">
                        <Icon size={20} className="text-brand-400" />
                      </div>
                      <p className="font-semibold text-white text-sm mb-1">{label}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}

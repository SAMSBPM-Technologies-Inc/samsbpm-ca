'use client'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24"
      >
        {/* Canadian badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium">
            🇨🇦 Proudly Canadian — Built for Growth
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[var(--foreground)] mb-6 text-balance"
        >
          Empowering Small Businesses with{' '}
          <GradientText>Smart Digital Solutions</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SAMSBPM Technologies builds automation tools, API platforms, and complete digital
          ecosystems — helping Canadian businesses of every size compete and scale in the modern era.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('#products')}
            className="group gap-2"
          >
            Explore Products
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollTo('#contact')}
            className="gap-2"
          >
            <Play size={16} />
            Request a Demo
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: '7+',   label: 'Products & Solutions'  },
            { value: '100%', label: 'Canadian-owned'         },
            { value: '∞',    label: 'Scalable Architecture' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-[var(--foreground)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => scrollTo('#about')}
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2 text-[var(--muted-foreground)] hover:text-brand-500 transition-colors animate-bounce"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

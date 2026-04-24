'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface AnimateInViewProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function AnimateInView({
  children,
  delay = 0,
  className,
  direction = 'up',
}: AnimateInViewProps) {
  const directionOffset = {
    up:    { y: 24,  x: 0   },
    down:  { y: -24, x: 0   },
    left:  { y: 0,   x: 24  },
    right: { y: 0,   x: -24 },
    none:  { y: 0,   x: 0   },
  }

  const { x, y } = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

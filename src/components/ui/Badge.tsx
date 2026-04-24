import { cn } from '@/lib/cn'

interface BadgeProps {
  children: React.ReactNode
  color?: 'blue' | 'emerald' | 'orange' | 'amber' | 'pink' | 'teal' | 'indigo' | 'rose' | 'green' | 'default'
  className?: string
}

const colorClasses = {
  blue:    'bg-blue-500/10    text-blue-500    dark:text-blue-400',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  orange:  'bg-orange-500/10  text-orange-600  dark:text-orange-400',
  amber:   'bg-amber-500/10   text-amber-600   dark:text-amber-400',
  pink:    'bg-pink-500/10    text-pink-600    dark:text-pink-400',
  teal:    'bg-teal-500/10    text-teal-600    dark:text-teal-400',
  indigo:  'bg-indigo-500/10  text-indigo-600  dark:text-indigo-400',
  rose:    'bg-rose-500/10    text-rose-600    dark:text-rose-400',
  green:   'bg-green-500/10   text-green-600   dark:text-green-400',
  default: 'bg-brand-500/10   text-brand-500   dark:text-brand-400',
}

export function Badge({ children, color = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  )
}

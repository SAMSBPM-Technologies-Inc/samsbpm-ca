import { cn } from '@/lib/cn'
import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  gradient?: boolean
}

export function Card({ hover, gradient, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[var(--border)] bg-[var(--card)]',
        'transition-all duration-300',
        hover && 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer',
        gradient && 'bg-gradient-card',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

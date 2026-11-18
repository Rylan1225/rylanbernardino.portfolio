import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

/** Surface with the accent left-border hover used by projects and certifications. */
export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`relative rounded-lg border border-l-[3px] border-line bg-surface p-6 shadow-card transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-l-accent hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      {children}
    </div>
  )
}

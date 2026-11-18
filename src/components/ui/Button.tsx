import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost'

const variants: Record<Variant, string> = {
  primary: 'border-accent bg-accent text-white hover:border-accent-ink hover:bg-accent-ink',
  ghost: 'border-line bg-transparent text-ink hover:border-accent hover:text-accent-ink',
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  download?: boolean
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded border px-5 py-3 font-mono text-[0.85rem] no-underline transition-colors duration-150 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

import type { ReactNode } from 'react'

interface EyebrowProps {
  id?: string
  isCurrent: boolean
  children: ReactNode
}

/** Section label. Grows and glows when the spine glow reaches its section. */
export function Eyebrow({ id, isCurrent, children }: EyebrowProps) {
  return (
    <h2
      id={id}
      className={[
        'mb-5 flex origin-left items-center gap-[0.55rem] font-mono text-xs font-medium uppercase tracking-[0.12em]',
        'transition-[color,transform,text-shadow] duration-[400ms] ease-in-out motion-reduce:transition-none',
        "before:inline-block before:h-px before:shrink-0 before:bg-accent before:transition-[width] before:duration-[400ms] before:content-['']",
        isCurrent
          ? 'scale-[1.08] text-accent [text-shadow:0_0_16px_rgba(31,111,92,0.35)] before:w-7'
          : 'text-accent-ink before:w-4',
      ].join(' ')}
    >
      {children}
    </h2>
  )
}

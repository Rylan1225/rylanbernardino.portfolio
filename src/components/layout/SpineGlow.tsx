import { forwardRef } from 'react'

interface SpineGlowProps {
  active: boolean
}

/** Light that travels down the spine with scroll. Position is set by useSpine. */
export const SpineGlow = forwardRef<HTMLDivElement, SpineGlowProps>(function SpineGlow(
  { active },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={[
        'pointer-events-none fixed top-0 z-[15] h-16 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-glow',
        'bg-[linear-gradient(to_bottom,transparent,#1F6F5C_30%,#1F6F5C_70%,transparent)]',
        '[transition:opacity_0.4s_ease,top_0.08s_linear] motion-reduce:[transition:none]',
        active ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    />
  )
})

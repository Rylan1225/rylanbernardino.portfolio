import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { stack } from '@/data/portfolio'
import { useMarquee } from '@/hooks/useMarquee'
import { Rise } from '@/components/ui/Rise'
import { Section } from '@/components/ui/Section'
import type { StackItem } from '@/types'

function StackCard({ item, hidden }: { item: StackItem; hidden: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex w-60 flex-none items-start gap-[0.9rem] rounded-md border border-line bg-surface p-4 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(27,29,33,0.05)] motion-reduce:transition-none"
    >
      <span className="min-w-11 shrink-0 rounded bg-accent-soft px-2 py-[0.35rem] text-center font-mono text-[0.72rem] font-semibold text-accent-ink">
        {item.badge}
      </span>
      <div>
        <p className="mb-[0.15rem] text-[0.95rem] font-semibold">{item.name}</p>
        <p className="text-[0.88rem] text-muted">{item.description}</p>
      </div>
    </div>
  )
}

export function TechStack() {
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  useMarquee(trackRef, { autoScroll: !reducedMotion })

  return (
    <Section id="stack" eyebrow="Tech Stack">
      <Rise>
        <div
          role="region"
          aria-label="Toolkit skills, scrollable carousel"
          className="fade-sides relative -mx-3 overflow-hidden px-3 py-1 max-sm:[--fade:24px] sm:-mx-5 sm:px-5"
        >
          <div
            ref={trackRef}
            tabIndex={0}
            className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto data-[dragging=true]:cursor-grabbing data-[dragging=true]:select-none"
          >
            {/* Rendered twice so the loop can wrap seamlessly; the copy is hidden from AT. */}
            {[...stack, ...stack].map((item, i) => (
              <StackCard key={`${item.name}-${i}`} item={item} hidden={i >= stack.length} />
            ))}
          </div>
        </div>
      </Rise>
    </Section>
  )
}

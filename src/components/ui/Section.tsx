import { useEffect, type ReactNode } from 'react'
import { motion, useAnimationControls, type Variants } from 'framer-motion'
import { useSectionContext } from '@/context/SectionContext'
import { Eyebrow } from './Eyebrow'
import { Rise } from './Rise'

const staggerVariants: Variants = {
  primed: {},
  shown: { transition: { staggerChildren: 0.055 } },
}

interface SectionProps {
  id: string
  /** Visible heading. Omit for the hero, which uses its own <h1>. */
  eyebrow?: string
  children: ReactNode
}

/**
 * One block on the spine. Handles the scroll reveal, the node marker, the eyebrow
 * heading, and the staggered "rise" that plays after a nav click lands here.
 */
export function Section({ id, eyebrow, children }: SectionProps) {
  const { activeId, riseRequest } = useSectionContext()
  const controls = useAnimationControls()
  const isCurrent = activeId === id
  const headingId = `${id}-heading`

  useEffect(() => {
    if (riseRequest.id !== id) return
    controls.set('primed')
    controls.start('shown')
  }, [riseRequest, id, controls])

  return (
    <motion.section
      id={id}
      aria-labelledby={eyebrow ? headingId : undefined}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={[
        'relative scroll-mt-[calc(var(--nav-h,68px)+14px)] border-b border-line py-[4.5rem] pl-6 last:border-b-0 sm:pl-9',
        "before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-line before:content-['']",
      ].join(' ')}
    >
      <div
        data-node-marker
        aria-hidden="true"
        className={[
          '-left-1 absolute size-[9px] rounded-full border-2 border-canvas bg-accent',
          'transition-[transform,box-shadow] duration-[400ms] ease-in-out motion-reduce:transition-none',
          id === 'hero' ? 'top-[3.6rem]' : 'top-[4.9rem]',
          isCurrent ? 'scale-[1.7] shadow-marker-active' : '',
        ].join(' ')}
      />
      <motion.div
        className="contents"
        variants={staggerVariants}
        initial="shown"
        animate={controls}
      >
        {eyebrow && (
          <Rise>
            <Eyebrow id={headingId} isCurrent={isCurrent}>
              {eyebrow}
            </Eyebrow>
          </Rise>
        )}
        {children}
      </motion.div>
    </motion.section>
  )
}

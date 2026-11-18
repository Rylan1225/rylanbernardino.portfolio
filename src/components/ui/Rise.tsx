import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/** Child variants for the nav-triggered "rise" entrance, orchestrated by <Section>. */
const riseVariants: Variants = {
  primed: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

interface RiseProps {
  children: ReactNode
  className?: string
}

export function Rise({ children, className }: RiseProps) {
  return (
    <motion.div variants={riseVariants} className={className}>
      {children}
    </motion.div>
  )
}

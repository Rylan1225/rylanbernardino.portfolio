import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { RiseRequest } from '@/context/SectionContext'
import { whenScrollSettles } from '@/utils/scroll'

/** Smooth-scrolls to a section, then asks that section to play its "rise" entrance. */
export function useSectionNavigation() {
  const reduced = useReducedMotion()
  const [riseRequest, setRiseRequest] = useState<RiseRequest>({ id: null, nonce: 0 })
  const cancelRef = useRef<(() => void) | null>(null)

  useEffect(() => () => cancelRef.current?.(), [])

  const navigateTo = useCallback(
    (id: string) => {
      const target = document.getElementById(id)
      if (!target) return

      const navHeight = document.querySelector('header')?.offsetHeight ?? 0
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 14
      history.pushState(null, '', `#${id}`)
      window.scrollTo({ top: Math.max(top, 0), behavior: reduced ? 'auto' : 'smooth' })

      cancelRef.current?.()
      if (reduced) return
      cancelRef.current = whenScrollSettles(() =>
        setRiseRequest((prev) => ({ id, nonce: prev.nonce + 1 })),
      )
    },
    [reduced],
  )

  return { navigateTo, riseRequest }
}

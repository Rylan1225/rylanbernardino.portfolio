import { useEffect, useRef, useState } from 'react'

const NAV_CLEARANCE = 76
const BOTTOM_CLEARANCE = 48

/**
 * Drives the scroll-following glow on the left "spine" and works out which
 * section node the glow has reached. The glow is positioned imperatively through a
 * ref (it updates every scroll frame); React state only changes when the active
 * section changes.
 */
export function useSpine(sectionIds: readonly string[]) {
  const glowRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string>(sectionIds[0])
  const [glowReady, setGlowReady] = useState(false)

  useEffect(() => {
    const glow = glowRef.current
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!glow || sections.length === 0) return

    const markers = sections.map((s) => s.querySelector<HTMLElement>('[data-node-marker]'))
    let glowTop = NAV_CLEARANCE
    let frame = 0

    const positionX = () => {
      glow.style.left = `${sections[0].getBoundingClientRect().left}px`
    }

    const positionY = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0
      const travel = Math.max(0, window.innerHeight - NAV_CLEARANCE - BOTTOM_CLEARANCE)
      glowTop = NAV_CLEARANCE + pct * travel
      glow.style.top = `${glowTop}px`
    }

    const updateActive = () => {
      let current = sectionIds[0]
      markers.forEach((marker, i) => {
        if (marker && marker.getBoundingClientRect().top <= glowTop + 6) current = sectionIds[i]
      })
      setActiveId(current)
    }

    const update = () => {
      positionY()
      updateActive()
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        update()
        frame = 0
      })
    }

    const onResize = () => {
      positionX()
      update()
    }

    positionX()
    update()
    const ready = requestAnimationFrame(() => setGlowReady(true))

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(frame)
      cancelAnimationFrame(ready)
    }
  }, [sectionIds])

  return { glowRef, activeId, glowReady }
}

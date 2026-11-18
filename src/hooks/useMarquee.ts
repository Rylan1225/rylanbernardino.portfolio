import { useEffect, type RefObject } from 'react'

interface Options {
  /** Pixels per frame. */
  speed?: number
  /** Set false to disable auto-drift (e.g. reduced motion). Drag/wheel still work. */
  autoScroll?: boolean
}

/**
 * Seamless looping carousel. The track must render its items twice; scroll
 * position wraps at the halfway point. Supports auto-drift, hover/focus pause,
 * drag-to-scroll and wheel scrolling.
 */
export function useMarquee(
  trackRef: RefObject<HTMLDivElement>,
  { speed = 0.6, autoScroll = true }: Options = {},
) {
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let interacting = false
    let dragging = false
    let dragStartX = 0
    let dragStartScroll = 0
    let frame = 0

    const wrap = (value: number) => {
      const half = track.scrollWidth / 2
      return half > 0 ? ((value % half) + half) % half : value
    }

    const tick = () => {
      if (autoScroll && !interacting) track.scrollLeft = wrap(track.scrollLeft + speed)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    const onEnter = () => (interacting = true)
    const onLeave = () => {
      if (!dragging) interacting = false
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      track.scrollLeft = wrap(track.scrollLeft + delta)
    }
    const onPointerDown = (e: PointerEvent) => {
      dragging = true
      interacting = true
      track.dataset.dragging = 'true'
      dragStartX = e.clientX
      dragStartScroll = track.scrollLeft
    }
    const onPointerMove = (e: PointerEvent) => {
      if (dragging) track.scrollLeft = wrap(dragStartScroll - (e.clientX - dragStartX))
    }
    const endDrag = () => {
      if (!dragging) return
      dragging = false
      delete track.dataset.dragging
      interacting = track.matches(':hover')
    }

    track.addEventListener('mouseenter', onEnter)
    track.addEventListener('mouseleave', onLeave)
    track.addEventListener('focusin', onEnter)
    track.addEventListener('focusout', onLeave)
    track.addEventListener('wheel', onWheel, { passive: false })
    track.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', endDrag)
    window.addEventListener('pointercancel', endDrag)

    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('mouseenter', onEnter)
      track.removeEventListener('mouseleave', onLeave)
      track.removeEventListener('focusin', onEnter)
      track.removeEventListener('focusout', onLeave)
      track.removeEventListener('wheel', onWheel)
      track.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', endDrag)
      window.removeEventListener('pointercancel', endDrag)
    }
  }, [trackRef, speed, autoScroll])
}

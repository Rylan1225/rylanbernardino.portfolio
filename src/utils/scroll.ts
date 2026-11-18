/**
 * Calls `callback` once the page has stopped scrolling (6 stable frames).
 * Returns a cancel function. Needed because a smooth scroll on a tall page can
 * outlast an animation triggered at click time.
 */
export function whenScrollSettles(callback: () => void): () => void {
  let lastY = window.scrollY
  let stableFrames = 0
  let frame = 0

  const step = () => {
    const y = window.scrollY
    if (Math.abs(y - lastY) < 0.5) {
      stableFrames += 1
    } else {
      stableFrames = 0
      lastY = y
    }
    if (stableFrames >= 6) callback()
    else frame = requestAnimationFrame(step)
  }

  frame = requestAnimationFrame(step)
  return () => cancelAnimationFrame(frame)
}

import { createContext, useContext } from 'react'

export interface RiseRequest {
  id: string | null
  nonce: number
}

interface SectionContextValue {
  /** Section whose node the scroll glow has most recently passed. */
  activeId: string
  /** Bumped each time a nav click finishes scrolling to a section. */
  riseRequest: RiseRequest
}

export const SectionContext = createContext<SectionContextValue>({
  activeId: 'hero',
  riseRequest: { id: null, nonce: 0 },
})

export const useSectionContext = () => useContext(SectionContext)

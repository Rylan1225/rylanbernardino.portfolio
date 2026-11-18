import { useMemo } from 'react'
import { MotionConfig } from 'framer-motion'
import { SECTION_IDS } from '@/data/portfolio'
import { SectionContext } from '@/context/SectionContext'
import { useSectionNavigation } from '@/hooks/useSectionNavigation'
import { useSpine } from '@/hooks/useSpine'
import { BackgroundTexture } from '@/components/layout/BackgroundTexture'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SpineGlow } from '@/components/layout/SpineGlow'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Summary } from '@/components/sections/Summary'
import { TechStack } from '@/components/sections/TechStack'

export default function App() {
  const { glowRef, activeId, glowReady } = useSpine(SECTION_IDS)
  const { navigateTo, riseRequest } = useSectionNavigation()
  const context = useMemo(() => ({ activeId, riseRequest }), [activeId, riseRequest])

  return (
    <MotionConfig reducedMotion="user">
      <SectionContext.Provider value={context}>
        <BackgroundTexture />
        <SpineGlow ref={glowRef} active={glowReady} />
        <Navbar onNavigate={navigateTo} />
        <main className="mx-auto max-w-[51rem] px-6 sm:px-10">
          <Hero />
          <Summary />
          <TechStack />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </SectionContext.Provider>
    </MotionConfig>
  )
}

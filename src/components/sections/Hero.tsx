import { useState } from 'react'
import { Download } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { asset } from '@/utils/assets'
import { Button } from '@/components/ui/Button'
import { Rise } from '@/components/ui/Rise'
import { Section } from '@/components/ui/Section'

function Avatar() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative isolate aspect-[3/4] w-full max-w-[15rem]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[6%] aspect-square w-4/5 -translate-x-1/2 rounded-full bg-accent"
      />
      {!failed && (
        <div className="fade-bottom absolute inset-0 overflow-hidden">
          <img
            src={asset(profile.photoFile)}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            onError={() => setFailed(true)}
            className="block size-full object-cover object-top"
          />
        </div>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <Section id="hero">
      <div className="grid grid-cols-1 items-center gap-12 min-[721px]:grid-cols-[1.5fr_1fr]">
        <Rise>
          <h1 className="mb-2 font-mono text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.2]">
            {profile.name}
          </h1>
          <p className="mb-4 text-[1.1rem] font-semibold text-accent-ink">{profile.role}</p>
          <p className="mb-8 max-w-[34rem] text-[1.05rem] text-muted">{profile.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={asset(profile.resumeFile)} download>
              <Download size={14} aria-hidden="true" />
              Download résumé
            </Button>
            <Button variant="ghost" href="#contact">
              Get in touch
            </Button>
          </div>
        </Rise>

        <Rise className="flex flex-col items-center gap-3 max-[720px]:order-first max-[720px]:max-w-[11rem]">
          <Avatar />
        </Rise>
      </div>
    </Section>
  )
}

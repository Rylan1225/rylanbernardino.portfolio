import { profile } from '@/data/portfolio'
import { Rise } from '@/components/ui/Rise'
import { Section } from '@/components/ui/Section'

export function Summary() {
  return (
    <Section id="summary" eyebrow="Summary">
      <Rise>
        <p className="max-w-[46rem] text-[1.05rem]">{profile.summary}</p>
      </Rise>
    </Section>
  )
}

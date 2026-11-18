import { certifications } from '@/data/portfolio'
import { Card } from '@/components/ui/Card'
import { Rise } from '@/components/ui/Rise'
import { Section } from '@/components/ui/Section'

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(16rem,100%),1fr))] gap-5">
        {certifications.map((cert) => (
          <Rise key={cert.title} className="h-full">
            <Card className="flex h-full flex-col">
              <h3 className="mb-1 text-base font-semibold">{cert.title}</h3>
              <p className="mb-4 text-[0.85rem] text-muted">
                {cert.issuer} · {cert.year}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto font-mono text-[0.78rem] text-accent-ink no-underline hover:underline"
                >
                  View credential →
                </a>
              )}
            </Card>
          </Rise>
        ))}
      </div>
    </Section>
  )
}

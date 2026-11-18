import type { ReactNode } from 'react'
import { Mail } from 'lucide-react'
import { contacts } from '@/data/portfolio'
import { Rise } from '@/components/ui/Rise'
import { Section } from '@/components/ui/Section'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import type { ContactKind } from '@/types'

const iconClass = 'size-5 shrink-0 text-accent-ink'

const icons: Record<ContactKind, ReactNode> = {
  email: <Mail className={iconClass} strokeWidth={1.6} aria-hidden="true" />,
  github: <GithubIcon className={iconClass} />,
  linkedin: <LinkedinIcon className={iconClass} />,
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contacts">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(13rem,100%),1fr))] gap-4">
        {contacts.map((c) => (
          <Rise key={c.kind}>
            <a
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-[0.9rem] rounded-md border border-line bg-surface px-[1.1rem] py-4 text-ink no-underline shadow-card transition-[border-color,background-color,transform] duration-150 hover:-translate-y-0.5 hover:border-accent hover:bg-surface-hover motion-reduce:transition-none"
            >
              {icons[c.kind]}
              <div className="min-w-0">
                <p className="mb-[0.1rem] text-[0.92rem] font-semibold">{c.label}</p>
                <p className="break-all font-mono text-[0.82rem] text-muted">{c.display}</p>
              </div>
            </a>
          </Rise>
        ))}
      </div>
    </Section>
  )
}

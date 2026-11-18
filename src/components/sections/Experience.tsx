import { projects } from '@/data/portfolio'
import { Card } from '@/components/ui/Card'
import { Rise } from '@/components/ui/Rise'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'

export function Experience() {
  return (
    <Section id="work" eyebrow="Experience">
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <Rise key={project.title}>
            <Card>
              <h3 className="mb-2 text-[1.05rem] font-semibold">{project.title}</h3>
              <p className="mb-4 text-[0.92rem] text-muted">{project.description}</p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </Rise>
        ))}
      </div>
    </Section>
  )
}

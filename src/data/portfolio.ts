import type { Certification, ContactLink, NavItem, Profile, Project, StackItem } from '@/types'

export const profile: Profile = {
  name: 'Rylan R. Bernardino',
  navName: 'RYLAN.BERNARDINO',
  role: 'AI Automation Specialist',
  tagline:
    'I design n8n workflows that turn repetitive manual work into systems that run themselves — with a web development background that lets me build the interfaces and integrations around them.',
  summary:
    "I'm a freelance AI Automation Specialist who builds n8n workflows that turn repetitive manual work into systems that run themselves. My background in web development means automation rarely stops at the workflow canvas — I build the interfaces, APIs, and integrations around it when a project calls for one. Right now I'm deepening my Python and applied-AI skills as I work toward becoming an AI engineer, using automation as the foundation everything else is built on.",
  resumeFile: 'Bernardino-CV.pdf',
  photoFile: 'Picture.png',
}

/** Order here is the order sections appear on the page (hero first). */
export const SECTION_IDS = ['hero', 'summary', 'stack', 'work', 'certifications', 'contact'] as const

export const navItems: NavItem[] = [
  { id: 'summary', label: 'Summary' },
  { id: 'stack', label: 'Tools' },
  { id: 'work', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const stack: StackItem[] = [
  { badge: 'n8n', name: 'n8n', description: 'Designing and running end-to-end automation workflows' },
  { badge: 'DKR', name: 'Docker', description: 'Containerizing workflows and services for consistent deployment' },
  { badge: 'PY', name: 'Python', description: 'Scripting, APIs, and data processing behind the workflows' },
  { badge: 'JS', name: 'JavaScript', description: 'Custom functions in n8n and interactive front-ends' },
  { badge: '</>', name: 'HTML', description: 'Structuring clean, semantic pages' },
  { badge: '{ }', name: 'CSS', description: 'Styling responsive, accessible interfaces' },
]

export const projects: Project[] = [
  {
    title: 'Applicant Screening & Auto-Email System — OneSource',
    description:
      "Built a self-hosted n8n automation for OneSource, a manpower agency, that evaluates job applicants the moment they submit an intake form. The workflow scores each response against role requirements, then automatically routes and emails applicants into three outcomes — qualified, rejected, and needs review — cutting manual screening out of the initial triage step entirely. Runs in Docker on the company's own infrastructure, keeping applicant data on-premises.",
    tags: ['n8n', 'Docker', 'Javascript', 'Self-hosted', 'Webhook'],
  },
  {
    title: 'Automated Lead Intake → CRM Sync',
    description:
      'Built an n8n workflow that captures leads from a website contact form and Facebook Lead Ads, enriches each one with company and job-title data via Clearbit, then pushes clean, deduplicated records straight into HubSpot. Replaced a manual copy-paste process the sales team was doing from spreadsheets, cutting lead response time from same-day to under 5 minutes and eliminating duplicate contact entries.',
    tags: ['n8n', 'Webhook', 'API'],
  },
]

export const certifications: Certification[] = [
  { title: 'NCII - Computer Systems Servicing', issuer: 'TESDA', year: 2024 },
  { title: 'HTML Essentials', issuer: 'Cisco', year: 2026 },
  { title: 'CSS Esentials', issuer: 'Cisco', year: 2026 },
  { title: 'Python 1 Esentials', issuer: 'Cisco', year: 2026 },
  { title: 'Python 2 Esentials', issuer: 'Cisco', year: 2026 },
]

export const contacts: ContactLink[] = [
  {
    kind: 'email',
    label: 'Email',
    display: 'rylanbernardino5@gmail.com',
    href: 'mailto:rylanbernardino5@gmail.com',
    external: false,
  },
  {
    kind: 'github',
    label: 'GitHub',
    display: 'github.com/Rylan1225',
    href: 'https://github.com/Rylan1225',
    external: true,
  },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/rylan-bernardino-2519152b3',
    href: 'https://www.linkedin.com/in/rylan-bernardino-2519152b3/',
    external: true,
  },
]

export interface Profile {
  name: string
  navName: string
  role: string
  tagline: string
  summary: string
  resumeFile: string
  photoFile: string
}

export interface NavItem {
  id: string
  label: string
}

export interface StackItem {
  badge: string
  name: string
  description: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
}

export interface Certification {
  title: string
  issuer: string
  year: number
  /** Leave undefined until a real credential URL exists; the link is hidden in that case. */
  credentialUrl?: string
}

export type ContactKind = 'email' | 'github' | 'linkedin'

export interface ContactLink {
  kind: ContactKind
  label: string
  display: string
  href: string
  external: boolean
}

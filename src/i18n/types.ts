export type Locale = 'pt' | 'en'

export interface ProjectLink {
  label: string
  href: string
  kind: 'demo' | 'repo' | 'site'
}

export interface Project {
  id: string
  name: string
  status: string
  statusTone: 'live' | 'production' | 'active' | 'wip'
  tagline: string
  problem: string
  solution: string
  highlights: string[]
  stack: string[]
  links: ProjectLink[]
  /** Shown when the source is private / under NDA. */
  note?: string
  credentials?: { user: string; pass: string; label: string }
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Dictionary {
  meta: { title: string; description: string }
  nav: {
    about: string
    projects: string
    skills: string
    experience: string
    contact: string
  }
  hero: {
    eyebrow: string
    name: string
    headline: string
    summary: string
    ctaProjects: string
    ctaContact: string
    ctaCv: string
    location: string
  }
  stats: { value: string; label: string }[]
  about: {
    title: string
    lead: string
    body: string[]
  }
  projects: {
    title: string
    subtitle: string
    problemLabel: string
    solutionLabel: string
    stackLabel: string
    credsLabel: string
    items: Project[]
  }
  skills: {
    title: string
    subtitle: string
    groups: SkillGroup[]
  }
  experience: {
    title: string
    subtitle: string
    items: ExperienceItem[]
    educationTitle: string
    education: { course: string; school: string; period: string }[]
  }
  contact: {
    title: string
    lead: string
    email: string
    phone: string
    linkedin: string
    github: string
    availability: string
  }
  footer: { built: string; rights: string }
  a11y: { toggleTheme: string; toggleLang: string; menu: string }
}

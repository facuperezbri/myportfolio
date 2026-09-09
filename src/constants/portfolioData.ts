export type ProjectStatus = 'released' | 'in_development' | 'private'

export interface BilingualText {
  es: string
  en: string
}

export interface PortfolioProject {
  id: string
  /** Fixed reference number for this ledger line — independent of display order. */
  entryNo: number
  title: string
  description: BilingualText
  status: ProjectStatus
  year: string
  tags: string[]
  github: string | null
  demo: string | null
  featured: boolean
}

export interface WorkExperience {
  /** Fixed reference number for this ledger line — independent of display order. */
  entryNo: number
  company: string
  role: string
  period: string
  link: string
  description: BilingualText
}

export interface LegacyProject {
  title: string
  url: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'career-ai',
    entryNo: 1,
    title: 'Career AI Agentic Companion',
    description: {
      es: 'Un companion agentic para acompañar durante todo el proceso de búsqueda laboral. No lista vacantes ni manda CVs en tu nombre: entiende el perfil, los objetivos y el contexto de cada oportunidad para ayudar a tomar mejores decisiones.',
      en: "An agentic companion designed to support you throughout your entire job search. It doesn't list job postings or send CVs on your behalf: it understands your profile, goals, and the context of each opportunity to help you make better decisions.",
    },
    status: 'in_development',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'AI Agents', 'LLMs'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 'port-manager',
    entryNo: 2,
    title: 'Port Manager',
    description: {
      es: 'App nativa macOS para gestionar procesos en puertos. Muestra qué proceso ocupa cada puerto activo, permite terminarlos con un click y filtra por nombre o número. Construida porque necesitaba la herramienta y no encontré ninguna rápida y simple.',
      en: 'Native macOS app for managing processes on ports. Shows which process occupies each active port, lets you kill them with one click, and filters by name or number. Built because I needed the tool and could not find one that was fast and simple.',
    },
    status: 'released',
    year: '2025',
    tags: ['Swift', 'SwiftUI', 'macOS'],
    github: 'https://github.com/facuperezbri',
    demo: null,
    featured: false,
  },
  {
    id: 'resume-improver',
    entryNo: 3,
    title: 'Resume Improver',
    description: {
      es: 'Analiza tu CV contra una oferta laboral y sugiere mejoras concretas usando AI. Funciona con tu propia API key de OpenAI — cero datos guardados en el servidor.',
      en: 'Analyzes your CV against a job posting and suggests concrete improvements using AI. Works with your own OpenAI API key — zero data stored on the server.',
    },
    status: 'in_development',
    year: '2026',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'BYOK'],
    github: null,
    demo: null,
    featured: false,
  },
]

export const legacyProjects: LegacyProject[] = [
  {
    title: 'MercadoLibre Clone',
    url: 'https://meli-practice-client.vercel.app/',
  },
  {
    title: 'Turn It — UX Case Study',
    url: 'https://www.behance.net/gallery/133000477/Turnit-Diseno-UXUI',
  },
]

export const workExperience: WorkExperience[] = [
  {
    entryNo: 1,
    company: 'Galileo · SoFi',
    role: 'Sr. Software Engineer',
    period: 'Sep 2022 — Present',
    link: 'https://www.galileo-ft.com/',
    description: {
      es: 'Frontend de Terminal Universal, plataforma bancaria estratégica de Banco Patagonia. React, TypeScript, Redux, Redux-Saga, CI/CD. Progresión de Jr. a Sr. en el mismo equipo.',
      en: 'Frontend for Terminal Universal, Banco Patagonia\'s strategic banking platform. React, TypeScript, Redux, Redux-Saga, CI/CD. Progressed from Jr. to Sr. within the same team.',
    },
  },
  {
    entryNo: 2,
    company: 'Sistémica',
    role: 'React Native Developer',
    period: 'Mar 2024 — Ene 2025',
    link: 'https://sistemica.com.ar',
    description: {
      es: 'Construí desde cero una app mobile con React Native y Expo: arquitectura, stack, navegación y funcionalidades core.',
      en: 'Built a mobile app from scratch with React Native and Expo: architecture, stack, navigation, and core features.',
    },
  },
  {
    entryNo: 3,
    company: 'Henry',
    role: 'Henry Mentor',
    period: 'Nov 2022 — Dic 2023',
    link: 'https://soyhenry.com',
    description: {
      es: 'Staff de Learning del bootcamp. Corrección de proyectos individuales con React, Express y PostgreSQL, feedback a alumnos y propuestas de mejora de procesos internos.',
      en: 'Part of the bootcamp\'s Learning staff. Reviewed student projects in React, Express, and PostgreSQL, provided feedback, and proposed internal process improvements.',
    },
  },
]

export const stackTags = [
  'React',
  'TypeScript',
  'Next.js',
  'Redux',
  'Node.js',
  'Styled Components',
  'Prisma',
  'PostgreSQL',
  'Swift',
  'AI / LLMs',
]

export const contact = {
  email: 'facundo.perez.brizuela@gmail.com',
  linkedin: 'https://www.linkedin.com/in/facuperezbri/',
  github: 'https://github.com/facuperezbri',
}

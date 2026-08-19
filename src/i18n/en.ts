import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Alisson Moura — Full Stack Developer',
    description:
      'Full Stack Developer and Computer Science student based in Curitiba, Brazil. TypeScript, React, Next.js, Node, and Postgres. Production systems, AI APIs, and full-stack web applications.',
  },

  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Junior Full Stack Developer · Computer Science Student',
    name: 'Alisson Moura',
    headline: 'I build software solutions that solve real business problems and run in production.',
    summary:
      'Computer Science student transitioning to technology, with hands-on experience building corporate web systems and 10+ years of operational experience in banking credit. Combining professional maturity, organization, and detail orientation to build simple, effective software.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    ctaCv: 'Download Resume',
    location: 'Curitiba, Brazil · On-site, hybrid or remote',
  },

  stats: [
    { value: '15-20', label: 'daily active users in production system' },
    { value: '1,000+', label: 'monthly analyses managed via custom software' },
    { value: '10+', label: 'years of operational maturity' },
    { value: 'BSc', label: 'Computer Science in progress' },
  ],

  about: {
    title: 'About me',
    lead: 'A lifelong passion for technology combined with over 10 years of market experience. To me, coding is the tool to eliminate bottlenecks and build simple solutions that streamline daily operations.',
    body: [
      'Since I was young, I was fascinated by understanding how computers and software worked behind the scenes. However, out of initial financial necessity, I spent over a decade working in administrative, financial, and banking correspondent operations.',
      'This 10+ year trajectory forged me into a highly responsible, disciplined professional with acute attention to detail — learning firsthand how to navigate strict business rules, data compliance, and tight deadlines. My drive was always to find ways to streamline processes and eliminate rework.',
      'I decided to fulfill my ambition in tech by enrolling in a Computer Science degree. To put theory into immediate action, I designed and built "Gestor de Processos" and the "Agente de IA" for the operation I worked in. The software went straight from VS Code to production and is used daily by 15 to 20 operators, handling around 1,000 credit analyses per month and approximately 100 issued contracts per month.',
      'My engineering workflow focuses on research, system architecture, and clear specifications before writing code — designing from database schemas to deployment. Outside of dev work, I enjoy gaming, building personal side projects, watching movies and tech channels on YouTube, and I dream of traveling while exploring the cultures of Brazil and the USA.',
    ],
  },

  projects: {
    title: 'Projects',
    subtitle:
      'Real, functional systems. Two are in active production with real users and one is in active development — private repositories can be demonstrated during interviews.',
    problemLabel: 'The problem',
    solutionLabel: 'The solution',
    stackLabel: 'Stack',
    credsLabel: 'Demo credentials',
    items: [
      {
        id: 'gestor-processos',
        name: 'Gestor de Processos',
        status: 'In production',
        statusTone: 'production',
        tagline:
          'Contract and financing management system used daily by 15 to 20 real operators.',
        problem:
          'The operation managed hundreds of real estate financing contracts via spreadsheets and manual reviews. This led to missed deadlines, lack of data traceability, and zero management visibility into team productivity.',
        solution:
          'I built the entire application end-to-end — front-end, Cloud Functions, Firestore schema, and security rules. Replaced manual spreadsheets with a structured workflow offering precise deadline tracking, audit logs, and management performance reports.',
        highlights: [
          'In active production with 15 to 20 daily users, managing ~100 new contracts/month and a database of 10,000+ clients',
          'Over 1,000 monthly credit analyses and document verifications processed through audit-proof status workflows',
          'Management dashboards providing full visibility into team performance and task allocation per operator',
          'Integrated with WhatsApp Business API and Vertex AI for intelligent document reading support',
        ],
        stack: [
          'JavaScript ES6+',
          'Firebase',
          'Cloud Functions',
          'Firestore',
          'Vertex AI',
          'WhatsApp Business API',
          'LGPD',
        ],
        links: [
          { label: 'Open demo', href: 'https://teste-gestor.ajsmtech.com/', kind: 'demo' },
        ],
        note: 'Proprietary system in production. Private code; the demo environment below uses mock test data.',
        credentials: {
          label: 'Test environment',
          user: 'demo@ajsmtech.com',
          pass: 'paodealho@',
        },
      },
      {
        id: 'agente-de-IA',
        name: 'AI Agent - Credit Analyst',
        status: 'Active',
        statusTone: 'active',
        tagline:
          'AI agent API with asynchronous queues that receives documents via WhatsApp and generates reports for human review.',
        problem:
          'Verifying income and processing documents sent via chat was manual, slow, and error-prone. Reading documents synchronously inside request handlers crashed the server.',
        solution:
          'Built a decoupled Node.js API with BullMQ and Redis queues. The webhook validates Meta HMAC signatures and responds instantly, while background workers extract data, query OpenAI API, and log drafts for human approval.',
        highlights: [
          'Meta Cloud API webhook with HMAC signature validation (X-Hub-Signature-256) and instant response',
          'Asynchronous queue processing using BullMQ + Redis, decoupled workers, and queue monitoring dashboard',
          'Persisted human feedback loop: analyst corrections feed few-shot prompt examples for future runs',
          'Automatic generation of summary sheets and reports requiring human sign-off before saving',
          'Structured logging with Pino and strict read-only isolation for the production database',
        ],
        stack: [
          'Node.js',
          'Express 5',
          'OpenAI API',
          'BullMQ',
          'Redis',
          'Firebase Admin',
          'Zod',
          'Docker',
        ],
        links: [],
        note: 'Private repository integrated with a live business operation. Architecture and source code can be demonstrated in interviews.',
      },
      {
        id: 'ethos-tribo',
        name: 'Ethos Tribo',
        status: 'In development',
        statusTone: 'wip',
        tagline:
          'Web + mobile platform monorepo connecting people to in-person activities and fixed social groups.',
        problem:
          'Many people want to go out but lack company. Standard event apps handle discovery but fail to build ongoing community.',
        solution:
          'Modeled around confirmed attendance, unifying discovery, curated schedules, and fixed groups in a single TypeScript monorepo with shared contracts between Next.js (web) and React Native/Expo (mobile).',
        highlights: [
          'Monorepo with 2 applications (Next.js and React Native) and 5 shared packages: contracts, domain, data, design, and storage',
          '520+ automated tests, 12 versioned migrations, and 9 scheduled background jobs',
          'End-to-end type-safe API with tRPC + Zod — ensuring contract integrity across web and mobile apps',
          'Geospatial proximity search powered by PostGIS covering Curitiba and metropolitan area',
          '8 ADRs documenting architectural trade-offs and 46 documented business rules',
        ],
        stack: [
          'TypeScript',
          'Next.js 16',
          'React Native / Expo',
          'tRPC',
          'Zod',
          'PostgreSQL',
          'PostGIS',
          'Supabase',
          'Vitest',
          'Docker',
        ],
        links: [
          { label: 'View preview', href: 'https://ethos-tribo-web.vercel.app', kind: 'demo' },
        ],
        note: 'Active development — preview reflects current phase implementation.',
      },
      {
        id: 'craftwebtools',
        name: 'CraftWebTools',
        status: 'Live',
        statusTone: 'live',
        tagline:
          'Browser-first PDF manipulation toolsuite processing 100% client-side for zero data leakage.',
        problem:
          'Online PDF tools require uploading sensitive files (contracts, paystubs) to untrusted third-party servers.',
        solution:
          'Inverted the model with zero uploads: all processing uses WebAssembly and browser JS inside the client sandbox.',
        highlights: [
          '12+ tools: merge, split, compress, unlock, and rotate PDFs, plus image and document conversions',
          '100% client-side with pdf-lib, pdfjs-dist, and jsPDF — no user files touch the network',
          'SSR pre-rendering build with automatic sitemap generator and WCAG compliance (4.5:1 contrast minimum)',
          'Published under custom domain with light/dark theme support',
        ],
        stack: [
          'React 19',
          'TypeScript',
          'Vite',
          'pdf-lib',
          'pdfjs-dist',
          'WebAssembly',
          'Netlify',
        ],
        links: [{ label: 'Visit site', href: 'https://craftwebtools.com', kind: 'site' }],
      },
    ],
  },

  skills: {
    title: 'Skills',
    subtitle: 'Computer Science fundamentals applied to modern software engineering and solving real business problems.',
    groups: [
      {
        label: 'Languages',
        items: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
      },
      {
        label: 'Front-end',
        items: [
          'React 19',
          'Next.js (App Router)',
          'React Native / Expo',
          'Vite',
          'Tailwind CSS',
          'Design tokens',
          'Accessibility (WCAG)',
          'Responsive design',
        ],
      },
      {
        label: 'Back-end',
        items: [
          'Node.js',
          'Express',
          'tRPC',
          'REST APIs',
          'Zod',
          'BullMQ / Redis',
          'Cloud Functions',
          'Webhooks & HMAC',
        ],
      },
      {
        label: 'Data',
        items: [
          'PostgreSQL',
          'PostGIS',
          'Prisma',
          'Supabase',
          'Firestore',
          'Migrations',
          'Data modeling & indexing',
        ],
      },
      {
        label: 'Applied AI',
        items: [
          'OpenAI API',
          'Vertex AI',
          'Agentic tools',
          'Asynchronous processing',
          'Few-shot human feedback',
        ],
      },
      {
        label: 'Engineering',
        items: [
          'Git / GitHub',
          'Docker',
          'Vitest',
          'Automated testing',
          'ADRs',
          'Spec-driven development',
          'Vercel / Netlify / Firebase Hosting',
          'LGPD compliance',
        ],
      },
    ],
  },

  experience: {
    title: 'Experience',
    subtitle: 'Over 10 years of dedication and operational vision, empowered by software engineering.',
    items: [
      {
        role: 'Credit Analyst',
        company: 'Apoio Administrativo',
        period: 'Dec 2021 — Jun 2026',
        bullets: [
          'Working in contract registration with direct responsibility over document verification, deadline tracking, and legal compliance.',
          'Identified manual spreadsheets as the primary operational bottleneck and built the replacement system — currently in active production with 15-20 daily users, managing ~1,000 credit analyses and ~100 contracts/month.',
          'Built the software end-to-end: requirement discovery with end users, Firestore data modeling, Cloud Functions, automation, and executive dashboards.',
          'Developed an AI agent API with async queues (BullMQ/Redis) to accelerate document verification under human supervision.',
          'Combined compliance rigor, data privacy (LGPD), and strict banking deadlines with agile, user-centric software development.',
        ],
      },
      {
        role: 'Administrative Assistant',
        company: 'Premiere Serviços Administrativos',
        period: 'Mar 2014 — Dec 2021',
        bullets: [
          'Customer support, assembly, verification, and tracking of complex real estate financing files.',
          'Direct liaison with banks, public registries, and government agencies, enforcing strict document verification, deadline control, and process status.',
          'Data organization, resolution of operational inconsistencies, and office routine support — the foundation of discipline and attention to detail applied in software engineering.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        course: 'B.Sc. in Computer Science',
        school: 'Faculdade Descomplica',
        period: 'Since Mar 2025 · In progress',
      },
    ],
  },

  contact: {
    title: "Let's talk",
    lead: "Open to opportunities as a Full Stack, Back-end, or Front-end Developer (Internship or Junior). If your team is looking for a mature, responsible developer with an ownership mindset and a drive to deliver clean, production-ready code, get in touch!",
    email: 'alijrsm@gmail.com',
    phone: '+55 (41) 99829-0795',
    linkedin: 'linkedin.com/in/alisson-moura95',
    github: 'github.com/alijmoura',
    availability: 'Available for Curitiba (On-site / Hybrid) or Remote worldwide',
  },

  footer: {
    built: 'Built with React, TypeScript and Vite',
    rights: 'Alisson Moura',
  },

  a11y: {
    toggleTheme: 'Toggle light and dark theme',
    toggleLang: 'Mudar para Português',
    menu: 'Open navigation menu',
  },
}

export const site = {
  brand: 'Jaycrown',
  name: 'John Adeoye',
  title: 'Senior Software Engineer',
  focus: ['Full-stack', 'Mobile', 'Backend', 'AI Automation'] as const,
  tagline:
    'I design and ship production systems that hold up under real money and real users: payment rails, mobile apps, APIs and AI automations.',
  description:
    'John Adeoye (Jaycrown), Senior Software Engineer building full-stack, mobile, backend and AI-automation systems for fintech, e-commerce and SaaS teams worldwide.',
  location: 'Nigeria',
  timezone: 'Africa/Lagos',
  email: 'johnayooluwaadeoye@gmail.com',
  // International format, digits only (Nigeria +234, leading 0 dropped) — used for wa.me links
  whatsapp: '2348091190946',
  whatsappMessage: "Hi John, I found your portfolio and I'd like to talk about a project.",
  links: {
    github: 'https://github.com/jaycrowngit',
    linkedin: 'https://www.linkedin.com/in/jaycrownlink',
  },
}

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

export const capabilities = [
  {
    key: 'fullstack',
    title: 'Full-stack Product',
    body: 'React, Next.js and TypeScript front ends on top of Laravel, Node and Python services, owned end to end, from schema to deploy.',
    stack: ['React', 'Next.js', 'TypeScript', 'Laravel', 'Node.js'],
  },
  {
    key: 'mobile',
    title: 'Mobile',
    body: 'Cross-platform Flutter apps shipped to the stores, built offline-first for unreliable networks and low-end devices.',
    stack: ['Flutter', 'Dart', 'Firestore'],
  },
  {
    key: 'backend',
    title: 'Backend & Payments',
    body: 'Transaction workflows, webhooks and reconciliation across Paystack, Flutterwave and Monnify: idempotent, observable and auditable.',
    stack: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    key: 'ai',
    title: 'AI Automation',
    body: 'LLM-powered agents and workflows wired into real business processes: WhatsApp assistants, triage and data extraction.',
    stack: ['Python', 'LLM APIs', 'Webhooks', 'Queues'],
  },
] as const

export const experience = [
  {
    role: 'AI & Full-stack Developer',
    company: 'NCDF Group',
    period: 'Since TBD', // TODO: start year, e.g. 'Since 2024'
    points: [
      'Build and maintain full-stack applications across frontend and backend layers.',
      'Integrate AI and ML workflows to automate complex application logic.',
      'Architect resilient API bridges and secure database connectivity.',
    ],
  },
  {
    role: 'Technical Team Lead',
    company: 'Byllora',
    period: 'Since TBD', // TODO: start year
    points: [
      'Lead engineering for an automated utility-payments platform: airtime, data, electricity and airtime-to-cash.',
      'Own Monnify gateway integration and real-time transaction webhooks.',
      'Run reliability: monitor upstream providers and resolve transaction discrepancies.',
    ],
  },
]

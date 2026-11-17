/**
 * About / journey content. Written from John's CV and previous site.
 * TODO(John): replace every "TBD" year and rewrite any line in your own voice —
 * keep it about your work: what you built, what you learned, how you work.
 */

export const intro = {
  heading: "I'm John. I build the systems behind the screen.",
  short: [
    "I'm a software engineer from Nigeria who builds production systems end to end: the mobile app in your hand, the API behind it, the payment rails under that, and increasingly the AI automations that keep it all running.",
    'Most of my work has lived where mistakes are expensive, in fintech, utility payments, health and commerce, for users on unreliable networks and low-end devices. That shaped how I engineer: plan for failure, keep every transaction accountable, and ship things people can depend on.',
  ],
}

export const facts = [
  { label: 'Based in', value: 'Nigeria · WAT (UTC+1)' },
  { label: 'Works with', value: 'Remote teams worldwide' },
  { label: 'Experience', value: '5+ years in production' }, // TODO(John): confirm
  { label: 'Focus', value: 'Full-stack · Mobile · Backend · AI' },
]

export const journey = [
  {
    year: 'TBD',
    title: 'Where it started',
    body: 'I started building software for the market around me: users on patchy mobile data, cheap Android phones and payment systems that fail in creative ways. Those constraints became my training ground.',
    // TODO(John): add the real story — how you got into code, first language, first thing you built.
  },
  {
    year: 'TBD',
    title: 'First product in production',
    body: 'Naira4Coin, a crypto-to-Naira exchange, was my first product with real money flowing through it. It taught me that in fintech the hard part is not the UI. It is rates, payouts and making every transaction reconcile.',
  },
  {
    year: 'TBD',
    title: 'Building a team',
    body: 'I founded JaytechHub, a small engineering collective of full-stack, mobile, DevOps and design talent. We shipped products like MobileNig and Raolak, and I learned to scope work, lead people and own delivery, not just write code.',
  },
  {
    year: 'TBD',
    title: 'Payments at the core',
    body: 'As Technical Team Lead at Byllora I run engineering for an automated utility-payments platform: virtual accounts, real-time gateway webhooks, idempotent fulfilment and daily reconciliation against upstream providers.',
  },
  {
    year: 'Now',
    title: 'AI in real workflows',
    body: 'At NCDF Group I build full-stack applications with AI woven into the logic, and I design LLM agents, like WhatsApp assistants, that use typed tools on real business data and hand off to humans when they should.',
  },
  {
    year: 'Next',
    title: 'Global product teams',
    body: "I'm looking for senior roles and contracts with product teams in the US and worldwide, where I can own hard systems end to end and help engineers around me ship with confidence.",
  },
]

export const principles = [
  { title: 'Ship to production', body: 'Done means live, monitored and used, not just merged.' },
  { title: 'Design for failure', body: 'Retries, idempotency and clear fallbacks before the happy path.' },
  { title: 'Own the outcome', body: 'From schema to support ticket, I stay with what I build.' },
  { title: 'Write it down', body: 'Clear async updates and decision docs, built for remote teams across time zones.' },
]

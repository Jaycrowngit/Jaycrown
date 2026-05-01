import { motion } from 'framer-motion'
import {
  Bot,
  Download,
  ExternalLink,
  LayoutDashboard,
  MessageSquare,
  MonitorSmartphone,
  Shield,
  ShoppingBag,
  Ticket,
  Wallet,
  Cpu,
} from 'lucide-react'

// Keep access items structured so live URLs can be added later without changing the UI.
const projects = [
  {
    id: 1,
    name: 'Naira4coin',
    alias: 'now myTrader',
    category: 'Crypto-to-Naira',
    platform: 'Web + Mobile',
    delivery: 'Cross-platform fintech product',
    availability: 'Live site + download',
    performance: '99.9% Uptime',
    summary:
      'Secure app for instant BTC, USDT, ETH, and SOL sales with direct bank payouts across web and mobile experiences.',
    stack: ['Flutter', 'Dart', 'Firebase', 'PHP API', 'MySQL'],
    access: [
      { label: 'Live Site', href: 'https://mytrader.ng/mobile/' },
      { label: 'Download', href: 'https://naira4coin.com/mobile/minified:D4' },
    ],
    logoSrc: '/naira4coin.png',
    icon: Wallet,
    featured: true,
  },
  {
    id: 8,
    name: 'Brainiacs Africa',
    category: 'Talent Registry',
    platform: 'Web Platform',
    delivery: 'B2B Talent Deployment System',
    availability: 'Live Production',
    performance: '12ms Latency',
    summary:
      'A robust talent acquisition and registry platform connecting African tech talent with global opportunities. Features automated vetting and placement workflows.',
    stack: ['Laravel', 'PostgreSQL', 'Tailwind CSS', 'Paystack', 'Supabase'],
    access: [{ label: 'Live Site', href: 'https://brainaics-africa.onrender.com/' }],
    logoSrc: '/brainaics-logo.png',
    icon: Cpu,
  },
  {
    id: 2,
    name: 'MobileNig',
    category: 'Bills & Utilities',
    platform: 'Web + Mobile',
    delivery: 'Utility payments app',
    availability: 'Live site',
    performance: '100% Reliable',
    summary:
      'Payments app for airtime, data bundles, electricity, and exam forms with integrated payment gateways.',
    stack: ['Flutter', 'Dart', 'Firebase', 'PHP API', 'MySQL'],
    access: [{ label: 'Live Site', href: 'https://mobilenig.com/' }],
    logoSrc: '/mobilenig_logo.png',
    logoClassName: 'scale-[1.35]',
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    name: 'Raolak Event',
    category: 'Event Management',
    platform: 'Web Platform',
    delivery: 'Ticketing and notifications system',
    availability: 'Live + admin portal',
    performance: '2k+ Monthly Users',
    summary:
      'Event management platform built for ticket sales, attendee communication, and operational notifications.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    access: [{ label: 'Live', href: 'https://event.raolak.com/portal' }, { label: 'Admin Portal', href: 'https://event.raolak.com/portal' }],
    icon: Ticket,
  },
  {
    id: 4,
    name: 'Swap Pay',
    category: 'Digital Wallet',
    platform: 'Mobile App',
    delivery: 'Payments and wallet experience',
    availability: 'Mobile APK COMING SOON',
    performance: 'Beta Testing',
    summary:
      'Digital wallet and payment product enabling peer-to-peer transfers, wallet funding, and bill payments.',
    stack: ['HTML', 'Tailwind CSS', 'Next.js', 'JavaScript', 'TypeScript', 'PHP API'],
    access: [{ label: 'Download' }],
    icon: MessageSquare,
  },
  {
    id: 5,
    name: 'Bubu Browser',
    category: 'Privacy Browser',
    platform: 'Mobile App',
    delivery: 'Speed and security focused browser',
    availability: 'GOOGLE PLAYSTORE',
    performance: '4.8★ Rating',
    summary:
      'Privacy-first mobile browser built for fast navigation, lightweight performance, and stronger user security.',
    stack: ['Flutter', 'Dart', 'Firebase', 'LocalStorage'],
    access: [
      {
        label: 'Download APK',
        href: 'https://play.google.com/store/apps/details?id=com.jacombeventures.bububrowser',
      },
    ],
    icon: Shield,
  },
  {
    id: 6,
    name: 'Rayy Varieties',
    category: 'Online Shop',
    platform: 'E-commerce Web App',
    delivery: 'Retail storefront for everyday products',
    availability: 'Live demo',
    performance: 'E-com Ready',
    summary:
      'E-commerce store for groceries, kitchen utensils, clothing, and other everyday household products.',
    stack: ['PHP API', 'React', 'Nest', 'Supabase'],
    access: [{ label: 'Demo', href: 'https://rayyvarieties.vercel.app/' }],
    logoSrc: '/rayy.png',
    logoClassName: 'scale-[1.25]',
    icon: ShoppingBag,
  },
  {
    id: 7,
    name: 'WhatsApp AI Agent',
    category: 'AI Automation',
    platform: 'Organisation Workflow',
    delivery: 'Customer support assistant',
    availability: 'Organisation deployment',
    performance: '95% Resolution Rate',
    summary:
      'AI-powered WhatsApp agent designed to respond to end clients on behalf of an organisation in real time.',
    stack: ['WhatsApp', 'AI Agent', 'Automation'],
    access: [],
    icon: Bot,
  },
]

function getAccessIcon(label) {
  if (label.includes('Download')) return Download
  if (label.includes('Admin')) return LayoutDashboard
  return ExternalLink
}

function AccessPill({ label, href }) {
  const Icon = getAccessIcon(label)
  const className =
    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-all'

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${className} border-meltgreen/40 bg-meltgreen/10 text-meltgreen hover:bg-meltgreen hover:text-deep-space`}
      >
        <Icon size={14} />
        {label}
      </a>
    )
  }

  return (
    <span className={`${className} border-white/10 bg-white/5 text-white/70`}>
      <Icon size={14} />
      {label}
    </span>
  )
}

export default function LiveLab() {
  return (
    <section id="work" className="relative py-32 transition-colors duration-500 bg-theme-primary text-theme-primary overflow-hidden scroll-mt-24">
      <div id="in-production" aria-hidden="true" className="absolute -top-24" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-meltgreen/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-meltgreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-meltgreen"></span>
              </span>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-meltgreen">Live & Completed Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              Products shipped across fintech,
              <br />
              <span className="opacity-30">commerce, utility payments, and AI.</span>
            </h2>
          </div>
          <p className="text-theme-secondary max-w-xl text-lg leading-relaxed font-medium">
            A selected portfolio of web platforms, mobile apps, internal tools, and automation systems delivered for real business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            const hasLogo = Boolean(project.logoSrc)

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[2rem] border border-theme p-8 transition-all duration-500 hover:bg-theme-secondary ${
                  project.featured
                    ? 'lg:col-span-2 border-meltgreen/30 bg-theme-secondary'
                    : 'bg-theme-primary'
                }`}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm ${
                          hasLogo ? 'bg-white p-2.5 border border-theme' : 'bg-meltgreen/10 text-meltgreen'
                        }`}
                      >
                        {hasLogo ? (
                          <img
                            src={project.logoSrc}
                            alt={`${project.name} logo`}
                            className={`h-full w-full object-contain ${project.logoClassName || ''}`}
                          />
                        ) : (
                          <Icon size={26} />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-meltgreen opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-meltgreen"></span>
                          </span>
                          <p className="text-xs text-meltgreen font-bold tracking-[0.22em] uppercase">{project.category}</p>
                          {project.performance && (
                            <span className="ml-2 text-[9px] font-black uppercase tracking-[0.15em] bg-black/5 border border-theme px-2 py-0.5 rounded text-theme-secondary">
                              {project.performance}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-theme-primary">
                          {project.name}
                          {project.alias && (
                            <span className="block mt-2 text-base md:text-lg font-medium text-theme-secondary tracking-normal">
                              {project.alias}
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex self-start rounded-full border border-theme bg-black/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-theme-secondary">
                      {project.platform}
                    </div>
                  </div>

                  <p className="text-theme-secondary text-lg leading-relaxed max-w-3xl font-medium">{project.summary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-[1.5rem] bg-black/5 border border-theme p-5 transition-colors">
                      <p className="text-[10px] text-theme-secondary opacity-50 uppercase font-black tracking-[0.28em] mb-2">Delivery</p>
                      <p className="text-sm font-semibold text-theme-primary opacity-90">{project.delivery}</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-black/5 border border-theme p-5 transition-colors">
                      <p className="text-[10px] text-theme-secondary opacity-50 uppercase font-black tracking-[0.28em] mb-2">Availability</p>
                      <p className="text-sm font-semibold text-meltgreen">{project.availability}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-theme-secondary opacity-50 uppercase font-black tracking-[0.28em] mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-xl bg-black/5 border border-theme text-[11px] font-bold text-theme-secondary uppercase tracking-[0.16em]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.access.length > 0 && (
                    <div>
                      <p className="text-[10px] text-theme-secondary opacity-50 uppercase font-black tracking-[0.28em] mb-3">Access</p>
                      <div className="flex flex-wrap gap-3">
                        {project.access.map((item) => (
                          <AccessPill key={item.label} label={item.label} href={item.href} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

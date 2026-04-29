import { motion } from 'framer-motion'
import { Globe, Smartphone, PenTool, Layers, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom web applications built with modern frameworks — from landing pages to complex SaaS platforms.',
    tags: ['React', 'Next.js', 'Node.js'],
    accent: '#2dffc4',
    span: 'lg:col-span-2',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps with native performance on iOS and Android.',
    tags: ['Flutter', 'React Native'],
    accent: '#00e5ff',
    span: '',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'User-centred interface design — from wireframes to pixel-perfect Figma handoffs.',
    tags: ['Figma', 'Prototyping'],
    accent: '#a78bfa',
    span: '',
  },
  {
    icon: Layers,
    title: 'Graphic Design',
    desc: 'Brand identity, social media content, motion graphics, and visual storytelling.',
    tags: ['Branding', 'Motion', 'Social'],
    accent: '#fbbf24',
    span: 'lg:col-span-2',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 overflow-hidden transition-colors duration-500 bg-theme-primary">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.7 }}
          className="mb-16">
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#2dffc4] mb-4">Core Disciplines</p>
          <h2 className="text-3xl md:text-5xl font-black text-theme-primary tracking-tight leading-[1.1] uppercase">
            Specialized Skills <br className="hidden md:block" /> for global impact.
          </h2>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.09, duration: 0.65 }}
                className={`group relative rounded-2xl border border-theme p-7 cursor-pointer transition-all duration-400 hover:border-white/16 ${s.span}`}
                style={{ background: 'rgba(255,255,255,0.02)' }}>

                {/* corner accent glow */}
                <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle,${s.accent}22,transparent 70%)` }} />

                <div className="relative z-10 flex flex-col gap-5 h-full justify-between">
                  <div>
                    {/* icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${s.accent}14` }}>
                      <Icon size={18} style={{ color: s.accent }} />
                    </div>
                    <h3 className="text-lg font-bold text-theme-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-theme-secondary leading-relaxed font-medium">{s.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/8 text-white/35">{t}</span>
                      ))}
                    </div>
                    {/* arrow */}
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-white/25 group-hover:translate-x-1"
                      style={{ color: s.accent }}>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* bottom CTA strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/6 px-8 py-6"
          style={{ background: 'rgba(45,255,196,0.04)' }}>
          <p className="text-white/60 text-sm font-medium max-w-sm">
            Need a custom team? We scope, staff, and manage the right talent for your project.
          </p>
          <a href="/#inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] text-[#060f1e] whitespace-nowrap transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(90deg,#2dffc4,#00e5ff)' }}>
            Start a Project <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

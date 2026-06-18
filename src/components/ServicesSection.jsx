import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Enterprise-grade web applications, SaaS platforms, and complex system integrations built on modern, scalable infrastructure.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    num: '02',
    title: 'Mobile Applications',
    desc: 'Native-quality cross-platform mobile apps that perform flawlessly on iOS and Android from a single unified codebase.',
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    num: '03',
    title: 'UI/UX Design',
    desc: 'Human-centered product design — from discovery workshops and wireframes to production-ready Figma design systems.',
    tags: ['Figma', 'Design Systems', 'Research', 'Prototyping'],
  },
  {
    num: '04',
    title: 'DevOps & Cloud',
    desc: 'Cloud architecture, CI/CD pipelines, container orchestration, and infrastructure automation that eliminate deployment friction.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    num: '05',
    title: 'Visual Design',
    desc: 'Brand identity systems, motion graphics, marketing collateral, and visual storytelling that position your organization authoritatively.',
    tags: ['Branding', 'Motion', 'Print', 'Social'],
  },
  {
    num: '06',
    title: 'Dedicated Teams',
    desc: 'Fully managed engineering squads embedded in your organization — scoped, staffed, and led to ship your roadmap on schedule.',
    tags: ['Staffing', 'Agile', 'Technical Lead', 'QA'],
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--bg-dark)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div className="grid-bg-dark absolute inset-0 pointer-events-none" />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', marginBottom: '72px', flexWrap: 'wrap' }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.40)', marginBottom: '16px' }}>
              <span className="eyebrow-dot" style={{ background: 'rgba(255,255,255,0.30)' }} />
              Core Capabilities
            </div>
            <h2
              className="heading-lg"
              style={{ color: '#ffffff', maxWidth: '480px' }}
            >
              Everything your product needs, under one roof.
            </h2>
          </div>
          <a
            href="/#inquiry"
            className="btn-outline-white"
            style={{ flexShrink: 0 }}
          >
            Start a Project
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{
                background: 'var(--bg-dark)',
                padding: '40px 36px',
                cursor: 'default',
                transition: 'background 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-dark-subtle)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-dark)'}
            >
              {/* Number */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '11px',
                letterSpacing: '0.14em',
                color: 'var(--blue)',
                marginBottom: '20px',
              }}>
                {s.num}
              </p>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#ffffff',
                marginBottom: '14px',
                letterSpacing: '-0.01em',
              }}>
                {s.title}
              </h3>

              {/* Desc */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13.5px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '24px',
              }}>
                {s.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map(t => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.35)',
                      padding: '4px 10px',
                      border: '1px solid rgba(255,255,255,0.10)',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

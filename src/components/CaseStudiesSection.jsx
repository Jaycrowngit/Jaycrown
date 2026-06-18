import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    tag: 'Fintech',
    name: 'myTrader (Naira4Coin)',
    headline: 'A crypto-to-Naira exchange platform trusted by thousands across Nigeria.',
    result: '10,000+ Users',
    stack: ['Flutter', 'Node.js', 'Firebase'],
    color: '#1B4FD8',
    bg: '#EBF0FD',
  },
  {
    tag: 'Events & Ticketing',
    name: 'Raolak Platform',
    headline: 'End-to-end event ticketing and management system for live events.',
    result: 'Live Product',
    stack: ['React', 'Django', 'PostgreSQL'],
    color: '#080D1F',
    bg: '#ECEEF5',
  },
  {
    tag: 'Utility Payments',
    name: 'MobileNig',
    headline: 'Utility payment platform enabling seamless bill payments across Nigeria.',
    result: 'Serving Real Businesses',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    color: '#0D6E4F',
    bg: '#EBFAF4',
  },
  {
    tag: 'Browser / Consumer',
    name: 'Bubu Browser',
    headline: 'A custom web browser published on the Google Play Store.',
    result: 'Live on Play Store',
    stack: ['Android', 'Kotlin', 'WebKit'],
    color: '#7C3AED',
    bg: '#F3EEFF',
  },
]

export default function CaseStudiesSection() {
  return (
    <section
      id="work"
      style={{
        background: 'var(--bg-secondary)',
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Selected Work
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <h2 className="heading-lg" style={{ maxWidth: '440px' }}>
              Products we've shipped.
            </h2>
            <a
              href="/#inquiry"
              className="link-arrow"
              style={{ marginBottom: '8px', flexShrink: 0 }}
            >
              Discuss your project
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
          className="cases-grid"
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.10, duration: 0.6 }}
              className="card"
              style={{ padding: '0', overflow: 'hidden' }}
            >
              {/* Top color band */}
              <div style={{
                height: '140px',
                background: c.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: c.color,
                  opacity: 0.18,
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                }}>
                  {c.name.split(' ')[0]}
                </span>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '28px',
                }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '11px',
                    color: c.color,
                    padding: '4px 10px',
                    background: `${c.color}18`,
                    borderRadius: '4px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    {c.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 32px' }}>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}>
                  {c.name}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: '24px',
                }}>
                  {c.headline}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {c.stack.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                          padding: '4px 10px',
                          border: '1px solid var(--border-light)',
                          borderRadius: '4px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: c.color,
                    flexShrink: 0,
                    marginLeft: '12px',
                  }}>
                    {c.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

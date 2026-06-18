import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const milestones = [
  { year: '2019', title: 'Founded',           detail: 'JaytechHub was established to bridge the gap between organisations and the elite engineering talent they need.' },
  { year: '2020', title: 'First Delivery',    detail: 'Shipped Naira4Coin (now myTrader), a cross-platform crypto fintech app adopted by thousands across Nigeria.' },
  { year: '2021', title: 'Team Expansion',    detail: 'Scaled our talent network across Full-Stack, Mobile, DevOps, UI/UX, and Graphic Design disciplines.' },
  { year: '2022', title: 'Product Milestone', detail: 'Launched MobileNig (utility payments) and Raolak (event ticketing) — both live and serving real businesses.' },
  { year: '2023', title: 'AI & Enterprise',   detail: 'Deployed WhatsApp AI automation agents and launched Bubu Browser on the Google Play Store.' },
  { year: '2024+', title: 'Scaling Up',       detail: 'Staffing development teams across Africa and global markets, serving organizations of all sizes.' },
]

const principles = [
  { title: 'Rigorous vetting',      desc: 'We place only people we would hire ourselves. Every engineer passes a multi-stage technical review.' },
  { title: 'Scoped before started', desc: 'No ambiguity. We define the full scope, timeline, and deliverables before any work begins.' },
  { title: 'Transparent always',    desc: 'Regular updates, documented decisions, no surprises. You are always in the loop.' },
  { title: 'Ship it to production', desc: 'We stay until the product ships and passes real-world validation. Delivery is non-negotiable.' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: '#ffffff',
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
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}
          className="about-header-grid"
        >
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              About Us
            </div>
            <h2 className="heading-lg">
              From Lagos to the world — since 2019.
            </h2>
          </div>
          <div style={{ paddingTop: '36px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>
              JaytechHub is a B2B technology company that designs, engineers, and delivers 
              digital products for ambitious organizations. We operate as an embedded partner — 
              not just a vendor.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
            }}>
              Our model is simple: rigorous talent, defined scopes, and complete delivery. 
              Every engagement is staffed with senior-only engineers and managed end-to-end 
              by our in-house leads.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-light)', marginBottom: '80px' }} />

        {/* Two column: Principles + Timeline */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}
          className="about-two-col"
        >

          {/* Operating Principles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '28px',
            }}>
              How We Operate
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '20px 24px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '10px',
                    background: 'var(--bg-secondary)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(27,79,216,0.20)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,79,216,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-light)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={17} color="var(--blue)" />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                      marginBottom: '5px',
                    }}>
                      {p.title}
                    </p>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '28px',
            }}>
              Our Journey
            </p>

            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '38px',
                top: '8px',
                bottom: '8px',
                width: '1px',
                background: 'linear-gradient(to bottom, var(--blue), rgba(27,79,216,0.10))',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.07 }}
                    style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                  >
                    {/* Year badge */}
                    <div style={{
                      flexShrink: 0,
                      width: '76px',
                      height: '32px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 800,
                      fontSize: '11px',
                      letterSpacing: '0.04em',
                      background: i === milestones.length - 1 ? 'var(--navy)' : 'var(--bg-secondary)',
                      color: i === milestones.length - 1 ? '#ffffff' : 'var(--blue)',
                      border: `1px solid ${i === milestones.length - 1 ? 'transparent' : 'var(--border-light)'}`,
                    }}>
                      {m.year}
                    </div>
                    <div style={{ paddingTop: '6px' }}>
                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                        marginBottom: '5px',
                      }}>
                        {m.title}
                      </p>
                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                      }}>
                        {m.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-header-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .about-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

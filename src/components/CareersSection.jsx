import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'

const roles = [
  {
    title: 'Senior Frontend Engineer',
    dept: 'Engineering',
    type: 'Contract / Remote',
    location: 'Nigeria / Africa',
  },
  {
    title: 'Product Designer (UI/UX)',
    dept: 'Design',
    type: 'Contract / Remote',
    location: 'Nigeria / Africa',
  },
  {
    title: 'Backend Engineer (Node.js, Python, Laravel)',
    dept: 'Engineering',
    type: 'Contract / Remote',
    location: 'Nigeria / Africa',
  },
  {
    title: 'Flutter Mobile Developer',
    dept: 'Engineering',
    type: 'Contract / Remote',
    location: 'Nigeria / Africa',
  },
]

export default function CareersSection() {
  return (
    <section
      id="careers"
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
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '56px' }}
          className="careers-header"
        >
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Careers
            </div>
            <h2 className="heading-lg">
              Join the network that builds what others only plan.
            </h2>
          </div>
          <div style={{ paddingTop: '36px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '24px',
            }}>
              We work with senior engineers, designers, and specialists who are serious about their craft. 
              All roles are remote-first and project-based. Exceptional work leads to long-term engagements.
            </p>
            <a href="/#inquiry" className="link-arrow">
              Submit your profile
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Open Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-light)', borderRadius: '12px', overflow: 'hidden' }}>
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{
                background: '#ffffff',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                transition: 'background 0.15s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
              onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, flexWrap: 'wrap' }}>
                {/* Dept badge */}
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  color: 'var(--blue)',
                  padding: '4px 10px',
                  background: 'var(--blue-pale)',
                  borderRadius: '4px',
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>
                  {r.dept}
                </span>

                {/* Title */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                }}>
                  {r.title}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={13} color="var(--text-muted)" />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                  }}>
                    {r.location}
                  </span>
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  padding: '4px 10px',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                }}>
                  {r.type}
                </span>
                <ArrowUpRight size={16} color="var(--blue)" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '24px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}
        >
          Don't see your role? Send your portfolio to{' '}
          <a
            href="mailto:hello@jaytechhub.com"
            style={{ color: 'var(--blue)', fontWeight: 600 }}
          >
            hello@jaytechhub.com
          </a>
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .careers-header { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Globe, Mail, Phone } from 'lucide-react'

const locations = [
  {
    city: 'Lagos',
    country: 'Nigeria',
    type: 'Headquarters',
    desc: 'Our primary base of operations, where the core team is headquartered.',
    contact: 'hello@jaytechhub.com',
    flag: '🇳🇬',
  },
  {
    city: 'Remote',
    country: 'Pan-Africa',
    type: 'Distributed Team',
    desc: 'Engineers and designers across Nigeria, Ghana, Kenya, and beyond.',
    contact: 'Available across all timezones',
    flag: '🌍',
  },
  {
    city: 'Global',
    country: 'Worldwide',
    type: 'Client Operations',
    desc: 'Serving clients in the UK, USA, Canada, and across Africa and the Gulf.',
    contact: 'Serving clients globally',
    flag: '🌐',
  },
]

export default function LocationsSection() {
  return (
    <section
      id="locations"
      style={{
        background: '#ffffff',
        padding: '80px 0',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', gap: '24px', flexWrap: 'wrap' }}
        >
          <div className="eyebrow" style={{ marginBottom: 0 }}>
            <span className="eyebrow-dot" />
            Where We Are
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={14} color="var(--text-muted)" />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}>
              Remote-first organization, Lagos headquartered
            </span>
          </div>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border-light)', borderRadius: '12px', overflow: 'hidden' }}
          className="locations-grid"
        >
          {locations.map((l, i) => (
            <motion.div
              key={l.city}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                background: '#ffffff',
                padding: '36px 32px',
              }}
            >
              {/* Flag + City */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>{l.flag}</span>
                <div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {l.city}
                  </p>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                  }}>
                    {l.country}
                  </p>
                </div>
              </div>

              {/* Type badge */}
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                color: 'var(--blue)',
                padding: '4px 10px',
                background: 'var(--blue-pale)',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '16px',
                letterSpacing: '0.04em',
              }}>
                {l.type}
              </span>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13.5px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '16px',
              }}>
                {l.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={13} color="var(--text-muted)" />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12.5px',
                  color: 'var(--text-muted)',
                }}>
                  {l.contact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .locations-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'

const partners = [
  'Naira4Coin', 'MobileNig', 'Raolak Events', 'Bubu Browser',
  'myTrader', 'WhatsApp AI', 'Naira4Coin', 'MobileNig',
  'Raolak Events', 'Bubu Browser', 'myTrader', 'WhatsApp AI',
]

export default function PartnerMarquee() {
  return (
    <section
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-light)',
        padding: '20px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '16px',
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Trusted by
        </p>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }} />
      </div>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to right, var(--bg-secondary), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to left, var(--bg-secondary), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="marquee-track" style={{ gap: '0' }}>
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                padding: '0 40px',
                flexShrink: 0,
              }}
            >
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                opacity: 0.5,
              }}>
                {p}
              </span>
              <span style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: 'var(--border-medium)',
                flexShrink: 0,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

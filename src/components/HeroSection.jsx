import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

/* ─── Floating geometric SVG illustration ─── */
function HeroIllustration() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '580px' }}>
      {/* Main geometric composition */}
      <svg
        viewBox="0 0 580 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
      >
        {/* Grid lines */}
        <line x1="0" y1="60" x2="580" y2="60" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="0" y1="180" x2="580" y2="180" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="0" y1="300" x2="580" y2="300" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="0" y1="420" x2="580" y2="420" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="60" y1="0" x2="60" y2="520" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="180" y1="0" x2="180" y2="520" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="300" y1="0" x2="300" y2="520" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="420" y1="0" x2="420" y2="520" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>
        <line x1="540" y1="0" x2="540" y2="520" stroke="rgba(8,13,31,0.05)" strokeWidth="1"/>

        {/* Large navy block — anchor */}
        <rect x="180" y="120" width="240" height="240" rx="16" fill="#080D1F"/>

        {/* Blue accent square */}
        <rect x="360" y="60" width="120" height="120" rx="12" fill="#1B4FD8"/>

        {/* Light gray square */}
        <rect x="60" y="240" width="160" height="160" rx="12" fill="#ECEEF5"/>

        {/* Small blue corner dot */}
        <circle cx="420" cy="180" r="8" fill="#4B78F0"/>

        {/* Outline rect — bottom right */}
        <rect x="360" y="320" width="160" height="120" rx="12" fill="none" stroke="#1B4FD8" strokeWidth="1.5" opacity="0.4"/>

        {/* White card floating over navy */}
        <rect x="200" y="200" width="200" height="120" rx="10" fill="white" style={{ filter: 'drop-shadow(0 8px 24px rgba(8,13,31,0.18))' }}/>
        <text x="220" y="235" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="#080D1F">50+</text>
        <text x="220" y="255" fontFamily="Inter, sans-serif" fontSize="11" fill="#9AA3BF" letterSpacing="0.08em">ENGINEERS DEPLOYED</text>
        <line x1="220" y1="272" x2="380" y2="272" stroke="rgba(8,13,31,0.07)" strokeWidth="1"/>
        <text x="220" y="296" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="#1B4FD8">7+</text>
        <text x="255" y="296" fontFamily="Inter, sans-serif" fontSize="11" fill="#9AA3BF" letterSpacing="0.08em">  LIVE PRODUCTS</text>

        {/* Small tag bottom-left of card */}
        <rect x="200" y="330" width="84" height="24" rx="6" fill="#EBF0FD"/>
        <text x="212" y="346" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="10" fill="#1B4FD8">Est. 2019</text>

        {/* Dot cluster — top left */}
        <circle cx="80" cy="80" r="4" fill="#1B4FD8" opacity="0.5"/>
        <circle cx="100" cy="80" r="4" fill="#1B4FD8" opacity="0.3"/>
        <circle cx="120" cy="80" r="4" fill="#1B4FD8" opacity="0.15"/>
        <circle cx="80" cy="100" r="4" fill="#1B4FD8" opacity="0.3"/>
        <circle cx="100" cy="100" r="4" fill="#080D1F" opacity="0.12"/>

        {/* Status badge — top right */}
        <rect x="440" y="200" width="110" height="38" rx="8" fill="white" style={{ filter: 'drop-shadow(0 4px 12px rgba(8,13,31,0.12))' }}/>
        <circle cx="458" cy="219" r="5" fill="#22C55E"/>
        <text x="470" y="223" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="10.5" fill="#080D1F">Active</text>

        {/* Bottom status strip */}
        <rect x="60" y="430" width="460" height="50" rx="10" fill="white" style={{ filter: 'drop-shadow(0 4px 16px rgba(8,13,31,0.08))' }}/>
        <rect x="80" y="450" width="20" height="10" rx="3" fill="#1B4FD8" opacity="0.8"/>
        <rect x="108" y="450" width="60" height="10" rx="3" fill="rgba(8,13,31,0.07)"/>
        <rect x="208" y="450" width="40" height="10" rx="3" fill="rgba(8,13,31,0.07)"/>
        <rect x="328" y="450" width="80" height="10" rx="3" fill="rgba(27,79,216,0.12)"/>
        <rect x="428" y="447" width="50" height="16" rx="5" fill="#080D1F"/>
      </svg>
    </div>
  )
}

const clients = [
  'Naira4Coin', 'MobileNig', 'Raolak', 'Bubu Browser', 'myTrader', 'Enterprise Co.'
]

const ctr = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.10, delayChildren: 0.1 } },
}
const itm = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Subtle grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8,13,31,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,13,31,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Blue top accent ── */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '3px', background: 'var(--blue)' }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          flex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
          width: '100%',
        }}
        className="hero-grid"
      >

        {/* ── LEFT COPY ── */}
        <motion.div
          variants={ctr}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '580px' }}
        >
          {/* Eyebrow */}
          <motion.div variants={itm} className="eyebrow">
            <span className="eyebrow-dot" />
            B2B Technology Partner
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itm} className="heading-xl" style={{ marginBottom: '24px' }}>
            Engineering software{' '}
            <span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>that</span>{' '}
            scales your business.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={itm}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '480px',
            }}
          >
            JaytechHub delivers full-cycle software engineering — from architecture and development 
            to design and deployment — for organizations that demand precision, reliability, and results.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itm} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
            <a href="/#inquiry" id="hero-cta-primary" className="btn-primary">
              Work With Us
              <ArrowRight size={16} />
            </a>
            <a href="/#work" id="hero-cta-secondary" className="btn-outline">
              View Our Work
            </a>
          </motion.div>

          {/* Client logos strip */}
          <motion.div variants={itm}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}>
              Products We've Built
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {clients.map(c => (
                <span
                  key={c}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    padding: '6px 14px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT ILLUSTRATION ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-end"
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* ── Bottom stat strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          borderTop: '1px solid var(--border-light)',
          background: 'var(--bg-secondary)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
          }}
          className="stat-strip"
        >
          {[
            // { v: '20', l: 'Year Founded' },
            // { v: '50+',  l: 'Engineers Deployed' },
            // { v: '7+',   l: 'Products Shipped' },
            // { v: '100%', l: 'Client Satisfaction' },
          ].map((s, i) => (
            <div
              key={s.l}
              style={{
                padding: '28px 32px',
                borderRight: i < 3 ? '1px solid var(--border-light)' : 'none',
              }}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '2rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                {s.v}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 100px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-grid { padding: 90px 20px 60px !important; }
          .stat-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

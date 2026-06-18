import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ── Animated counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const numTarget = parseInt(target.replace(/\D/g, '')) || 0
    if (numTarget === 0) { setCount(target); return }
    let start = 0
    const duration = 1800
    const step = Math.ceil(numTarget / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= numTarget) { setCount(numTarget); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {typeof count === 'number' ? count : target}{suffix}
    </span>
  )
}

const differentiators = [
  {
    title: 'Senior engineers only.',
    desc: 'Every engineer in our network is mid-to-senior level, vetted through a rigorous multi-stage technical review. No juniors on production systems.',
  },
  {
    title: 'Fixed scope. Fixed delivery.',
    desc: 'We define requirements in detail before any work begins. What we scope is what we ship — on time, within budget, without surprises.',
  },
  {
    title: 'End-to-end ownership.',
    desc: 'From architecture decisions to final deployment and post-launch support, we take full ownership of every engagement.',
  },
  {
    title: 'Cross-functional squads.',
    desc: 'A single coordinated team covering engineering, design, QA, and DevOps — no silos, no handoff failures, just coordinated delivery.',
  },
]

export default function StatsSection() {
  return (
    <section
      style={{
        background: '#ffffff',
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
            paddingBottom: '80px',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '80px',
          }}
          className="stats-row"
        >
          {[
            { v: '2019', s: '',    l: 'Year Founded',       sub: 'Over half a decade in operation' },
            { v: '50',   s: '+',   l: 'Engineers Deployed',  sub: 'Across Africa and beyond' },
            { v: '7',    s: '+',   l: 'Products Shipped',    sub: 'From fintech to consumer apps' },
            { v: '100',  s: '%',   l: 'Client Satisfaction', sub: 'Measured by project completion' },
          ].map((s) => (
            <div key={s.l}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: 'var(--blue)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                <Counter target={s.v} suffix={s.s} />
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}>
                {s.l}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}>
                {s.sub}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Why Us ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="why-grid">

          {/* Left: heading + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Why JaytechHub
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
              The standard most agencies can't meet.
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '440px',
            }}>
              We were built to solve the talent-quality problem in African tech.
              Every process we have exists to guarantee delivery — not just effort.
            </p>
            <a href="/#inquiry" className="btn-primary">
              Start a Conversation
              <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Right: differentiators */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-light)', borderRadius: '12px', overflow: 'hidden' }}>
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{
                  background: '#ffffff',
                  padding: '28px 32px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
              >
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  {d.title}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13.5px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}>
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  )
}

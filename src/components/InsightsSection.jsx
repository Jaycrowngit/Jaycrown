import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const articles = [
  {
    category: 'Engineering',
    title: 'Why African Startups Fail at Scaling: The Engineering Debt Problem',
    excerpt: 'Most early-stage African startups ship fast, but few survive the transition to scale. The culprit is almost always technical debt accumulated in the founding sprint.',
    readTime: '5 min read',
    date: 'Jan 2025',
    accent: '#1B4FD8',
  },
  {
    category: 'Product',
    title: 'The Case for Design Systems Before Your First Product Launch',
    excerpt: 'A design system is not a luxury for later. Companies that invest in component libraries early consistently ship faster and more consistently in later stages.',
    readTime: '4 min read',
    date: 'Feb 2025',
    accent: '#7C3AED',
  },
  {
    category: 'Hiring',
    title: 'How to Evaluate a Software Vendor Before Signing the Contract',
    excerpt: 'Most vendor selection mistakes happen before the engagement begins. Here are the 8 questions you should be asking — and the answers that should make you walk away.',
    readTime: '6 min read',
    date: 'Mar 2025',
    accent: '#0D6E4F',
  },
]

export default function InsightsSection() {
  return (
    <section
      id="insights"
      style={{
        background: 'var(--bg-dark)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="grid-bg-dark absolute inset-0 pointer-events-none" />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', gap: '32px', flexWrap: 'wrap' }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.40)' }}>
              <span className="eyebrow-dot" style={{ background: 'rgba(255,255,255,0.30)' }} />
              Thought Leadership
            </div>
            <h2 className="heading-lg" style={{ color: '#ffffff' }}>
              Insights from the field.
            </h2>
          </div>
          <a href="#" className="link-arrow link-arrow-dark" style={{ marginBottom: '8px', flexShrink: 0 }}>
            View All Articles
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}
          className="insights-grid"
        >
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.10, duration: 0.6 }}
              style={{
                background: 'var(--bg-dark)',
                padding: '36px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-dark-subtle)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-dark)'}
            >
              {/* Category */}
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: a.accent,
                marginBottom: '20px',
                display: 'block',
              }}>
                {a.category}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#ffffff',
                lineHeight: 1.35,
                marginBottom: '16px',
                letterSpacing: '-0.01em',
                flex: 1,
              }}>
                {a.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13.5px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.42)',
                marginBottom: '28px',
              }}>
                {a.excerpt}
              </p>

              {/* Meta */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={12} color="rgba(255,255,255,0.25)" />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.30)',
                  }}>
                    {a.readTime}
                  </span>
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.25)',
                }}>
                  {a.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

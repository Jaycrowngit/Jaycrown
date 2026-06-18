import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const services = [
  { label: 'Web Development', desc: 'Enterprise web applications & SaaS platforms' },
  { label: 'Mobile Apps', desc: 'iOS & Android native and cross-platform' },
  { label: 'UI/UX Design', desc: 'Product design from research to pixel-perfect' },
  { label: 'DevOps & Cloud', desc: 'Infrastructure, CI/CD, and cloud architecture' },
  { label: 'Graphic Design', desc: 'Brand identity, visual systems, motion' },
  { label: 'Full-Stack Teams', desc: 'Dedicated engineering squads on demand' },
]

const navLinks = [
  { label: 'Services', hasDropdown: true },
  { label: 'About',    href: '/#about' },
  { label: 'Work',     href: '/#work' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Careers',  href: '/#careers' },
]

export default function Navigation() {
  const [isOpen,         setIsOpen]         = useState(false)
  const [scrolled,       setScrolled]       = useState(false)
  const [servicesOpen,   setServicesOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-0' : 'py-0'}`}
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(8,13,31,0.10)' : 'rgba(8,13,31,0.07)'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(8,13,31,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* ── Logo ── */}
          <Link to="/" id="nav-logo" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: '32px', height: '32px', borderRadius: '6px',
                background: 'var(--navy)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="7" width="3" height="6" rx="1" fill="white" opacity="0.5"/>
                <rect x="5.5" y="4" width="3" height="9" rx="1" fill="white" opacity="0.75"/>
                <rect x="10" y="1" width="3" height="12" rx="1" fill="white"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              color: 'var(--navy)',
            }}>
              JAYTECH<span style={{ color: 'var(--blue)' }}>HUB</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center" style={{ gap: '2px' }}>
            {navLinks.map(link => (
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1.5 px-4 py-2 rounded transition-colors"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: servicesOpen ? 'var(--blue)' : 'var(--text-secondary)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                    <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 4px)',
                          left: '-20px',
                          width: '360px',
                          background: '#ffffff',
                          border: '1px solid rgba(8,13,31,0.08)',
                          borderRadius: '12px',
                          boxShadow: '0 20px 60px rgba(8,13,31,0.12)',
                          padding: '12px',
                          zIndex: 100,
                        }}
                      >
                        {services.map(s => (
                          <a
                            key={s.label}
                            href="/#services"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '2px',
                              padding: '10px 14px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'var(--text-primary)' }}>
                              {s.label}
                            </span>
                            <span style={{ fontFamily: 'Inter', fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                              {s.desc}
                            </span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#inquiry"
              id="nav-cta"
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '12.5px' }}
            >
              Get in Touch
              <ArrowRight size={14} />
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center"
            style={{
              width: '40px', height: '40px',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--text-primary)',
            }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              background: '#ffffff',
              borderTop: '1px solid var(--border-light)',
            }}
          >
            <div style={{ padding: '16px 20px 24px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href || '/#services'}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  {link.label}
                </motion.a>
              ))}
              <div style={{ height: '1px', background: 'var(--border-light)', margin: '12px 0' }} />
              <a
                href="/#inquiry"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', borderRadius: '8px' }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

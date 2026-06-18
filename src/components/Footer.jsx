import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const services   = ['Web Development', 'Mobile Applications', 'UI/UX Design', 'DevOps & Cloud', 'Visual Design', 'Dedicated Teams']
const company    = [
  { label: 'About Us',    href: '/#about' },
  { label: 'Our Work',    href: '/#work' },
  { label: 'Insights',    href: '/#insights' },
  { label: 'Careers',     href: '/#careers' },
  { label: 'Contact',     href: '/#inquiry' },
]
const socials = [
  { icon: Linkedin, label: 'LinkedIn',  href: '#' },
  { icon: Twitter,  label: 'X/Twitter', href: '#' },
  { icon: Github,   label: 'GitHub',    href: '#' },
  { icon: Mail,     label: 'Email',     href: 'mailto:hello@jaytechhub.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        color: 'rgba(255,255,255,0.55)',
        padding: '80px 0 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* ── CTA Banner ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            padding: '48px 56px',
            borderRadius: '16px',
            background: 'var(--blue)',
            marginBottom: '72px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '10px',
            }}>
              Ready to build something significant?
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.70)',
            }}>
              Tell us about your project — we'll respond within 24 hours.
            </p>
          </div>
          <a
            href="/#inquiry"
            id="footer-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              color: 'var(--blue)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '13.5px',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Start a Project →
          </a>
        </div>

        {/* ── Footer Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            paddingBottom: '64px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link to="/" id="footer-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px',
                background: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="7" width="3" height="6" rx="1" fill="#080D1F" opacity="0.4"/>
                  <rect x="5.5" y="4" width="3" height="9" rx="1" fill="#080D1F" opacity="0.7"/>
                  <rect x="10" y="1" width="3" height="12" rx="1" fill="#080D1F"/>
                </svg>
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '1.05rem',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}>
                JAYTECHHUB
              </span>
            </Link>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13.5px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.38)',
              maxWidth: '280px',
              marginBottom: '28px',
            }}>
              A B2B technology company delivering full-cycle software engineering 
              and design for ambitious organizations.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
              marginBottom: '20px',
            }}>
              Services
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {services.map(s => (
                <li key={s}>
                  <a
                    href="/#services"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13.5px',
                      color: 'rgba(255,255,255,0.38)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
              marginBottom: '20px',
            }}>
              Company
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {company.map(c => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13.5px',
                      color: 'rgba(255,255,255,0.38)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
              marginBottom: '20px',
            }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:hello@jaytechhub.com"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,0.38)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
              >
                hello@jaytechhub.com
              </a>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(255,255,255,0.25)' }}>
                Lagos, Nigeria
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(255,255,255,0.25)' }}>
                Remote-first · Global clients
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.20)',
          }}>
            © {year} JaytechHub. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.20)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.20)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

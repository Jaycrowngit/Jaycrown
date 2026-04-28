import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'Services',    href: '/#services' },
  { label: 'Our Work',    href: '/#work' },
  { label: 'About',       href: '/#about' },
  { label: 'Contact',     href: '/#inquiry' },
]

export default function Navigation({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${
      scrolled
        ? 'py-3 border-b border-theme'
        : 'py-5'
    }`} style={{ 
      background: scrolled ? 'var(--bg-primary)' : 'transparent', 
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      opacity: scrolled ? 0.96 : 1
    }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg opacity-30 group-hover:opacity-60 transition-opacity blur-md"
                style={{ background: 'linear-gradient(135deg,#2dffc4,#00e5ff)' }} />
              <div className="relative w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
                style={{ background: 'linear-gradient(135deg,#2dffc4,#00b4d8)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12V8M5.5 12V4M9 12V7M12.5 12V2" stroke="#060f1e" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-black tracking-tighter text-theme-primary">
              JAYTECH<span className="text-meltgreen">HUB</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: 'Services', href: '#services' },
              { name: 'Work', href: '#work' },
              { name: 'About', href: '#about' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-theme-secondary hover:text-meltgreen transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-4 w-px bg-theme-primary opacity-10 mx-2" />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                darkMode ? 'bg-white/5 text-white/70 hover:bg-white/10' : 'bg-[#050c18]/5 text-[#050c18]/70 hover:bg-[#050c18]/10'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA */}
            <a href="/#inquiry"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#060f1e] transition-transform hover:-translate-y-0.5 active:scale-95"
              style={{ background: 'linear-gradient(90deg,#2dffc4,#00e5ff)', boxShadow: '0 0 20px rgba(45,255,196,0.25)' }}>
              Hire a Dev
            </a>

            {/* Mobile toggle */}
            <button className={`md:hidden p-2 rounded-lg transition-all ${
              darkMode ? 'text-white/60 hover:text-white hover:bg-white/8' : 'text-[#050c18]/60 hover:text-[#050c18] hover:bg-[#050c18]/8'
            }`}
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/5 overflow-hidden"
            style={{ background: '#060f1e' }}>
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 font-semibold text-sm uppercase tracking-wider transition-all">
                  <span className="w-1 h-1 rounded-full bg-[#2dffc4]" />
                  {link.label}
                </motion.a>
              ))}
              <div className="h-px bg-white/5 my-3" />
              <a href="/#inquiry" onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl text-center font-bold text-sm text-[#060f1e]"
                style={{ background: 'linear-gradient(90deg,#2dffc4,#00e5ff)' }}>
                Hire a Developer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

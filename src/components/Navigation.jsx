import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#work' },
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/#inquiry' },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-deep-space flex items-center justify-center rounded-lg group-hover:bg-meltgreen transition-colors duration-300">
              <span className="text-white font-bold text-xl group-hover:text-deep-space transition-colors">J</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-deep-space' : 'text-deep-space'}`}>
              JAYTECH<span className="text-meltgreen">HUB</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-deep-space/70 hover:text-deep-space transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              className="bg-meltgreen text-deep-space px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(45,255,196,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-deep-space"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-bold text-deep-space"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inquiry"
                className="bg-meltgreen text-deep-space w-full py-4 rounded-xl text-center font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

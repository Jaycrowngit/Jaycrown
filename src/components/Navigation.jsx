import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  }

  const navLinks = [
    { label: 'Work', href: '/#live-lab' },
    { label: 'Freelance', href: '/freelance' },
    { label: 'Partner', href: '/partner' },
    { label: 'Collaborate', href: '/collaborate' },
    { label: 'Hire Me', href: '/hire' },
    { label: '⭐ Reviews', href: '/reviews' },
    { label: '📊 Submissions', href: '/submissions' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-meltgreen border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-xl font-bold text-slate-900 hover:text-meltgreen transition-smooth"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-meltgreen/20 via-white to-white border border-meltgreen/30 shadow-sm">
              <img src="/logo_2.png" alt="Jaycrown logo" className="h-8 w-8 rounded-xl" />
            </span>
            <span>Jay<span className="text-white">crownHub</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-deep-space hover:text-meltgreen transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="text-deep-space" />
            ) : (
              <Menu size={24} className="text-deep-space" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-x-0 top-16 bottom-0 bg-black/10 backdrop-blur-sm z-39 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-[38%] bg-meltgreen z-40 pt-4 md:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/20 transition-smooth"
                aria-label="Close menu"
              >
                <X size={28} className="text-deep-space" />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col space-y-1 px-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="rounded-lg hover:bg-white/20 transition-smooth"
                  >
                    <Link
                      to={link.href}
                      className="text-lg font-semibold text-deep-space hover:text-deep-space/80 transition-smooth block py-2 px-3 text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

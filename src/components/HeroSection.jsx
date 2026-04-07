import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(45,255,196,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(10,25,47,0.12),transparent_28%),linear-gradient(180deg,#f8fafc,#eaf6ff)] flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-80 h-80 rounded-full bg-meltgreen/15 blur-3xl" />
        <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-deep-space/10 blur-3xl" />
        <div className="absolute top-24 right-28 w-40 h-40 rounded-full bg-meltgreen/20 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block px-4 py-2 bg-meltgreen/10 border border-meltgreen/30 rounded-full">
              <span className="text-sm font-semibold text-meltgreen">
                Jaycrown TechHub
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="space-y-2">
            <span className="block text-5xl md:text-7xl font-bold text-deep-space leading-tight">
              Build Systems,
            </span>
            <span className="block text-5xl md:text-7xl font-bold">
              Not{' '}
              <span className="bg-gradient-to-r from-meltgreen to-meltgreen bg-clip-text text-transparent">
                Websites
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Senior full-stack engineer specializing in high-scale distributed systems,
            microservices architecture, and production-grade infrastructure.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#interaction-hub"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(45, 255, 196, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-meltgreen text-deep-space font-semibold rounded-lg transition-smooth cursor-pointer inline-block"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#live-lab"
              whileHover={{ scale: 1.05, borderColor: '#2DFFC4' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-deep-space text-deep-space font-semibold rounded-lg transition-smooth cursor-pointer inline-block hover:bg-gray-50"
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-meltgreen"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}

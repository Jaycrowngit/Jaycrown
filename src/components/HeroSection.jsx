import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Background minimalist elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-meltgreen/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-deep-space/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-deep-space text-white">
              Enterprise Grade Solutions
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-bold text-deep-space tracking-tight leading-[1.1] mb-8"
          >
            Scalable Systems.<br />
            <span className="text-meltgreen">Intuitive</span> Design.<br />
            Integrated Architecture.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-deep-space/60 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            We engineer high-performance digital ecosystems for forward-thinking enterprises. 
            Our team transforms complex requirements into seamless, scalable experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="#inquiry"
              className="px-10 py-5 bg-deep-space text-white font-bold rounded-full hover:bg-meltgreen hover:text-deep-space transition-all duration-300 shadow-xl shadow-deep-space/10 hover:shadow-meltgreen/20"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="px-10 py-5 border-2 border-deep-space text-deep-space font-bold rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-deep-space/30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

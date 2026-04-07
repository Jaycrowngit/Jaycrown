import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  TrendingUp,
  Users,
  Rocket,
} from 'lucide-react'

export default function InteractionHub() {
  const pillars = [
    {
      id: 1,
      title: 'Freelance',
      description: 'Project-based work with clear scope and deliverables.',
      icon: Briefcase,
      href: '/freelance',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Partner',
      description: 'Long-term equity partnerships for visionary startups.',
      icon: TrendingUp,
      href: '/partner',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Collaborate',
      description: 'Open-source and peer development opportunities.',
      icon: Users,
      href: '/collaborate',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 4,
      title: 'Hire Me',
      description: 'Full-time opportunities and contract positions.',
      icon: Rocket,
      href: '/hire',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="interaction-hub" className="py-16 bg-gradient-to-br from-gray-50 via-deep-space/5 to-meltgreen/10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-deep-space/6 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-deep-space mb-3">
            The Interaction Hub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Four distinct pathways to collaborate. Choose the engagement model that
            fits your vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link to={pillar.href} className="h-full">
                  <motion.div
                    whileHover={{ borderColor: '#2DFFC4' }}
                    className="h-full bg-white border border-gray-200 rounded-xl p-6 transition-smooth hover:shadow-lg cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 text-white`}
                    >
                      <IconComponent size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-deep-space mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-6 flex-grow">
                      {pillar.description}
                    </p>

                    <div className="flex items-center gap-2 text-meltgreen font-semibold text-sm group">
                      <span>Explore</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

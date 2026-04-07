import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PartnerMarquee() {
  const partners = [
    { id: 1, name: 'TechCorp', initials: 'TC' },
    { id: 2, name: 'CloudScale', initials: 'CS' },
    { id: 3, name: 'DevHub', initials: 'DH' },
    { id: 4, name: 'FinanceFlow', initials: 'FF' },
    { id: 5, name: 'DataSync', initials: 'DS' },
    { id: 6, name: 'CodeForce', initials: 'CF' },
  ]

  const [hoveredId, setHoveredId] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-meltgreen/5 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-deep-space/4 rounded-full blur-3xl" />
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600">
            Partnered with forward-thinking companies scaling at pace.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredId(partner.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="flex items-center justify-center p-6 rounded-lg border border-gray-200 bg-white cursor-pointer transition-smooth"
            >
              <div
                className={`text-center transition-all duration-300 ${
                  hoveredId === partner.id
                    ? 'text-meltgreen font-bold'
                    : 'text-gray-400 font-semibold'
                }`}
              >
                <div className="text-2xl mb-2 font-mono">{partner.initials}</div>
                <div className="text-xs whitespace-nowrap">{partner.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

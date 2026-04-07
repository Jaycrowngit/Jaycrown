import { motion } from 'framer-motion'

export default function LiveLab() {
  const projects = [
    {
      id: 1,
      title: 'Real-Time Data Platform',
      status: 'Live',
      progress: 78,
      challenge: 'Optimizing for 100k concurrent users',
      systemArch: 'React + Node.js + PostgreSQL + Redis',
      tech: ['React 18', 'WebSocket', 'GraphQL'],
      timeline: '6 months in',
    },
    {
      id: 2,
      title: 'Microservices Orchestration',
      status: 'Live',
      progress: 65,
      challenge: 'Kubernetes cluster autoscaling at scale',
      systemArch: 'Go microservices + Kubernetes + Prometheus',
      tech: ['Go', 'Docker', 'Kubernetes'],
      timeline: '4 months in',
    },
    {
      id: 3,
      title: 'AI Analytics Engine',
      status: 'Live',
      progress: 52,
      challenge: 'ML model inference with <100ms latency',
      systemArch: 'Python FastAPI + TensorFlow + TimescaleDB',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      timeline: '2 months in',
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
  }

  return (
    <section id="live-lab" className="py-16 bg-gradient-to-br from-white via-deep-space/5 to-meltgreen/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-meltgreen/8 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-meltgreen rounded-full animate-pulse-glow" />
            <span className="text-sm font-semibold text-meltgreen">LIVE PROJECTS</span>
          </div>
          <h2 className="text-3xl font-bold text-deep-space mb-3">
            The Live Lab
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Current sprints on high-scale systems. Active work across production environments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-smooth hover:border-meltgreen hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-deep-space mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500">{project.timeline}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-meltgreen/10 rounded-full">
                    <div className="w-2 h-2 bg-meltgreen rounded-full animate-pulse-glow" />
                    <span className="text-xs font-semibold text-meltgreen">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 font-semibold mb-2">
                    Technical Challenge
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    "{project.challenge}"
                  </p>
                </div>

                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    System Architecture
                  </p>
                  <p className="text-xs text-deep-space font-mono">
                    {project.systemArch}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-700">
                      Progress
                    </span>
                    <span className="text-xs font-bold text-meltgreen">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-meltgreen to-meltgreen"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-deep-space/5 text-deep-space rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

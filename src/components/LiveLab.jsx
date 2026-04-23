import { motion } from 'framer-motion'
import { Activity, Server, Layout } from 'lucide-react'

export default function LiveLab() {
  const deployments = [
    {
      id: 1,
      client: 'NexaCore Systems',
      type: 'Enterprise ERP',
      status: 'In Production',
      load: '120k req/s',
      stack: ['Next.js', 'Kubernetes', 'Redis'],
      metrics: { uptime: '99.99%', latency: '45ms' }
    },
    {
      id: 2,
      client: 'Global Logistics',
      type: 'Tracking Engine',
      status: 'Scaling',
      load: '50k updates/m',
      stack: ['Go', 'gRPC', 'PostgreSQL'],
      metrics: { uptime: '99.95%', latency: '12ms' }
    },
    {
      id: 3,
      client: 'FinTech Solutions',
      type: 'Payment Hub',
      status: 'Security Audit',
      load: 'Audit Phase',
      stack: ['React', 'Node.js', 'AWS Lamba'],
      metrics: { uptime: '100%', latency: '85ms' }
    }
  ]

  return (
    <section id="in-production" className="py-32 bg-deep-space text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-meltgreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-meltgreen"></span>
              </span>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-meltgreen">Live Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ongoing Client <br /> 
              <span className="text-white/40">Deployments</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-lg leading-relaxed">
            Real-time monitoring of systems currently under our management and scaling protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deployments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.client}</h3>
                  <p className="text-xs text-meltgreen font-bold tracking-widest uppercase">{item.type}</p>
                </div>
                <div className="bg-meltgreen/10 text-meltgreen px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-[0_0_15px_rgba(45,255,196,0.1)]">
                  {item.status}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Activity size={18} className="text-white/40" />
                    <span className="text-xs text-white/60">Real-time Load</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-meltgreen">{item.load}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/20 rounded-2xl">
                    <p className="text-[10px] text-white/40 uppercase font-black mb-1">Uptime</p>
                    <p className="text-lg font-bold">{item.metrics.uptime}</p>
                  </div>
                  <div className="p-4 bg-black/20 rounded-2xl">
                    <p className="text-[10px] text-white/40 uppercase font-black mb-1">Latency</p>
                    <p className="text-lg font-bold">{item.metrics.latency}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-white/60 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

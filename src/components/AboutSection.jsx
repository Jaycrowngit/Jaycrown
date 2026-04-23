import { motion } from 'framer-motion'
import { Shield, Target, Zap } from 'lucide-react'

export default function AboutSection() {
  const pillars = [
    {
      title: 'Reliability',
      description: 'We build systems with 99.99% uptime in mind, ensuring your business never sleeps.',
      icon: <Shield className="text-meltgreen" size={24} />
    },
    {
      title: 'Precision',
      description: 'Our architectural decisions are data-driven and focused on long-term scalability.',
      icon: <Target className="text-meltgreen" size={24} />
    },
    {
      title: 'Velocity',
      description: 'Rapid deployment pipelines that allow your team to iterate and launch faster.',
      icon: <Zap className="text-meltgreen" size={24} />
    }
  ]

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-meltgreen mb-6">About the Hub</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-deep-space tracking-tight mb-8">
              We engineer the <br /> infrastructure of tomorrow.
            </h3>
            <p className="text-xl text-deep-space/60 leading-relaxed mb-12">
              Jaytech Hub is a premier engineering collective specializing in high-performance digital ecosystems. 
              We move beyond simple "development" to provide integrated architectural planning and execution.
            </p>
            
            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-space mb-1">{pillar.title}</h4>
                    <p className="text-deep-space/60">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-deep-space rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
               <div className="absolute inset-0 bg-gradient-to-br from-meltgreen/20 to-transparent"></div>
               {/* Use an abstract tech image or a team shot placeholder */}
               <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/10 font-black text-9xl">JTH</span>
               </div>
            </div>
            {/* Floating stats badge */}
            <div className="absolute -bottom-10 -left-10 bg-white shadow-2xl p-8 rounded-[2rem] border border-gray-100 hidden md:block">
              <p className="text-5xl font-black text-deep-space mb-1">50+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-deep-space/40">Enterprises Scaled</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

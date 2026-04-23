import { motion } from 'framer-motion'
import { Globe, Smartphone, Cloud, PenTool, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Web Ecosystems',
    description: 'Custom scalable frontend and backend architectures designed for high-traffic enterprise environments.',
    icon: <Globe className="w-8 h-8" />,
    className: 'md:col-span-2 md:row-span-2 bg-deep-space text-white',
  },
  {
    title: 'Mobile Apps',
    description: 'Native performance with Cross-platform efficiency using Flutter and React Native.',
    icon: <Smartphone className="w-8 h-8" />,
    className: 'bg-gray-50 text-deep-space',
  },
  {
    title: 'DevOps & Infra',
    description: 'Cloud architecture, CI/CD pipelines, and automated scaling solutions.',
    icon: <Cloud className="w-8 h-8" />,
    className: 'bg-gray-50 text-deep-space',
  },
  {
    title: 'Design Systems',
    description: 'UI/UX, Graphic & Social Media Design that scales across your entire digital presence.',
    icon: <PenTool className="w-8 h-8" />,
    className: 'md:col-span-2 bg-meltgreen text-deep-space',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-meltgreen mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-deep-space tracking-tight">
            Integrated engineering for <br className="hidden md:block" /> 
            modern digital business.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:shadow-2xl ${service.className}`}
            >
              <div>
                <div className={`p-3 rounded-2xl inline-block mb-6 ${
                  service.title === 'Web Ecosystems' ? 'bg-white/10' : 'bg-deep-space/5'
                }`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className={`text-sm leading-relaxed ${
                  service.title === 'Web Ecosystems' ? 'text-white/60' : 'text-deep-space/60'
                }`}>
                  {service.description}
                </p>
              </div>
              <div className="flex justify-end">
                <div className={`p-2 rounded-full border transition-all duration-300 ${
                  service.title === 'Web Ecosystems' 
                    ? 'border-white/20 group-hover:bg-meltgreen group-hover:text-deep-space group-hover:border-meltgreen' 
                    : 'border-deep-space/10 group-hover:bg-deep-space group-hover:text-white group-hover:border-deep-space'
                }`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

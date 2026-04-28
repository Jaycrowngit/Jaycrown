import { motion } from 'framer-motion'

const staffMembers = [
  {
    name: 'John Adeoye',
    role: 'Technical Program Manager',
    focus: 'Cross-functional engineering leadership',
    image: '/profile.png',
  },
  {
    name: 'Olajide Suara',
    role: 'Visual Design Lead',
    focus: 'Human-centric digital systems',
    image: '/staff_olajide.webp',
  },
  {
    name: 'Mayor',
    role: 'Principal Frontend Engineer',
    focus: 'High-performance scalable architecture',
    image: '/staff.png',
  },
  {
    name: 'Danial',
    role: 'Infrastructure Architect',
    focus: 'DevOps & automation pipelines',
    image: '/staff.png',
  },
  {
    name: 'John Sause',
    role: 'Product Analyst',
    focus: 'Data-driven growth strategies',
    image: '/staff.png',
  },
  {
    name: 'Bolexy',
    role: 'Engineering Strategist',
    focus: 'Product-market alignment',
    image: '/staff.png',
  },
  {
    name: 'Emmanuel',
    role: 'Quality Engineer',
    focus: 'Production-grade reliability',
    image: '/staff.png',
  },
  {
    name: 'Precious',
    role: 'Customer Solutions',
    focus: 'Technical outcome alignment',
    image: '/staff.png',
  },
]

export default function TeamSection() {
  return (
    <section id="meet-our-staff" className="py-32 transition-colors duration-500 bg-theme-secondary relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Mature Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-20 mb-6 block">
                The Engineering Collective
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-theme-primary tracking-tight mb-8 uppercase">
                Specialized talent, <br /> integrated workflows.
              </h2>
              <p className="text-lg text-theme-secondary leading-relaxed max-w-xl font-medium">
                Our hub is built on specialized technical expertise. We don't just provide 
                manpower; we provide integrated engineering and design solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Staff Grid */}
        <div className="grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((staff, index) => (
            <motion.article 
              key={staff.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col gap-6">
                {/* Clean Image Container */}
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-theme-tertiary grayscale hover:grayscale-0 transition-all duration-700 relative">
                  <img src={staff.image} alt={staff.name} className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Details */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-theme-primary tracking-tight">{staff.name}</h3>
                  <p className="text-[10px] font-bold text-[#2dffc4] uppercase tracking-widest bg-black/5 dark:bg-white/10 inline-block px-2 py-0.5 rounded">
                    {staff.role}
                  </p>
                  <div className="pt-3">
                    <p className="text-xs text-theme-secondary font-medium leading-relaxed group-hover:text-theme-primary transition-colors">
                      {staff.focus}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

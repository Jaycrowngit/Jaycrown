import { motion } from 'framer-motion'

const staffMembers = [
  { name: 'John Adeoye',   role: 'Technical Program Manager', focus: 'Cross-functional engineering leadership', image: '/profile.png' },
  { name: 'Olajide Suara', role: 'Visual Design Lead',        focus: 'Human-centric digital systems',           image: '/staff_olajide.webp' },
  // { name: 'Mayor',         role: 'Principal Frontend Engineer',focus: 'High-performance scalable architecture',  image: '/staff.png' },
  // { name: 'Danial',        role: 'Infrastructure Architect',   focus: 'DevOps & automation pipelines',           image: '/staff.png' },
  // { name: 'John Sause',    role: 'Product Analyst',            focus: 'Data-driven growth strategies',           image: '/staff.png' },
  // { name: 'Bolexy',        role: 'Engineering Strategist',     focus: 'Product-market alignment',                image: '/staff.png' },
  // { name: 'Emmanuel',      role: 'Quality Engineer',           focus: 'Production-grade reliability',            image: '/staff.png' },
  // { name: 'Precious',      role: 'Customer Solutions',         focus: 'Technical outcome alignment',             image: '/staff.png' },
]

export default function TeamSection() {
  return (
    <section id="meet-our-staff" className="py-28 bg-white relative overflow-hidden">

      {/* Subtle blue glow */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[400px] pointer-events-none blur-[130px]"
        style={{ background: 'radial-gradient(ellipse, rgba(41,82,255,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="section-eyebrow">The Engineering Collective</span>
            <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight leading-[1.08]">
              Specialized talent,<br />
              <span className="grad-text">integrated workflows.</span>
            </h2>
          </div>
          <p className="text-theme-secondary text-sm leading-relaxed max-w-xs md:text-right">
            Our hub delivers integrated engineering and design solutions — not just manpower.
          </p>
        </motion.div>

        {/* Staff grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((staff, index) => (
            <motion.article key={staff.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.055 }}
              className="group">
              <div className="flex flex-col gap-4">

                {/* Image container */}
                <div className="aspect-[4/5] overflow-hidden rounded-2xl relative border"
                  style={{ borderColor: 'rgba(13,21,53,0.08)' }}>
                  <img src={staff.image} alt={staff.name}
                    className="h-full w-full object-cover scale-[1.04] group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(13,21,53,0.55) 0%, transparent 55%)' }} />

                  {/* Slide-up role chip */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                    <span className="inline-block text-[8.5px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(41,82,255,0.20)',
                        border: '1px solid rgba(41,82,255,0.40)',
                        color: '#ffffff',
                        backdropFilter: 'blur(8px)',
                      }}>
                      {staff.role}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1 px-1">
                  <h3 className="text-base font-bold text-ink tracking-tight">{staff.name}</h3>
                  <p className="text-[9.5px] font-bold uppercase tracking-widest"
                    style={{ color: '#2952FF' }}>
                    {staff.role}
                  </p>
                  <p className="text-xs text-theme-secondary leading-relaxed pt-1">{staff.focus}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

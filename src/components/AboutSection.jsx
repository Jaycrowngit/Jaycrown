import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const milestones = [
  {
    year: '2019',
    title: 'Founded',
    detail: 'JaytechHub was founded with one goal — remove the friction between organisations and the developers they need to build great products.',
  },
  {
    year: '2020',
    title: 'First Product Shipped',
    detail: 'We delivered Naira4coin (now myTrader), a cross-platform crypto-to-Naira fintech app used by thousands of users across Nigeria.',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    detail: 'Grew our talent network to cover Full-Stack Development, Mobile, DevOps, UI/UX, and Graphic Design — one hub, every discipline.',
  },
  {
    year: '2022',
    title: 'MobileNig & Raolak Platforms',
    detail: 'Built MobileNig, a utility payments app, and the Raolak Event ticketing and management platform — live and serving real businesses.',
  },
  {
    year: '2023',
    title: 'AI & Enterprise Work',
    detail: 'Developed WhatsApp AI automation agents and launched Bubu Browser on the Google Play Store — scaling into intelligent product delivery.',
  },
  {
    year: '2024+',
    title: 'Growing the Network',
    detail: 'Today we staff development teams across Africa and beyond, helping organisations of all sizes build, launch, and scale their digital products.',
  },
]

const principles = [
  'We only place people we would hire ourselves.',
  'Clear scoping before any work begins.',
  'Transparent communication, always.',
  'We stay until the product ships.',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 overflow-hidden relative transition-colors duration-500 bg-theme-secondary">
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(45,255,196,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-[100px] bg-[#2dffc4]/10"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* left — story */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase mb-6 text-meltgreen">
              The JaytechHub Narrative
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-theme-primary leading-[1.1] tracking-tight mb-8">
              We're the engine behind<br /> <span className="text-[#2dffc4]">high-velocity</span> teams.
            </h2>
            <p className="text-theme-secondary leading-relaxed text-lg mb-6 font-medium">
              JaytechHub is a technology talent collective based in Nigeria. Since 2019, we've deployed
              specialized engineering teams and designers to scale startups and enterprises globally.
            </p>
            <p className="opacity-40 text-theme-primary leading-relaxed text-[1.02rem] mb-10">
              Our mission is simple: eliminate the barrier between visionary ideas and technical execution. 
              We operate at the intersection of precision engineering and strategic product design.
            </p>

            {/* principles */}
            <div className="space-y-3">
              {principles.map(p => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: '#2dffc4' }} />
                  <span className="text-sm text-theme-secondary font-medium">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right — stat cards */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 gap-4">
            {[
              { v: '2019', l: 'Year Founded', bg: 'bg-theme-tertiary', text: 'text-meltgreen' },
              { v: '7+', l: 'Live Products', bg: 'bg-theme-tertiary', text: 'text-meltgreen' },
              { v: '50+', l: 'Engineers Deployed', bg: 'bg-theme-tertiary', text: 'text-meltgreen' },
              { v: '100%', l: 'Project Satisfaction', bg: 'bg-theme-tertiary', text: 'text-meltgreen' },
            ].map(({ v, l, bg, text }) => (
              <div key={l} className={`rounded-2xl p-7 flex flex-col justify-between min-h-[140px] transition-colors ${bg}`}>
                <span className={`text-3xl font-black ${text}`}>{v}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] font-semibold mt-2 opacity-40">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-theme-secondary opacity-30 mb-10">Our Journey</p>
          <div className="relative">
            {/* line */}
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-theme-secondary opacity-10 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-6 md:gap-10 items-start group">
                  {/* year badge */}
                  <div className={`shrink-0 w-16 h-10 rounded-xl flex items-center justify-center text-[11px] font-black tracking-wider transition-all duration-300 group-hover:scale-105 ${
                    i === milestones.length - 1 ? 'bg-meltgreen text-deep-space' : 'bg-theme-tertiary text-meltgreen'
                  }`}>
                    {m.year}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold text-theme-primary text-[0.95rem] mb-1 uppercase tracking-tight">{m.title}</p>
                    <p className="text-sm text-theme-secondary leading-relaxed font-medium">{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

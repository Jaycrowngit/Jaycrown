import { motion } from 'framer-motion'

const partners = [
  { name: 'Raolak Properties', logoSrc: '/rpllogo.png', scale: 'scale-[1.65]' },
  { name: 'Brainaics Africa',  logoSrc: '/brainaics-logo.png' },
  { name: 'myTrader',          abbr: 'MT' },
  { name: 'MobileNig',        logoSrc: '/mobilenig_logo.png', scale: 'scale-[1.3]' },
  { name: 'Rayy Varieties',   logoSrc: '/rayy.png', scale: 'scale-[1.2]' },
  { name: 'Raolak Event',     abbr: 'RE' },
]

function Logo({ p }) {
  return (
    <motion.div whileHover={{ scale: 1.08 }}
      className="flex items-center gap-3 cursor-pointer group shrink-0">
      <div className={`w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center border transition-colors duration-300 ${
        p.logoSrc
          ? 'bg-white border-white/10'
          : 'bg-white/5 border-white/8 group-hover:border-[#2dffc4]/30'
      }`}>
        {p.logoSrc
          ? <img src={p.logoSrc} alt={p.name} className={`w-full h-full object-contain ${p.scale || ''}`} />
          : <span className="text-xs font-black text-white/40 group-hover:text-[#2dffc4] transition-colors">{p.abbr}</span>
        }
      </div>
      <span className="text-sm font-semibold text-white/30 group-hover:text-white/60 transition-colors tracking-wide whitespace-nowrap">
        {p.name}
      </span>
    </motion.div>
  )
}

export default function PartnerMarquee() {
  const doubled = [...partners, ...partners, ...partners]

  return (
    <section className="relative py-14 overflow-hidden border-y border-theme transition-colors duration-500 bg-theme-secondary">
      {/* Refined Gradient Mask for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" 
        style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none" 
        style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />
      
      <p className="text-center text-[9px] uppercase tracking-[0.4em] font-black text-theme-muted mb-10">
        Engineered for leaders
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-14 items-center"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}>
          {doubled.map((p, i) => <Logo key={i} p={p} />)}
        </motion.div>
      </div>
    </section>
  )
}

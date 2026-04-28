import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Code2, Layers, Palette, Cpu, ChevronDown } from 'lucide-react'

/* ── helpers ── */
const rand = (a, b) => Math.random() * (b - a) + a

/* ── subtle particle canvas ── */
function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    let id
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const pts = Array.from({ length: 45 }, () => ({
      x: rand(0, c.width), y: rand(0, c.height),
      vx: rand(-0.08, 0.08), vy: rand(-0.08, 0.08),
      r: rand(0.5, 1.5), a: rand(0.1, 0.35),
    }))
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      pts.forEach(p => {
        p.x = (p.x + p.vx + c.width) % c.width
        p.y = (p.y + p.vy + c.height) % c.height
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45,255,196,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
        if (d < 120) {
          ctx.beginPath(); ctx.lineWidth = 0.3
          ctx.strokeStyle = `rgba(45,255,196,${0.04 * (1 - d / 120)})`
          ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
        }
      }
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(id) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}

/* ── typewriter hook ── */
function useTypewriter(words, speed = 80, pause = 2500) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const w = words[wi]
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, ci + 1))
        ci + 1 === w.length ? setTimeout(() => setDel(true), pause) : setCi(c => c + 1)
      } else {
        setText(w.slice(0, ci - 1))
        ci - 1 === 0 ? (setDel(false), setWi(i => (i + 1) % words.length), setCi(0)) : setCi(c => c - 1)
      }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [ci, del, wi, words, speed, pause])
  return text
}

const tags = [
  { icon: Code2,  label: 'Software Engineering' },
  { icon: Cpu,    label: 'Backend & DevOps' },
  { icon: Palette, label: 'UI/UX & Product' },
  { icon: Layers, label: 'Visual Design' },
]

const specializations = ['Full-Stack Engineers', 'Mobile Architects', 'Cloud Specialists', 'UX Strategists', 'Brand Designers']

export default function HeroSection() {
  const typedSpecialization = useTypewriter(specializations)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 30, damping: 20 })
  const sy = useSpring(my, { stiffness: 30, damping: 20 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.3 
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section
      onMouseMove={e => { mx.set((e.clientX / window.innerWidth - 0.5) * 20); my.set((e.clientY / window.innerHeight - 0.5) * 15) }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 bg-theme-primary"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <Particles />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(rgba(45,255,196,1) 1px,transparent 1px),linear-gradient(90deg,rgba(45,255,196,1) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        
        {/* Subtle Ambient Glows */}
        <motion.div 
          style={{ x: sx, y: sy }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.05] dark:opacity-[0.05] opacity-[0.02] pointer-events-none blur-[120px]"
        >
          <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, #2dffc4, transparent 70%)' }} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center w-full pt-40 pb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden" 
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Minimalist Top Label with Typewriter */}
          <motion.div variants={itemVariants} className="mb-10 flex flex-col items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-theme-secondary opacity-40 border-b border-theme pb-2">
              Engineering Collective & Design Studio
            </span>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-meltgreen">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Currently Deploying: <span className="text-theme-primary ml-1">{typedSpecialization}</span>
              <span className="w-[2px] h-[1em] bg-current animate-pulse" />
            </div>
          </motion.div>

          {/* Mature Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-black text-theme-primary leading-[1.1] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
          >
            Engineering <span className="opacity-20">the</span> <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #2dffc4, #00e5ff)' }}>
              Digital Frontier.
            </span>
          </motion.h1>

          {/* Precise Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto leading-relaxed font-medium text-theme-secondary mb-12 text-lg md:text-xl"
          >
            We deploy elite engineering teams and specialized designers to build 
            scalable infrastructure and high-conversion digital experiences. 
            Direct. Precise. Impactful.
          </motion.p>

          {/* Refined CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
          >
            <a href="#inquiry"
              className="group relative px-10 py-4 rounded-full font-black text-[13px] uppercase tracking-[0.15em] text-deep-space transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden shadow-lg"
              style={{ background: '#2dffc4' }}>
              <span className="relative z-10">Hire the Hub</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a href="#work"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-black text-[13px] uppercase tracking-[0.15em] text-theme-primary border border-theme hover:border-meltgreen/40 hover:bg-meltgreen/[0.03] transition-all duration-300"
            >
              Our Portfolio
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Integrated Capability Tags */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
            {tags.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <Icon size={18} className="text-meltgreen" strokeWidth={1.5} />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-theme-primary whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-theme-secondary opacity-20 pointer-events-none"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-black">Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>

      {/* Soft Bottom Mask */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
    </section>
  )
}

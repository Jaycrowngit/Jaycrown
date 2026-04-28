import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full transition-colors duration-500 bg-theme-primary text-theme-primary pt-24 pb-12 border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-meltgreen flex items-center justify-center rounded-lg shadow-sm">
                <span className="text-deep-space font-black text-xl">J</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-theme-primary">
                JAYTECH<span className="text-meltgreen">HUB</span>
              </span>
            </Link>
            <p className="text-theme-secondary text-lg leading-relaxed max-w-sm mb-8 font-medium">
              We design and engineer high-scale digital ecosystems for the world's most ambitious companies.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-theme-secondary opacity-40 hover:text-meltgreen transition-colors font-bold text-[10px] uppercase tracking-[0.2em]">LinkedIn</a>
              <a href="#" className="text-theme-secondary opacity-40 hover:text-meltgreen transition-colors font-bold text-[10px] uppercase tracking-[0.2em]">Twitter / X</a>
              <a href="#" className="text-theme-secondary opacity-40 hover:text-meltgreen transition-colors font-bold text-[10px] uppercase tracking-[0.2em]">GitHub</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 mb-8 text-theme-primary">Capabilities</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">Web Ecosystems</a></li>
              <li><a href="#" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">Mobile Apps</a></li>
              <li><a href="#" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">DevOps & Infra</a></li>
              <li><a href="#" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">Design Systems</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 mb-8 text-theme-primary">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">Services</a></li>
              <li><a href="#work" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">Work</a></li>
              <li><a href="#about" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">About Us</a></li>
              <li><a href="#inquiry" className="text-theme-secondary hover:text-meltgreen transition-colors text-sm font-semibold uppercase tracking-tight">Start a Project</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 mb-8 text-theme-primary">Newsletter</h4>
            <p className="text-theme-secondary text-sm mb-6 font-medium">Stay updated on our latest production releases and tech insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-black/5 dark:bg-white/5 border border-theme rounded-xl py-4 px-6 text-sm focus:border-meltgreen outline-none transition-colors text-theme-primary"
              />
              <button className="absolute right-2 top-2 bottom-2 dark:bg-white bg-theme-primary dark:text-deep-space text-theme-tertiary px-4 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-meltgreen hover:text-deep-space transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-theme flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="opacity-20 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; {currentYear} JAYTECH HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="opacity-20 hover:opacity-100 transition-colors text-[10px] font-black uppercase tracking-[0.2em]">PRIVACY POLICY</a>
            <a href="#" className="opacity-20 hover:opacity-100 transition-colors text-[10px] font-black uppercase tracking-[0.2em]">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

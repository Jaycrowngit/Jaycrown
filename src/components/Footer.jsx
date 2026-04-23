import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-deep-space text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-meltgreen flex items-center justify-center rounded-lg">
                <span className="text-deep-space font-bold text-xl">J</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                JAYTECH<span className="text-meltgreen">HUB</span>
              </span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-8">
              We design and engineer high-scale digital ecosystems for the world's most ambitious companies.
            </p>
            <div className="flex gap-6">
              {/* Social icons could go here */}
              <a href="#" className="text-white/40 hover:text-meltgreen transition-colors font-bold text-xs uppercase tracking-widest">LinkedIn</a>
              <a href="#" className="text-white/40 hover:text-meltgreen transition-colors font-bold text-xs uppercase tracking-widest">Twitter / X</a>
              <a href="#" className="text-white/40 hover:text-meltgreen transition-colors font-bold text-xs uppercase tracking-widest">GitHub</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8">Capabilities</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">Web Ecosystems</a></li>
              <li><a href="#" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">Mobile Apps</a></li>
              <li><a href="#" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">DevOps & Infra</a></li>
              <li><a href="#" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">Design Systems</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">Services</a></li>
              <li><a href="#work" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">Work</a></li>
              <li><a href="#about" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="#inquiry" className="text-white/60 hover:text-meltgreen transition-colors text-sm font-medium">Start a Project</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Stay updated on our latest production releases and tech insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:border-meltgreen outline-none transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-deep-space px-4 rounded-lg font-bold text-xs uppercase hover:bg-meltgreen transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium tracking-wider">
            &copy; {currentYear} JAYTECH HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs font-medium tracking-wider">PRIVACY POLICY</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs font-medium tracking-wider">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'

export default function PartnerMarquee() {
  const partners = [
    { name: 'NexaCore', logo: 'NC' },
    { name: 'Velocity', logo: 'VL' },
    { name: 'Quantum', logo: 'QM' },
    { name: 'ApexData', logo: 'AD' },
    { name: 'EnviroTech', logo: 'ET' },
    { name: 'Stellar', logo: 'ST' },
  ]

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-deep-space/40 mb-16">
          Strategic Partners & Sponsors
        </p>
        
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-24 items-center whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-14 h-14 rounded-xl border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-deep-space group-hover:border-deep-space transition-all duration-300">
                  <span className="text-xl font-black text-gray-300 group-hover:text-meltgreen grayscale group-hover:grayscale-0 transition-all duration-300">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-xl font-bold text-gray-300 group-hover:text-deep-space transition-all duration-300">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

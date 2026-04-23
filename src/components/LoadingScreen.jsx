import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-deep-space flex flex-col items-center justify-center z-50">
      <div className="relative flex items-center justify-center">
        {/* The Branded Mark (J/T) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute text-white font-bold text-5xl tracking-tighter"
        >
          <span className="text-white">J</span>
          <span className="text-meltgreen">T</span>
        </motion.div>

        {/* The Meltgreen Ring */}
        <svg className="w-48 h-48 transform -rotate-90">
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke="#2DFFC4"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="553"
            initial={{ strokeDashoffset: 553 }}
            animate={{ 
              strokeDashoffset: [553, 0, -553],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Subtle pulse ring */}
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke="#2DFFC4"
            strokeWidth="4"
            fill="transparent"
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{ 
              opacity: [0.1, 0.4, 0],
              scale: [1, 1.1, 1.2]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h2 className="text-white font-medium tracking-[0.2em] text-sm uppercase">
          Jaytech <span className="text-meltgreen">Hub</span>
        </h2>
        <div className="mt-4 flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1 h-1 bg-meltgreen rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
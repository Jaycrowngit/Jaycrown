import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 18
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#080D1F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}
      >
        <div style={{
          width: '36px', height: '36px', borderRadius: '8px',
          background: '#1B4FD8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="7" width="3" height="6" rx="1" fill="white" opacity="0.5"/>
            <rect x="5.5" y="4" width="3" height="9" rx="1" fill="white" opacity="0.75"/>
            <rect x="10" y="1" width="3" height="12" rx="1" fill="white"/>
          </svg>
        </div>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          fontSize: '1.2rem',
          letterSpacing: '-0.02em',
          color: '#ffffff',
        }}>
          JAYTECHHUB
        </span>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ width: '200px' }}
      >
        <div style={{
          height: '2px',
          background: 'rgba(255,255,255,0.10)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '16px',
        }}>
          <motion.div
            style={{
              height: '100%',
              background: '#1B4FD8',
              borderRadius: '2px',
              width: `${Math.min(progress, 100)}%`,
              transition: 'width 0.12s ease',
            }}
          />
        </div>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.25)',
          textAlign: 'center',
          letterSpacing: '0.08em',
        }}>
          Loading…
        </p>
      </motion.div>
    </div>
  )
}
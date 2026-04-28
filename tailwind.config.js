/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A192F',
        'meltgreen':  '#2DFFC4',
        // HR-Tech palette
        'hr-dark':   '#050c18',
        'hr-navy':   '#060f1e',
        'hr-navy2':  '#08152a',
        'hr-cyan':   '#2dffc4',
        'hr-blue':   '#00e5ff',
        'hr-teal':   '#00b4d8',
        'hr-violet': '#a78bfa',
        'hr-amber':  '#fbbf24',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(45, 255, 196, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 20px rgba(45, 255, 196, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

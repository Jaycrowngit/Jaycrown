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
        'royal':        '#2952FF',
        'royal-dark':   '#1a3dd4',
        'royal-deeper': '#0f28a8',
        'royal-light':  '#6b8fff',
        'royal-pale':   '#dce6ff',
        'royal-ghost':  '#f0f4ff',
        'snow':         '#f7f8fc',
        'ink':          '#0d1535',
        'ink-soft':     '#2a3560',
        /* legacy aliases — keep so LiveLab still works */
        'deep-space':   '#0d1535',
        'meltgreen':    '#2952FF',
        'periwinkle':   '#6b8fff',
        'rich-black':   '#0d1535',
      },
      fontFamily: {
        'sans':    ['\'Inter\'', 'system-ui', 'sans-serif'],
        'display': ['\'Inter\'', 'system-ui', 'sans-serif'],
        'serif':   ['\'Inter\'', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'shimmer-blue': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'shimmer-blue': 'shimmer-blue 4s linear infinite',
        'float':        'float 4s ease-in-out infinite',
        'fade-up':      'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

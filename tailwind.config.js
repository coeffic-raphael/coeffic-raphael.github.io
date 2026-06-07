/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#00d2ff',
        'cyan-dim': '#0099bb',
        navy: '#080e1a',
        'glass-white': 'rgba(255,255,255,0.06)',
        'glass-border': 'rgba(255,255,255,0.09)',
        muted: '#4a5568',
        'text-primary': '#e8edf5',
        'text-secondary': '#8899aa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

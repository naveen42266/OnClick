/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#DCE8F5',
        secondary: '#457B9D',
        hoverSecondary: '#589cc7',
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        accent: {
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          amber: '#F59E0B',
          emerald: '#10B981',
          rose: '#F43F5E',
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-pressed': '1px 1px 0px 0px #000000',
        'glow-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.6)',
        'glow-violet': '0 0 20px -3px rgba(139, 92, 246, 0.6)',
        'neumorph-flat': '8px 8px 16px #0b1120, -8px -8px 16px #15213c',
        'neumorph-pressed': 'inset 4px 4px 8px #0b1120, inset -4px -4px 8px #15213c',
        'aqua': 'inset 0 1px 0 rgba(255,255,255,0.8), 0 3px 6px rgba(0,0,0,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

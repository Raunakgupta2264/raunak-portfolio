/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#030014',
          900: '#07031e',
          800: '#0f0a2e',
        },
        surface: {
          glass: 'rgba(20, 20, 30, 0.6)',
          solid: '#0f0f1a',
          hover: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-glow': 'rgba(139, 92, 246, 0.4)',
        },
        primary: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
          soft: 'rgba(139, 92, 246, 0.14)',
        },
        cyanAccent: {
          DEFAULT: '#38bdf8',
          soft: 'rgba(56, 189, 248, 0.15)',
        }
      },
      fontFamily: {
        heading: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.2)',
        'glow-md': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 50px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 30px rgba(56, 189, 248, 0.25)',
        'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'liquid-blob': 'liquidBlob 22s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'shimmer': 'shimmer 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'rotate-slow': 'rotateSlow 40s linear infinite',
        'rotate-reverse': 'rotateSlow 30s linear infinite reverse',
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        liquidBlob: {
          '0%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
          '50%': { borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%', transform: 'translate(40px, 60px) rotate(180deg) scale(1.08)' },
          '100%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', transform: 'translate(0px, 0px) rotate(360deg) scale(1)' },
        },
        shimmer: {
          '0%': { left: '-150%' },
          '20%': { left: '200%' },
          '100%': { left: '200%' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.4', transform: 'translate(-50%, -50%) scale(0.95)' },
          '100%': { opacity: '0.8', transform: 'translate(-50%, -50%) scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}

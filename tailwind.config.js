/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soc: {
          bg: '#0a0e1a',
          panel: '#0d1117',
          card: '#161b27',
          border: '#1e2d40',
          accent: '#00d4ff',
          'accent-dim': '#0088aa',
          success: '#00ff88',
          warning: '#ffaa00',
          danger: '#ff3366',
          'danger-dim': '#cc1144',
          purple: '#7c3aed',
          blue: '#1e40af',
          muted: '#4a5568',
          text: '#e2e8f0',
          'text-dim': '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff33' },
          '100%': { boxShadow: '0 0 20px #00d4ff66, 0 0 40px #00d4ff22' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)",
        'glow-radial': 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      }
    },
  },
  plugins: [],
}

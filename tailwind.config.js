/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode with Indian Tricolor Accents
        dark: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          card: '#151515',
        },
        saffron: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
        green: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
          dark: '#16A34A',
        },
        navy: {
          DEFAULT: '#000080',
          light: '#0000B3',
          dark: '#000066',
        },
        // Accent colors
        accent: {
          pink: '#FF1493',
          red: '#FF0000',
          yellow: '#FFD700',
        },
        // Text colors for dark mode
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          muted: '#808080',
          dark: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-smooth': 'floatSmooth 8s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'flow': 'flow 3s linear infinite',
        'particle-burst': 'particleBurst 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.2' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.8' },
        },
        floatSmooth: {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.2' },
          '25%': { transform: 'translateY(-15px) translateX(10px)', opacity: '0.4' },
          '50%': { transform: 'translateY(-30px) translateX(-5px)', opacity: '0.2' },
          '75%': { transform: 'translateY(-15px) translateX(-15px)', opacity: '0.4' },
          '100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.2' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        flow: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(200vh)', opacity: '0' },
        },
        particleBurst: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-50px) scale(0)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(34, 197, 94, 0.4)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

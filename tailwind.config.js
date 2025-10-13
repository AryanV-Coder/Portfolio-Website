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
          DEFAULT: '#FF9933',
          light: '#FFB366',
          dark: '#E68A2E',
        },
        green: {
          DEFAULT: '#138808',
          light: '#1BAA0A',
          dark: '#0F6606',
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
      },
    },
  },
  plugins: [],
}

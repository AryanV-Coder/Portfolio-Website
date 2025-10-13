/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Indian Tricolor Theme
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
        // Text colors
        text: {
          primary: '#000000',
          secondary: '#000080',
          muted: '#666666',
          light: '#FFFFFF',
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

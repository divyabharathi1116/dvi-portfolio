/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050814',
          dark: '#0a0f1d',
          card: 'rgba(10, 15, 30, 0.45)',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00f2fe',
          purple: '#9d4edd',
          navy: '#0b1329',
          blue: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}

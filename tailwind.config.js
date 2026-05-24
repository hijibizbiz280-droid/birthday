/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        romanticPink: '#ff4d8d',
        deepPurple: '#5b21b6',
        roseGold: '#f7c8a0',
      },
      fontFamily: {
        handwritten: ['cursive'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #ff4d8d' },
          to: { boxShadow: '0 0 30px #ff4d8d' },
        },
      },
    },
  },
  plugins: [],
}
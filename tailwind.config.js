/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-from-top': 'slide-from-top 0.5s ease-out',
        'slide-from-bottom': 'slide-from-bottom 0.5s ease-out',
        'slide-from-left': 'slide-from-left 0.5s ease-out',
        'slide-from-right': 'slide-from-right 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

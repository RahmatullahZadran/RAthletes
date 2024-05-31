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
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
        'scale-up': {
          '100%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.95)' },
        },
      },
      animation: {
        'slide-from-top': 'slide-from-top 0.5s ease-out',
        'slide-from-bottom': 'slide-from-bottom 0.5s ease-out',
        'slide-from-left': 'slide-from-left 0.5s ease-out',
        'slide-from-right': 'slide-from-right 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-out': 'fade-out 0.5s ease-out',
        'spin': 'spin 1s linear infinite',
        'bounce': 'bounce 1s infinite',
        'scale-up': 'scale-up 0.3s ease-in-out',
        'scale-down': 'scale-down 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}

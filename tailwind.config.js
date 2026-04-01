/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
      extend: {
          colors: {
              dark: '#0D0D0D',
              neon: '#00D1FF', // Neon Cyan
              'neon-dim': 'rgba(0, 255, 255, 0.1)',
          },
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
          },
      }
  }
}

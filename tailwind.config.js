/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Quincy CF"', 'Georgia', 'serif'],
        sans: ['Gotham', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#C8A258',
          dark: '#081E3B',
        },
      },
    },
  },
  plugins: [],
}

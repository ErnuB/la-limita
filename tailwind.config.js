/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'curse': ['Back to Black'],
        'base': ['bahnschrift'],
        'mont': ['Montserrat']
      },
      colors: {
        'tan-limita': '#F6EECC',
        'tan-dark': '#997519'
      }
    }
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'curse': ['Back to Black'],
        'base': ['bahnschrift'],
        'mont': ['Montserrat'],
        'dk' : ['DK MILLEFEUILLE']
      },
      colors: {
        'tan-limita': '#F6EECC',
        'tan-dark': '#997519',
        'orange-limita': '#de6f00'
      }
    }
  },
  plugins: []
};
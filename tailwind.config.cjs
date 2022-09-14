/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    colors: {
      'avax-red': '#e84142',
      'ethereum-gray': '#a6a6ad',
      'gnosis-green': '#0d8e74',
      'gnosis-carrot': '#e8663d',
      'gnosis-black': '#001429',
      'gnosis-blue': '#009cb4',
      'gnosis-beige': '#e8e7e6',
      'polygon-purple': '#7b3fe4',
    },

    fontFamily: {
      sans: ['Averta', 'sans-serif'],
    },
 
    extend: {},
  },

  plugins: [],
}

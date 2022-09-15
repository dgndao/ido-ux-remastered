/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    fontFamily: {
      sans: ['Averta', 'sans-serif'],
      'sans-bold': ['Averta Bold', 'sans-serif'],
    },
 
    extend: {
      colors: {
        'avax-red': '#e84142',
        'ethereum-gray': '#a6a6ad',
        'gnosis-green': '#0d8e74',
        'gnosis-carrot': '#e8663d',
        'gnosis-black': '#001429',
        'gnosis-blue': '#009cb4',
        'gnosis-beige': '#e8e7e6',
        'gnosis-dark-blue': '#001429',
        'polygon-purple': '#7b3fe4',
      },
    },
  },

  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ['active', 'hover'],
      textColor: ['active', 'hover'],
    }
  },

  plugins: [],
}

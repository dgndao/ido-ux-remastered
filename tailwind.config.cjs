/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    fontFamily: {
      averta: ['Averta', 'sans-serif'],
      'averta-bold': ['Averta Bold', 'sans-serif'],
    },

    fontMetrics: {
      averta: {
        capHeight: 714,
        ascent: 1607,
        descent: -441,
        lineGap: 481,
        unitsPerEm: 2048,
      },

      'averta-bold': {
        capHeight: 714,
        ascent: 1604,
        descent: -444,
        lineGap: 503,
        unitsPerEm: 2048,
      },
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

      fontSize: {
        'trim-cap-3-gap-0': ['16.879121px' ,'12px'],
        'trim-cap-4-gap-0': ['22.520962px' ,'16px'],
        'trim-cap-4-gap-4': ['22.520962px' ,'32px'],
        'trim-cap-6-gap-0': ['33.781443px' ,'24px'],
        'trim-cap-6-gap-4': ['33.781443px' ,'32px'],
        'trim-cap-6-gap-6': ['33.781443px' ,'48px'],
        'trim-cap-8-gap-0': ['45.041924px' ,'32px'],
        'trim-cap-8-gap-4': ['45.041924px' ,'48px'],
        'trim-cap-8-gap-6': ['45.041924px' ,'56px'],
        'trim-cap-8-gap-8': ['45.041924px' ,'64px'],
      }
    },
  },

  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ['active', 'hover'],
      textColor: ['active', 'hover'],
    }
  },

  plugins: [require('tailwindcss-capsize')],
}

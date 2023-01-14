const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['"Neue Machina"', 'sans-serif'],
      anicons: ['"Anicons Subset"', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1200px',
    },
    extend: {
      colors: {
        primary: '#fd0',
      },
      screens: {
        tall: { raw: '(min-height: 480px)' },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        vf: (value) => ({ fontVariationSettings: value }),
      })
    }),
  ],
}

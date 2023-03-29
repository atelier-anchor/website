import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

export default {
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
} satisfies Config

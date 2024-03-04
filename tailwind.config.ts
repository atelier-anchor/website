import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
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
        fg: '#fbfbfb',
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

import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Neue Machina', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#ffdd00',
      },
    },
  },
})

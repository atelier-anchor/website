import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#ffdd00',
      },
      fontFamily: {
        sans: ['Neue Machina', 'sans-serif'],
      },
      height: {
        fit: 'fit-content',
      },
    },
  },
})

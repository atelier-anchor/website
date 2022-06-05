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
    },
  },
}

module.exports = {
  mode: 'jit',
  purge: [
    './assets/**/*.js',
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      underline:{
        'offset-2' : '2em',
      },
      height:{
        '3/4screen' : "75vh",
        '1/2screen' : "50vh",
      },
      width:{
        '3/4screen' : '74vw',
      },
      boxShadow:{
        button : "0 0 0 0.2rem rgba(0, 0, 0, 1)",
        button_inner : "inset 0 0 0 0.2rem rgba(0, 0, 0, 1)",
      },
      colors: {
        accent1: "var(--color-background-accent1)",
        accent2: "var(--color-background-accent2)",
        light1 : "var(--color-background-light1)",
        light2 : "var(--color-background-light2)",
        dark  : {
          DEFAULT: "rgba(var(--color-text-dark-default), 1)",
          muted: "rgba(var(--color-text-dark-default), 0.70)",
        },
        light  : {
          DEFAULT: "rgba(var(--color-text-light-default), 1)",
          muted: "rgba(var(--color-text-light-default), 0.70)",
        } 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

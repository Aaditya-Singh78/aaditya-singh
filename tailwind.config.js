/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*"],
  theme: {
    container:{
      padding:{
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {},
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer'
  ],
}


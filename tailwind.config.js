/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      flexGrow: {
        '2': 2
      }
    },
  },
  plugins: [],
}
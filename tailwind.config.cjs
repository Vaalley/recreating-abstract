/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4C5FD5',
        'secondary': '#dadbf1',
        'grey': '#191a1b',
      }
    },
  },
  plugins: [],
}

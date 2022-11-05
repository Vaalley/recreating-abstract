/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4C5FD5',
        'secondary': '#dadbf1',
        'grey': '#191a1b',
      },
      screens: {
        // '-2xl': { max: '1439px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
    },
  },
  plugins: [],
}

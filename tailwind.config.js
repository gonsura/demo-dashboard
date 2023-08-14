/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#252b3b',
        'secondary-blue': '#78aed8',
        'primary-gray': '#eff3f6',
        'secondary-gray': '#b4b6b9',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

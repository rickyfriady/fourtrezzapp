/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sanspro: ['Source Sans Pro'],
      },
    },
  },
  plugins: [require('daisyui')],
};

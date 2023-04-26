/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'left-gr': '#60BC64',
        'right-gr': '#5BD960',
        'cta': '#60BC64'
      },
    },
  },
  plugins: [],
};

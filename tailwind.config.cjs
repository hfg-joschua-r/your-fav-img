/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'ciYellow': '#D8FE51',
      'ciBlack': '#101010',
      'ciWhite': '#EEEDE5',
      'black': '#000',
    },
    fontFamily: {
      serif: ['Magtis', 'sans-serif'],
      sans: ['Inconsolata', 'sans-serif'],
    },
    extend: {
      spacing: {
      },
      borderRadius: {
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ciYellow: "hsl(73, 100%, 66%)",
      ciYellowLight: "hsl(73, 95%, 80%)",
      ciYellowLightest: "hsl(73, 99%, 95%)",
      ciYellowDark: "hsl(73, 90%, 8%)",

      ciBlack: "hsla(79, 60%, 3%, 1)",
      ciWhite: "#EEEDE5",
      black: "#000",
    },
    fontFamily: {
      serif: ["Magtis", "sans-serif"],
      sans: ["Inconsolata", "sans-serif"],
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
};

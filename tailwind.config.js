/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['Lato', 'sans-serif'],
        bodyFont: ['Raleway', 'sans-serif'],
      },
      colors: {
        bodyColor: "#f5f5f5",
        lightText: "#979797",
        boxBg: "lineaer-gradiant(90deg, ##22241e, ##262b23)",
        designColor: "#0da921",
      },
      boxShadow: {
        shadowOne: "3px 3px 10px #8d8f8b, -3px -3px 10px #8d8f8b",
      },
    },
  },
  plugins: [],
}
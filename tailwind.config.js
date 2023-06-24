/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Oswald", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      colors: {
        bodyColor: "#e3e3e3",
        lightText: "#736666",
        boxBg: "lineaer-gradiant(90deg, ##22241e, ##262b23)",
        designColor: "#98d900",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #20221c, -10px -10px 19px #282d24",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: ['Lato', 'sans-serif'],
        bodyFont: ['Raleway', 'sans-serif'],
      },
      colors: {
        bodyColor: "#e5e7eb",
        lightText: "#000000b3",
        boxBg: "lineaer-gradiant(90deg, #353345, #263545)",
        designColor: "#b88ae6",
      },
      boxShadow: {
        shadowOne: "3px 3px 10px #6b7280, -3px -3px 10px #6b7280",
      },
    },
  },  
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#261E1E", // BROWN
        green: "#84A59D", // GREEN
        lightpink: "#FFF5F3", // LIGHTPINK
        light: "#FCFCFC", // BACKGROUND GRAY
        grey: "#F5F5F5", // BACKGROUND MORE GRAY
        secondary: "#F28482",
        pink: "#F5CAC3",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#261E1E",
        secondary: "#84A59D",
        lightpink: "#FFF5F3",
        light: "#FCFCFC",
        grey: "#F5F5F5",
        orange: "#F5841A",
        background: "#F7F7F7",
      },
    },
  },
  plugins: [],
}


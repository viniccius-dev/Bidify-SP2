/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#86EFAC",
        light: "#FCFCFC",
        grey: "#F5F5F5",
        orange: "#F5841A",
        background: "#F7F7F7",
      },
    },
  },
  plugins: [],
}


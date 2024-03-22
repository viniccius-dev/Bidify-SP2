/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#C8E2EB",
        light: "#C0E8EB",
        yellow: "#FFE68C",
        orange: "#F5841A",
        background: "#F7F7F7",
      },
    },
  },
  plugins: [],
}


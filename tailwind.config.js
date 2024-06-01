/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      light: ["Inter-light", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "blue-green-gradient": "bg-gradient-to-r from-green-300 to-blue-200",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
});
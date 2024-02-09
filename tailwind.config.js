/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{html,js}", "*.{html, js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      black: "#1a1e22",
      white: "#ffffff",
      darkGreen: "#1f2937",
      slate: "#1e293b",
    },
  },
  plugins: [],
};

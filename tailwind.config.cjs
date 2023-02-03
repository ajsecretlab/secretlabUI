const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        default: colors.gray[500],
        primary: "#a72a2f",
        secondary: colors.amber[500],
        success: colors.green[500],
        error: colors.red[500],
        info: colors.blue[500],
        warning: colors.orange[500],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html", "./src/pages/**/*.html"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

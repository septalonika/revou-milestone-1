/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html", "./src/pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#10375C",
        secondary: "#EB8317",
        accent: "#F3C623",
        neutral: "#F4F6FF",
        "outer-primary": "#a88b21",
      },
      dropShadow: {
        "accent-b": "0 0.2em 1px #F3C623",
      },
    },
    fontFamily: {
      Newsreader: ["Newsreader"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

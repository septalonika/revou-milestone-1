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

// primary: '#07E3D0',
// secondary: '#adffd0',
// accent: '#6fa4d6',
// neutral: '#332541',
// 'base-100': '#000000',
// info: '#7ba7f4',
// success: '#109347',
// warning: '#fcc764',
// error: '#f75e5e',

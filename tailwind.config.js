/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "black",
        tertiary: "gray"
      },
      backgroundImage: {
        "about-pattern": "url('/src/assets/background.png')",
      }
    },
  },
  plugins: [],
};
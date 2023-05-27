/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm:"400px",
        sm: "710px",
        lmd: "767px",
        md: "834px",
        xmd: "1068px",
      },
      colors: {
        primary: "#000046",
        secondary: "#1CB5E0",
      },
    },
  },
  plugins: [],
};
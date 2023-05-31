/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        supers:"270px",
        ssm: "340px",
        midxs: "410px",
        xsm: "400px",
        sm: "710px",
        lmd: "768px",
        md: "830px",
        xxmd: "1025px",
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
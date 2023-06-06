/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        supers:"270px",
        ssm: "340px",
        msm:"360px",
        xsm: "400px",
        midxs: "410px",
        sm: "710px",
        lmd: "769px",
        md: "830px",
        midFM: "1000px",
        xxmd: "1023px",
        midxmd: "1030px",
        xmd: "1068px",
        midlg: "1300px",
        lg: "1376px",
      },
      colors: {
        primary: "#000046",
        secondary: "#1CB5E0",
      },
    },
  },
  plugins: [],
};
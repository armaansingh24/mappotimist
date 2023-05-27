/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "370px",
        sm: "710px",
        lmd: "768px",
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
});
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         xsm:"400px",
//         sm: "710px",
//         lmd: "767px",
//         md: "834px",
//         xmd: "1068px",
//       },
//       colors: {
//         primary: "#000046",
//         secondary: "#1CB5E0",
//       },
//     },
//   },
//   plugins: [],
// };
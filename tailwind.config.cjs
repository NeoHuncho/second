/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#2a9494",
        lightGrey: "#DEE2E6",
        darkGrey: "#383A40",
        
      },
      backgroundImage: {
        landing: "url('~/src/assets/images/background-landing-min.jpg')",
        "landing-dark":
          "url('~/src/assets/images/background-landing-dark-min.jpg')",
      },
      gridTemplateColumns: {
        appHeader: "1fr 3.5fr 1fr ",
        searchBar: "2.2fr 0.74fr",
      },
      fontSize: {
        md: "1rem",
      },
    },
  },
  plugins: [],
};

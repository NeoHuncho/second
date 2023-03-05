/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('~/src/assets/images/background-landing-min.jpg')",
        "landing-dark":
          "url('~/src/assets/images/background-landing-dark-min.jpg')",
      },
      gridTemplateColumns: {
        mobileHeader: "1fr 3fr 1fr ",
      },
      fontSize: {
        md: "1rem",
      },
    },
  },
  plugins: [],
};

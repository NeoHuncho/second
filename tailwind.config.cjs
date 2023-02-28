/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-landing": "url('~/src/assets/background-landing-min.jpg')",
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

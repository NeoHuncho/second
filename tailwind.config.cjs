/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-landing":
          "url('~/src/assets/images/background-landing-min.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fb7413",
        white: "#ffffff",
        "light-grey": "#959eac",
        "medium-grey": "#262D37",
        "dark-blue": "#171e28",
        "very-dark-blue": "#121417",
      },
    },
  },
  plugins: [],
};

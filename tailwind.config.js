const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robosab: ["Raleway", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
        nsan: ["Noto Sans ", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  corePlugins: {
    // preflight: false,
  },
};

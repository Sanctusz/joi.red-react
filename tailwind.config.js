const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: ["src/**/*.js", "public/**/*.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        darkbg: "#0A0A0A",
        semidarkbg: "#1F1F1F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};

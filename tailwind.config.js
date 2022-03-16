module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx", "./lib/**/*.ts"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}

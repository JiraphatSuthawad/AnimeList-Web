const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|checkbox|divider|image|input|navbar|pagination|popover|spinner|ripple).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};

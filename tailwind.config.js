/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    display: ["group-hover"],
    extend: {
      lineClamp: ["hover"],
    },
  },
  important: true,
  darkMode: "class",
  content: [
    "./app/login/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/join/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};

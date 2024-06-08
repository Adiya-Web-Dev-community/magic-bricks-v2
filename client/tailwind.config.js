/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mui-sm": "600px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "silver-fox": "#d4d4dc",
        "deep-matte-grey": "#393f4d",
        "dark-slate": "#1d1e22",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakartaSans: ["var(--font-jakartaSans)"],
      },
      colors: {
        gold: "#C5992E",
        goldHover: "#C5992E99",
        grey: "#9d9d9d",
        black65: "#00000065",
      },
    },
  },
  plugins: [],
};

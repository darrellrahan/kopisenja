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
        pompiere: ["var(--font-pompiere)"],
      },
      colors: {
        gold: "#C5992E",
        goldHover: "#C5992E99",
        gold30: "#C5992E90",
        grey: "#9d9d9d",
        black65: "#00000065",
        black50: "#00000070",
        lighterBlack: "#5a5a5a50",
        whiteHover: "#ffffff99",
      },
      backgroundImage: {
        heroBg:
          "linear-gradient(to right,#000 0%,#00000000 100%),url('/assets/svg/hero-bg.svg')",
        infoBg: "url('/assets/webp/info-bg.webp')",
      },
      spacing: {
        "650px": "650px",
        "46.5%": "46.5%",
      },
      borderRadius: {
        "35px": "35px",
        "50px": "50px",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr));",
      },
      fontSize: {
        "1.6rem": "1.6rem",
      },
    },
  },
  plugins: [],
};

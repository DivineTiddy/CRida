/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Accent: "rgba(191, 91, 18, 1)",
        Bg: "rgba(7, 1, 37, 0.9)",
        Text: "#363247",
        Button: "#5810BF",
        SecondBg:"rgba(7, 1, 37, 0.4)"
      },
      border:{
        Con:"border-solid border-2 border-sky-950"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E4A62",
        secondary: "#2ECC71",
        accent: "#FFD700",
        pColor: "#FFFFFF",
        aColor: "#A9A9A9",
      },
      fontFamily: {
        body: ["Roboto", "Arial", "sans-serif"],
        heading: ["Montserrat", "Arial", "sans-serif"],
        button: ["Nunito", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

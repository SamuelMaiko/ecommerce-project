/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary:'#FF5733',
        secondary:'#2ECC71',
        accent:'#3498DB'
      },
      fontFamily: {
        body: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Arial', 'sans-serif'],
        button: ['Nunito', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


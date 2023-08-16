/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#111D5E',
      },
      boxShadow: {
        header: '-5px 0px 34px 0px #D7D7D7;',
      },
      fontFamily: {
        // poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        rotateMobile: { min: "515px", max: "574px" },
        tablet: { min: "575px", max: "639px" },
      },
    },
  },
  plugins: [],
}
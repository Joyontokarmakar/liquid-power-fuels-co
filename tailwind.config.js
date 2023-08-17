/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#164e63',
        primaryLightColor: '#0d9488',
        darkAshColor: '#0f172a',
        lightColor: '#ecfeff',
        dimLightColor: '#cffafe',
        darkColor: '#030712',
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
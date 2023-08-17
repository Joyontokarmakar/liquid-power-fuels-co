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
        // darkblueColor: '#000011',
        lightColor: '#ecfeff',
        dimLightColor: '#cffafe',
        darkColor: '#030712',
      },
      boxShadow: {
        header: '0px -9px 43px 0px #1c1c1c',
        form:'0px 0px 12px 0px #1e248154'
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
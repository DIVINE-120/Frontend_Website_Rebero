/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        primary:"#1424B4",
        secondary:"#FFD233",
        third:"#D9D9D9",
        textPrimary:"939799"
      }
    },
  },
  plugins: [],
}

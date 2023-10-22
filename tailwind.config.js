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
      colors: {
        metallicGold: '#D4AF37'
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        sans: ['Open Sans', 'sans-serif']
      }
    },

    
  },
  plugins: [],
}

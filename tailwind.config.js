/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "#131313",
        subDark: "#2e333d",
        customBlue : "#6b8afd"
    },
    fontFamily: {
      archivo : ['Archivo', 'sans-serif']
    }
    },
  },
  plugins: [],
}


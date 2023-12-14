const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{jsx, tsx, js, ts}",
    "../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      main: {
        red: "#C70039",
        blue: '#141E46',
        pink: '#FF6969',
        light: '#FFF5E0'
      }
    },
    extend: {

    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px"

    }
  },
  plugins: [],
})


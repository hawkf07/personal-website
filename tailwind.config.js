/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT:{
          css:{
            color:"#fff",
            h1:{
              color:"#fff"
            },
 h2:{
              color:"#fff"
            },

            p:{
              color:"#fff"
            }
          }
        }
      }
    },
    screens:{
      mobile:{max : "768px"}
    },
  },
  plugins: [require('@tailwindcss/typography'),],

}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // Marinblå bas
        navy: colors.blue[950],       // djup marinblå
        navyLight: colors.blue[900],  // lite ljusare variant

        // Beige/cream för sidebar och sektioner
        cream: colors.stone[100],     // ljus beige
        sand: colors.amber[50],       // varm beige

        // Accentfärg (för knappar, ikoner, highlights)
        accent: colors.teal[400],     // fräsch blågrön accent
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

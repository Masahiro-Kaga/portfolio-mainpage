module.exports = {
  daisyui: {
    // styled: true,
    themes: false,
    // rtl: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      dosis:["Dosis"]
    }
  },
  plugins: [
    require('daisyui')
  ],
}

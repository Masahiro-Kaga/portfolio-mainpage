module.exports = {
  daisyui: {
    // styled: true,
    themes: false,
    // rtl: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

module.exports = {
  daisyui: {
    // styled: true,
    themes: false,
    // rtl: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeAnim: {
          'from': {
            opacity: 0,
          },
          'to': {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeAnim: "fadeAnim 1.5s ease-out"
      },
    },
    fontFamily: {
      dosis: ["Dosis"],
    },
  },
  plugins: [],
};

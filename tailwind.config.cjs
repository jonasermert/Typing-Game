module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaleNumber: {
          '0%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        scaleNumber: 'scaleNumber 2s infinite',
      },
    },
  },
  plugins: [],
};

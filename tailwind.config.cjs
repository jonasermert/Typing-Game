module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/styles/**/*.css"],
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
      colors: {
        background: '#111',
        panel: '#283149',
        panelDark: '#111727',
        accent: '#f73859',
      },
      fontFamily: {
        display: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

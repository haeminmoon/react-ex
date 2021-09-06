module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        top: '0px 10px 0px rgba(0, 0, 0, 0.05), 0px -5px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

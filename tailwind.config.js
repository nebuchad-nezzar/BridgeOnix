/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  ttheme: {
    extend: {
      colors: {
        lightBlue: '#F8FBFF', // Add your custom color here
      },
    },
  },
  plugins: [],
};

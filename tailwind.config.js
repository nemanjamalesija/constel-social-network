/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        figmaRed: '#FF1515',

        figmaGray: '#F9F9F9',
        figmaGrayShade: '#A6A6A6',
        figmaGrayShade2: '#959595',
        figmaBlack: '#222222',
      },
    },
  },
  plugins: [],
};

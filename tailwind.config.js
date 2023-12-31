/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        figmaRed: '#FF1515',
        figmaRedShade: '#e61313',

        figmaBlue: '#157EFF',
        figmaBlueShade: '#005BCA',

        figmaGray: '#F9F9F9',
        figmaGrayLight: '#D9D9D9',

        figmaGrayShade: '#A6A6A6',
        figmaGrayShade2: '#848484',
        figmaBlack: '#222222',

        figmaGrayPlayer: '#EFEFEF',
      },

      screens: {
        smb: { max: '769px' },
        // => @media (min-width: 640px) { ... }

        sma: { max: '479px' },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};

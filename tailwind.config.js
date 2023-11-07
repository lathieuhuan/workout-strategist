/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      light: {
        DEFAULT: '#f0faf6',
      },
      primary: {
        100: '#cc0e00',
        200: '#b80c00',
        300: '#a30b00',
        400: '#8f0a00',
        500: '#7a0800',
        600: '#660700',
        700: '#520500',
        800: '#3d0400',
        900: '#1d0200',
      },
      secondary: {
        100: '#76d0af',
        200: '#67cba6',
        300: '#58c69d',
        400: '#49c195',
        500: '#3eb489',
        600: '#39a77f',
        700: '#349873',
        800: '#2f8968',
        900: '#2a7a5c',
      },
    },
    extend: {},
  },
  plugins: [],
};

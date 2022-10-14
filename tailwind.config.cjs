/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      cyan: {
        700: '#39C8FB',
        500: '#81D8F7',
        300: '#98E1FB',
        200: '#B4E8FB',
      }

      /*
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',
      
      'cyan-700': '#39C8FB',
      'cyan-500': '#81D8F7',
      'cyan-300': '#98E1FB',
      'cyan-200': '#B4E8FB',
      */
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

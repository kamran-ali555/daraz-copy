/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        daraz: {
          orange: '#f57224',
          purple: '#6c2a90',
          blue: '#0f146d',
          lightgray: '#f5f5f5',
          gray: '#9e9e9e',
          darkgray: '#424242',
          black: '#212121',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
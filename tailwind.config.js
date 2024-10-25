/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-main': '#212529',
        'black-main': '#0b090a',
        'gray-light': '#495057',
        'gray-fulllight': '#dee2e6', 
        'gray-midlight': '#9c9ea0',// Adicionando a cor personalizada
      },
    },
  },
  plugins: [],
}
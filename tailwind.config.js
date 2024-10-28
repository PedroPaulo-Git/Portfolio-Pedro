/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-deep': 'inset 2px 2px 12px rgba(0, 0, 0, 0.1)',
       'grid': '0 2px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      
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
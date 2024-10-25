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
        'gray-light': '#6c757d', // Adicionando a cor personalizada
      },
    },
  },
  plugins: [],
}
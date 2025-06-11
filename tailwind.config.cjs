/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adiciona a fonte 'Dancing Script' que já está no index.html
        // O nome 'handwriting' é um apelido que criamos.
        'handwriting': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
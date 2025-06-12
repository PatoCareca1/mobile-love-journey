/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['"Dancing Script"', 'cursive'],
        'comic': ['"Comic Neue"', 'cursive'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'signup':'#FF7757',
        'footerColor':'#172432',
        'ractangle':'#767E86'
      }
    },
  },
  plugins: [],
}


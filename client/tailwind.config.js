/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-blue': '#00AAA1',
        'text-xs': '#555555',
        'text-xl': '#222222',
        'green-border': '#94D7D3', 
        'nav-title': '#333',
        'placeholder': '#999999'
      

      },
      backgroundColor: {
        'button': '#F2F8F7',
        'input': '#DFF1F0',
        'nav-bg': '#E8F3F3',
        'title': '#DFF1F0',
        
      }
    },
  },
  plugins: [],
}


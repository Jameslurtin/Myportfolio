/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { colors: {
      
      'custom-blue': '#1E3A8A',   
      'soft-pink': '#FADCD9',
      'bright-green': '#32CD32',
    },},
  },
  plugins: [],
}


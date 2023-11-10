/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px', // Mobile
        'lg': '1440px', // Desktop
      },
      colors: {
        white: 'hsl(0, 0%, 98%)', // Almost White
        gray: 'hsl(0, 0%, 41%)', // Medium Gray
        black: 'hsl(0, 0%, 8%)', // Almost Black
      },
      fontSize: {
        'body': '18px', // Font size for body copy
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      fontWeight: {
        'normal': 500, // Epilogue 500
        'bold': 700, // Epilogue 700
      },
    },
  },
  plugins: [],
}
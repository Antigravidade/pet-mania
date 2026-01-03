/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9BE4F', // Warm yellow/orange from reference
        secondary: '#FBF4DE', // Light beige bg
        cta: '#F9575C', // Red/Coral for buttons
        dark: '#675444', // Warm brown for text
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'blob': '30px 30px 30px 30px', // Simplified blob
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}

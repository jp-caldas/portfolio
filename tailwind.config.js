/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe4300',
        secondary: '#868686',
        softGray: '#f0f0f0',
        mistGray: '#d7dcdd',
        gray: '#c0d8e0',
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
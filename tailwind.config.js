/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/*.{js,ts,jsx,tsx}",
      "./src/index.css"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'contacts-cards': 'repeat(8, minmax(126px, 126px))',
      },
      boxShadow: {
        regularBox: '0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);'
      },
      colors: {
        'main-bg': '#F8F9FA',
        'main-clr': '#4FD1C5',
        'gray-clr': '#718096',
        'gray-400-clr': '#A0AEC0',
        'negative-clr': '#E53E3E',
        'positive-clr': '#48BB78',
        'regular-clr': '#2D3748',
      }
    },
  },
  plugins: [],
  tailwindcss: {},
  autoprefixer: {}
}


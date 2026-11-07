export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#024f33', // Button wala dark green
        'secondary': '#eaf8f0', // Light green background shade
        'text-dark': '#1f2937', // Dark text for headings
        'text-light': '#4b5563', // Lighter text for menu
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Ya jo bhi font aap use kar rahe hain
      }
    },
  },
  plugins: [],
}
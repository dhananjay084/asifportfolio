// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Scan all files in src
    ],
    theme: {
      extend: {
        colors: {
          'dark-navy': '#121212', // --color-dark
          'primary-blue': '#007bff', // --color-primary
          'card-dark': '#1e1e1e', // --color-card
          'text-light': '#cccccc',
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'], // Use Poppins as default font
        }
      },
    },
    plugins: [],
  }
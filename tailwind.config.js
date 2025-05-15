/** @type {import('tailwindcss').Config} */
module.exports = {
    // tell Tailwind to look for classes under src/** and react component folders
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    // Disable dark mode completely
    darkMode: false,
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
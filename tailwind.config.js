/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F5DAA',    // Logo blue
        secondary: '#4B6FB8',  // Lighter blue
        dark: '#2B2B2B',       // Text
        light: '#FFFFFF',      // Background
        soft: '#E6E9EF',       // Section background
      },
    },
  },
  plugins: [],
};

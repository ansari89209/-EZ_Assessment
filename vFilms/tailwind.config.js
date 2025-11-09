/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '720px',
        'laptop': '1080px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

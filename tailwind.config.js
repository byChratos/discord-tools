/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        square: '1 / 1',
      },
    },
  },
  plugins: [],
}


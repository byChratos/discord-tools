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
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textPrimary: "var(--color-textPrimary)",
        textSecondary: "var(--color-textSecondary)",
        bgPrimary: "var(--color-bgPrimary)",
        bgSecondary: "var(--color-bgSecondary)",
      },
    },
  },
  plugins: [],
}


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
        primary: '#ffffff',
        secondary: '#000000',
        backgroundLight: '#f6eee3',

        lightBackground: '#f3f3f4',
        lightAccent: '#fbfbfb',

        ashBackground: '#28282d',
        ashAccent: '#2e2e34',

        darkBackground: '#121214',
        darkAccent: '#1a1a1e',

        onyxBackground: '#000000',
        onyxAccent: '#070709',
      },
    },
  },
  plugins: [],
}


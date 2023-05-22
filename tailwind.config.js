/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'tertiary': '#3957D3',
      'primary': '#228B22',
      'secondary': '#F06B07',
      'bgwhite': '#ffffff',
      'bgdark': '#0E183E',
      'red': '#FF0000',
      'whitegray': '#F1F1F1',
      'dark': '#000000',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


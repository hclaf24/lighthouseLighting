/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'charcoal': '#383f51ff',
        'lavender-web': '#dddbf1ff',
        'yinmn-blue': '#3c4f76ff',
        'dun': '#d1beb0ff',
        'rose-quartz': '#ab9f9dff',
      }
  },
  plugins: [],
}
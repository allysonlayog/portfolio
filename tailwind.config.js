/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: '#ED6383', // the pink from Allyson's portfolio PDF
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        print: '6px 8px 0 rgba(0, 0, 0, 0.85)',
        tag: '3px 4px 0 rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [],
}

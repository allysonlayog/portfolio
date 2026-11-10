/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: '#ED6383', // the pink accent from Allyson's portfolio PDF
        ink: '#0F1015', // near-black, for text
        paper: '#F7F3F0', // the light background
        'rose-ink': '#C2325A', // a deeper pink for pink text, so it stays readable on paper
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        print: '0 18px 40px rgba(0, 0, 0, 0.7), 0 3px 8px rgba(0, 0, 0, 0.5)',
        tag: '0 8px 20px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'mod-violet': 'hsl(263, 55%, 52%)',
        'v-d-gray': 'hsl(217, 19%, 35%)',
        'v-d-black': 'hsl(219, 29%, 14%)',
        'white': 'hsl(0, 0%, 100%)',
        'l-grey': 'hsl(0, 0%, 81%)',
        'l-g-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        "Barlow": 'Barlow Semi Condensed, sans-serif',
      },
      backgroundPosition: {
        right: 'right',
        'right-2': 'right 2em',
        top : 'top',
        'top-2': 'top 2em',
      },
    },
  },
  plugins: [],
}



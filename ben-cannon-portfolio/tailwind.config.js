/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': 'gray-900',
        'secondary-light': 'gray-600',
        'bg-light': 'neutral-100',
        'border-light': 'gray-700',
        'primary-dark': 'white',
        'secondary-dark': 'gray-300',
        'bg-dark': 'zinc-800',
        'border-dark': 'gray-200',
},
    },
  },
  plugins: [],
};

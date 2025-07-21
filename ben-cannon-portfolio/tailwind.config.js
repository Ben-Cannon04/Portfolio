/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': 'gray-900',
        'secondary-light': 'gray-700',
        'accent-light': '#4b5563', // gray-600
        'bg-light': 'neutral-100',
        'border-light': 'gray-700',
        'primary-dark': 'white',
        'secondary-dark': '#d1d5db', // gray-300
        'bg-dark': 'zinc-800',
        'border-dark': 'gray-200',
        'text-success': '#166534',
        'bg-success': '#dcfce7',
        'text-warning': '#854d0e',
        'bg-warning': '#fef9c3 ',
      },
    },
  },
  plugins: [],
};

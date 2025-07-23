/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#111827', // gray-900
        'secondary-light': '#374151', // gray-700
        'accent-light': '#f9fafb', // gray-50
        'bg-light': '#f5f5f5', // neutral-100
        'border-light': '#374151', // gray-700

        // Dark theme
        'primary-dark': '#f9fafb', // gray-50
        'secondary-dark': '#d1d5db', // gray-300
        'accent-dark': '#2d3748', // gray-800
        'bg-dark': '#1f2937', // gray-800
        'border-dark': '#374151', // gray-700

        // Constant Colours
        'text-success': '#166534', // green-800
        'bg-success': '#dcfce7', // green-100
        'text-warning': '#854d0e', // amber-800
        'bg-warning': '#fef9c3', // amber-100
      },
    },
  },
  plugins: [],
};

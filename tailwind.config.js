// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Add more keyframes if needed
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        // Add more animations if needed
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 3s linear infinite',
        'pulse': 'pulse 3s linear infinite',
        'ping': 'ping 7s linear infinite',
      }
    },
  },
  plugins: [],
}


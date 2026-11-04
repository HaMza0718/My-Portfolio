/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0b1220",
          800: "#0f172a",
          700: "#111827",
        },
      },
      fontFamily: {
        signature: ["Great Vibes", "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // // => @media (min-width: 1280px) { ... }

      "2xl": "1500px",
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        customGray: '#EAEFED', // Add your custom color
        customOverlay: 'rgb(7, 28, 31, 0.74)',
      },
    },
  },
  plugins: [],
};

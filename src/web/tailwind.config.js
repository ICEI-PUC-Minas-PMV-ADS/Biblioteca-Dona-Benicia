/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "rgba(51, 117, 97, 1)",
        customGre: "#B2FFE8",
        branco: "rgba(255, 255, 255, 0.99)",
        input: "rgba(200, 202, 239, 1)",
        texto: "rgba(11, 14, 97, 1)",
      },
    },
  },
  plugins: [ 
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
  ],
}

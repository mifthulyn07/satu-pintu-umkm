/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#235cde",
        accent: "#f3be29",
        secondary: "#64748b",
        dark: "#020617",
      },
      screen: {
        "2xl": "132px",
      },
    },
  },
  plugins: [],
};

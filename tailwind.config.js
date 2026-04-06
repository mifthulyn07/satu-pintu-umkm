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
        darkSoft: "#0f172a",
      },
      screen: {
        "2xl": "132px",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        interface: ["Inter", "sans-serif"],
      },
      animation: {
        // Durasi 30 detik untuk satu putaran penuh
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          // Bergerak dari posisi 0 ke -100% (lebar satu grup)
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

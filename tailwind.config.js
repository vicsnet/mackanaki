/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        navbarDarkColor: "#04111d",
        bgDarkColor: "#1D2225",
        navTextDarkColor: "rgba(255, 255, 255, 0.75)",
        primaryColor: "#2081E2",
        dropdownbgColor: "#abaeb5",
        secondaryColor: "#353841",
        signupTextColor: "#c1c1c1",
      },
    },
  },
  plugins: [],
};

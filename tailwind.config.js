/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mode: {
          light: {
            primary: "#000",
            secondary: "#fff",
          },
          dark: {
            primary: "#fff",
            secondary: "#000",
          },
        },
      },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
        secondary: "#1F2937",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [],
};

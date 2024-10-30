/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgYellow":"#dcf247",
        "bgDark":"#101010",
        "Nwhite":"#fafefd"
      }
    },
  },
  plugins: [],
}
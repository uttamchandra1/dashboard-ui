/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        lamasky : "#C3EBFA",
        lamaskyLight : "#EDF9FD",
        lamapurple : "#CFCEFF",
        lamapurplelight : "#F1F0FF",
        lamayellow : "#FAE27C",
        lamayellowlight : "#FEFCE8"
      }
    },
  },
  plugins: [],
}
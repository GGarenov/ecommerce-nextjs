/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      graphikMedium: ["Graphik Medium", "sans-serif"],
      graphikLight: ["Graphik Light", "sans-serif"],
      graphikBold: ["Graphik Bold", "sans-serif"],
    },
  },
  plugins: [],
};

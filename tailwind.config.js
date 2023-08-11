import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary" : "#22d3ee",
      "secondary" : "#0e7490",
      "accent" : "#8c9eff",
      "neutral" : "rgb(7 89 133)",
      "sky" : colors.sky,
      "white" : colors.white, 
      "black" : colors.black, 
      "gray" : colors.gray,
      "blue": colors.blue,
      "blue": colors.blue,
      "red": colors.red,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

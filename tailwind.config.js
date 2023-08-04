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
      "sky" : "rgb(186 230 253)",
      "white" : "rgb(255 255 255)", 
      "black" : "rgb(0 0 0)", 
      "gray" : "rgb(128 128 128)"
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

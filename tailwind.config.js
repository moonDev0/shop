/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'wrist': '200px',
        'sm': '500px',   // Small screens (e.g. phones)
        'md': '768px',   // Medium screens (e.g. tablets)
        'lg': '1024px',  // Large screens (e.g. laptops)
        'xl': '1050px',  // Extra large screens (e.g. desktops)
        '2xl':'1054px',
      },
      
      colors: {
        primary: "rgba(0, 0, 0, 0.7)",
        secondary:"rgb(88, 145, 103)",
        lightPrimary: "#1C83FB",
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        secondary: "rgb(88, 145, 103)",
        dark: "rgb(26, 26, 26)",
        lightBlue: "#D7FAFF",
        primary: "rgba(0, 0, 0, 0.68);",
        grey: "rgb(245, 244, 240)e",
        lightBlue: "#D7FAFF",
        blue:"#022854",lineHeight: {
        '10': '2.5rem', // Custom line height value
        '12': '3rem',  // Another custom value
      },
        dark:"rgba(7, 7, 7, 0.95);"
      },
      lineHeight: {
        '10': '3.5rem', // Custom line height value
        '12': '4rem',  // Another custom value
      },
      screens:{
        'sm': '480px',   // Small screens (e.g. phones)
        'md': '768px',   // Medium screens (e.g. tablets)
        'lg': '1024px',  // Large screens (e.g. laptops)
        'xl': '1034px',  // Extra large screens (e.g. desktops)
        '2xl':'1088px',
      },
      backgroundImage: {
        'hero':"url('../public/assets/bg_1.jpg')",
        'testimonial':"url('../public/assets/bg_4.jpg')",
        'contact':"url('../public/assets/bg_2.jpg')",
        
      },
    },
  },
  plugins: [],
};
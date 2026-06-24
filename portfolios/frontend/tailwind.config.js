/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '100%', 
        xl: '1440px',    
      },
    },  
  },
  plugins: [
  ],
  corePlugins: {
    preflight: true, /** Ensure it's enabled */
  },
}

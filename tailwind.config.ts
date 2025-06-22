/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",         // App directory (Next.js 13+)
      "./pages/**/*.{js,ts,jsx,tsx}",       // Pages directory
      "./components/**/*.{js,ts,jsx,tsx}",  // Your custom components
    ],
    theme: {
      extend: {
        
        fontFamily: {
          sans: ["var(--font-inter)", "system-ui", "sans-serif"],
          heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
          mono: ["var(--font-geist-mono)", "monospace"],
          switzer: ["var(--font-switzer)", "system-ui", "sans-serif"],
        },
      },
    },
  };
  
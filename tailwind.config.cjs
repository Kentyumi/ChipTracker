/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iosBlue: "#0A84FF",
        iosGreen: "#34C759",
        iosRed: "#FF3B30",
        iosGray: "#F2F2F7",
        iosText: "#1C1C1E"
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"]
      },
      borderRadius: {
        lg: "1rem",
      },
      boxShadow: {
        ios: "0 4px 10px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [require("daisyui")],
}

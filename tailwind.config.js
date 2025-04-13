/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "40%": { opacity: "0.6" },
          "60%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            transform: "translateY(24px) translateX(-0.2px)",
            opacity: "0",
          },
          "20%": {
            transform: "translateY(24px) translateX(-0.2px)",
            opacity: "0.5",
          },
          "80%": {
            transform: "translateY(0) translateX(-0.2px)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateY(0) translateX(-0.2px)",
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            transform: "translateY(0) translateX(-0.2px)",
            opacity: "1",
          },
          "20%": {
            transform: "translateY(24px) translateX(-0.2px)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(24px) translateX(-0.2px)",
            opacity: "0",
          },
        },
      },
      animation: {
        loading: "loading 1s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-in-out forwards",
        "fade-in-up": "fade-in-up 0.4s ease-in-out",
        "fade-out": "fade-out 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};

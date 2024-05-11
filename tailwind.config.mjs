/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      scale: {
        300: "3.00"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "1024px",
            code: {
              background: "#ecfccb",
              padding: "0.2em",
              "&::after, &::before": {
                display: "none"
              }
            }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Cormorant Garamond"',
          '"serif"',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          '"Montserrat"',
          '"sans-serif"',
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
    colors: {
      primary: "#6B0808",
      primaryHover: "#861616",
      secondary: "#3E5F3D",
      secondaryHover: "#487247",
      accent: "#360914",
      accentHover: "#7D1E37",
      text: "#180000",
      background: "#FAFAFA",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2.75rem",
        xl: "4.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};

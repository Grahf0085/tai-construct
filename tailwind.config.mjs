import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      secondary: "#3E5F3D",
      accent: "#360914",
      text: "#180000",
      background: "#FAFAFA",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

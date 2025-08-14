import type { Config } from "tailwindcss";
import { fonts } from "./styles/fonts";

const config: Config = {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx,page.jsx,page.tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D4B2E",
          secondary: "#E6E0B6",
          accent: "#D4B200",
          dark: "#132F1C",
          white: "#FFFFFF",
          black: "#000000",
        },
        neutral: {
          100: "#FAF8F1",
          200: "#F3EED9",
          300: "#E6E0B6",
          400: "#B5A875",
          500: "#83794F",
        },
      },
      fontFamily: {
        heading: [fonts.family.heading],
        body: [fonts.family.body],
      },
      fontSize: {
        xs: fonts.size.xs,
        sm: fonts.size.sm,
        base: fonts.size.base,
        lg: fonts.size.lg,
        xl: fonts.size.xl,
        "2xl": fonts.size["2xl"],
        "3xl": fonts.size["3xl"],
        "4xl": fonts.size["4xl"],
      },
      fontWeight: {
        regular: fonts.weight.regular,
        medium: fonts.weight.medium,
        bold: fonts.weight.bold,
      },
    },
  },
  plugins: [],
};

export default config;

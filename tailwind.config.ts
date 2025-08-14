import { colors } from "./styles/colors";
import { fonts } from "./styles/fonts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,page.jsx,page.tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: colors.brand.primary,
          secondary: colors.brand.secondary,
          accent: colors.brand.accent,
          dark: colors.brand.dark,
          white: colors.brand.white,
          black: colors.brand.black,
        },
        neutral: colors.neutral,
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

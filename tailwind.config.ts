import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navigationActiveForeground: "var(--navigation-active-foreground)",
        navigationInActiveForeground: "var(--navigation-inactive-foreground)",
        primary2: "var(--primary2)",
        border: "var(--border)",
        backgroundPrimary: "var(--background-primary)",
        placeholder: "var(--placeholder-foreground)",
        primaryText: "var(--primary-text)"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

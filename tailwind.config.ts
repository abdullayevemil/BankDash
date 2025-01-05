import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
        3: "3",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navigationActiveForeground: "var(--navigation-active-foreground)",
        navigationInActiveForeground: "var(--navigation-inactive-foreground)",
        primary2: "var(--primary2)",
        borderPrimary: "var(--border-primary)",
        border: "hsl(var(--border))",
        backgroundPrimary: "var(--background-primary)",
        placeholder: "var(--placeholder-foreground)",
        primaryText: "var(--primary-text)",
        semiTransparent: "var(--semi-transparent)",
        darkSemiTransparent: "var(--dark-semi-transparent)",
        cardSecondaryForeground: "var(--card-secondary-foreground)",
        whiteCardSecondaryForeground: "var(--white-card-secondary-foreground)",
        contactName: "var(--contact-name)",
        transactionBar: "var(--transaction-bar-color)",
        sendButton: "var(--send-button)",
        negativePrice: "var(--negative-price-color)",
        positivePrice: "var(--positive-price-color)",
        buttonPrimaryText: "var(--button-primary-foreground)",
        buttonHoverText: "var(--button-hover-foreground)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
      },
      fontSize: {
        small: "0.8125rem",
        medium: "0.9375rem",
        large: "1.375rem",
        sectionSubtitle: "1.0625rem",
        sectionSubtitleTab: "0.9375rem",
        cardBalanceTab: "0.6875rem",
        cardHolderTab: "0.625rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        large: "1.5625rem",
        medium: "1.25rem",
        small: "0.9375rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

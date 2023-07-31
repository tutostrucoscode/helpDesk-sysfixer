/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        silver: "var(--silver)",
        silver_low: "var(--silver-low)",
        midnightIndigo: "rgb(39, 41, 57)",
        midnightIndigoBlack: "rgb(35, 36, 53)",
        lavenderColor: "rgb(210, 211, 224)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        btnSignup: "hsl(var(--tw-ring-offset-color))",
        radial_bg: "var(--radial-bg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        header: "var(--header-height)",
      },
      zIndex: {
        header: "var(--layer-header)",
      },
      padding: {
        page_l: "var(--page-padding-left)",
        page_r: "var(--page-padding-right)",
        header: "var(--header-height)",
      },
      maxWidth: { page: "var(--page-max-width)" },
      margin: { header: "calc(-1 * var(--header-height))" },
      gradientColorStops: {
        purple: "#8058e6",
        white: "#ffffff",
        transparent: "transparent",
      },
      lineHeight: {
        header: "var(--header-height)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-debug-screens'),
  ],
};

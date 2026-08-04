/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Resume design tokens
        resume: {
          primary: "#B07D4A",
          "primary-light": "#D4A76A",
          "primary-dark": "#8C5E2F",
          bg: "#FAF6F1",
          "bg-alt": "#F2EDE6",
          "bg-dark": "#2C2825",
          "text-primary": "#2C2825",
          "text-secondary": "#6B6560",
          "text-muted": "#A39C95",
          "text-light": "#FAF6F1",
          border: "#E5DED6",
          surface: "#FFFFFF",
          success: "#6B9E78",
          "accent-rose": "#C4908A",
          "accent-sage": "#8BA888",
          "accent-warm": "#D4A76A",
        },
      },
      fontFamily: {
        sans: ["'Noto Sans SC'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Noto Sans SC'", "'Inter'", "system-ui", "sans-serif"],
        mono: ["'Inter'", "monospace"],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
        '2xl': '8rem',
      },
      maxWidth: {
        'container': '1200px',
        'container-narrow': '1000px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        'card': '16px',
        'pill': '20px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 1px 3px rgba(44, 40, 37, 0.06)',
        'card-hover': '0 8px 30px rgba(44, 40, 37, 0.1)',
        'timeline': '0 1px 4px rgba(44, 40, 37, 0.05)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-dot": {
          "0%": { boxShadow: "0 0 0 0 rgba(176, 125, 74, 0.4)" },
          "70%": { boxShadow: "0 0 0 8px rgba(176, 125, 74, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(176, 125, 74, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "bounce-slow": "bounce-slow 1.5s ease-in-out infinite",
        "pulse-dot": "pulse-dot 1.5s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

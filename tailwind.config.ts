import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(58, 104, 137, 0.5) 0%, #3A6889 45.63%, rgba(58, 104, 137, 0.5) 100%)",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-100%) scaleX(0.1)" },
          "25%": { transform: "translateX(-50%) scaleX(0.2)" },
          "50%": { transform: "translateX(0%) scaleX(0.5)" },
          "75%": { transform: "translateX(50%) scaleX(0.2)" },
          "100%": { transform: "translateX(100%) scaleX(0.1)" },
        },
      },
      animation: {
        "move-infinite": "move 3s linear infinite",
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        text: {
          primary: "#001F1D",
          secondary: "#484A4D",
          tertiary: "#787B80",
          dark: "#000C0B",
          "dark-2": "#2B2B2B",
          disabled: "#c9cacc",
        },
        button: {
          secondary: "#e5ebeb",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        content: "75rem",
      },
      padding: {
        "5.5": "1.375rem",
      },
      margin: {
        "22": "5.25rem",
      },
      height: {
        "13": "3.25rem",
        "15": "3.75rem",
        "42": "10.313rem",
      },
      width: {
        "13": "3.25rem",
        "15": "3.75rem",
        "42": "10.313rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

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

        cloro:{
          100:"#121212",
          200:"#232329",
          300:"#5e285e",
          400:"#d84dd8",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

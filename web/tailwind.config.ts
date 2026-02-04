import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        tech: ["var(--font-tech)"]
      }
    }
  },
  plugins: []
};

export default config;

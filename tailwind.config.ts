import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /** Design tokens used across the site (required for utilities like bg-surface, text-accent). */
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F7F7F5",
        surface2: "#EFEFEB",
        ink: "#111110",
        ink2: "#3D3D3A",
        ink3: "#9B9B97",
        accent: "#C4541A",
        accentHover: "#A8441A",
        gold: "#C9A84C",
        border: "#E4E4E0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

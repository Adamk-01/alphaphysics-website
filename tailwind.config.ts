import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: {
    navy: { DEFAULT: "#0F2F73", dark: "#0A2054", light: "#E8EEFA" },
    gold: { DEFAULT: "#D9A21B", dark: "#B98410" },
    brand: { green: "#0B5D2A" },
  } } },
  plugins: [],
} satisfies Config;

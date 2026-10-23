import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0F2F73", dark: "#0A2054", light: "#E8EEFA" },
        /**
         * `gold.dark` is used for small text on light backgrounds, which needs 4.5:1.
         * The old #B98410 measured 3.30:1 on white; #8A5F00 measures 5.4:1.
         * Keep the bright `gold` for large text and decoration on navy, where it passes.
         */
        gold: { DEFAULT: "#D9A21B", dark: "#8A5F00" },
        brand: { green: "#0B5D2A" },
      },
    },
  },
  plugins: [],
} satisfies Config;

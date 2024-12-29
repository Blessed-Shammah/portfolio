import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#4FD1C5',
          500: '#38B2AC',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

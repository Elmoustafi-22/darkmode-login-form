import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        darkBlue: "#15314B",
        gray: "#c6d1d8",
        white: "#fff",
      },
    extend: {
      backgroundImage: {
        store: "url('/store2.jpg')",
        darkBg: "linear-gradient(to bottom, #15314b 0%, #c6d1d8 100%)",
        lightBg: "linear-gradient(to bottom, #15314b 0%, #c6d1d8 50%, #fff 100%)"
      },
    },
  },
  plugins: [],
} satisfies Config;

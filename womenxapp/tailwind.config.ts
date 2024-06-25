import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '480px', // example of adding a custom breakpoint
      },
      fontSize: {
        '5xl': ['3rem', '1.2'], // example of customizing a utility
        'custom-size': ['2rem', '1.5'] // custom font size with line height
      }
    },
  },
  plugins: [],
};
export default config;

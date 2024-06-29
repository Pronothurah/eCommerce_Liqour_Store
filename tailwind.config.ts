import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e1e1e',
        'secondary': '#b8bbd1',
        'gray': '#545454',
        'crimson': '#F5EFDB',
        'white': '#fff',
        'golden': '#DCCA87',
      },
      fontFamily: {
        'base': ['"Reem Kufi"', 'sans-serif'],
      },
    },
  },  
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
export default config;

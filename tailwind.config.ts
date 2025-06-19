import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      catamaran: ["Catamaran", "sans-serif"],
      neuton: ["Neuton", "serif"],
    },
    colors: {
      lightest: '#f0e4d6',
      light: '#b5ca50',
      midtone: '#b5ca50',
      bright: '#df6f42',
      dark: '#1d0787'
    },
    fontSize: {
      xs: '16px',
      sm: '18px',
      lg: '24px',
      xl: '60px'
    }
  },
  plugins: [],
};
export default config;

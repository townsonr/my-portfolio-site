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
      lightest: '#F7E5B8',
      light: '#EFA34E',
      midtone: '#71B2C2',
      bright: '#D25015',
      dark: '#364A5D'
    },
    fontSize: {
      xs: '16px',
      sm: '18px',
      lg: '24px',
      xl: '36px'
    }
  },
  plugins: [],
};
export default config;

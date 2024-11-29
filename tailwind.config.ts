import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login-image':"url('/imageOne.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonPrimary:"var(--button-primary)",
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

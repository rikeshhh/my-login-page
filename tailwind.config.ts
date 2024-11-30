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
        'tribali-image-1':"url('/tribali/Tribali_website_comingsoon1.png')",
        'tribali-image-2':"url('/tribali/Tribali_website_comingsoon2.png')",
        'tribali-image-3':"url('/tribali/Tribali_website_comingsoon3.png')"
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

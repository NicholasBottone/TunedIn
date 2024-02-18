import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Broad coverage from Figma project
  theme: {
    extend: {
      // Your application's font family extension
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        lexend: "Lexend", // From Figma project
      },
      // Figma project customizations
      colors: {
        midnightblue: "#391f67",
        white: "#fff",
        darkslateblue: "rgba(119, 96, 161, 0.74)",
        gray: "#0e0e0e",
        darkslategray: "#373737",
      },
      spacing: {}, // Customize as needed
      borderRadius: {
        "71xl": "90px",
      },
      fontSize: {
        sm: "14px",
        "21xl": "40px",
        "5xl": "24px",
        "13xl": "32px",
        lg: "18px",
        xl: "20px",
        inherit: "inherit",
      },
      screens: {
        mq1025: { raw: "screen and (max-width: 1025px)" },
        mq975: { raw: "screen and (max-width: 975px)" },
        mq725: { raw: "screen and (max-width: 725px)" },
        mq450: { raw: "screen and (max-width: 450px)" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Decision based on project needs
  },
} satisfies Config;

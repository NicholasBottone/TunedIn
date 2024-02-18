/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#391f67",
        "neutral-500": "#6b7280",
        "neutral-900": "#111827",
        darkslategray: {
          "100": "#373737",
          "200": "rgba(65, 65, 65, 0.89)",
        },
        white: "#fff",
        darkslateblue: "rgba(119, 96, 161, 0.74)",
        gray: {
          "100": "#292b2f",
          "200": "#0e0e0e",
        },
        dodgerblue: "#3d89f6",
      },
      spacing: {},
      fontFamily: {
        "body-xl-medium": "Inter",
        lexend: "Lexend",
      },
      borderRadius: {
        "71xl": "90px",
        "29xl": "48px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      sm: "14px",
      lg: "18px",
      lgi: "19px",
      "7xl": "26px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

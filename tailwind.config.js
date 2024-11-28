/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#809bce",
          300: "#95b8d1",
          400: "#6d89bc",
          500: "#5a76a9",
          600: "#4a6596",
          700: "#3a5483",
          800: "#2a4370",
          900: "#1a325d",
        },
        secondary: {
          50: "#f0faf7",
          100: "#e1f5ef",
          200: "#b8e0d2",
          300: "#d6eadf",
          400: "#a5cdbf",
          500: "#92baac",
          600: "#7fa799",
          700: "#6c9486",
          800: "#598173",
          900: "#466e60",
        },
        accent: {
          50: "#fdf2f6",
          100: "#fbe5ed",
          200: "#eac4d5",
          300: "#ecd5e0",
          400: "#d7b1c2",
          500: "#c49eaf",
          600: "#b18b9c",
          700: "#9e7889",
          800: "#8b6576",
          900: "#785263",
        },
        dark: {
          DEFAULT: "#1f2937",
          light: "#374151",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 40s linear infinite",
        "scroll-right": "scrollRight 40s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};

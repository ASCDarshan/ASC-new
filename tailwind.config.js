// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#809bce',    // Original primary
          300: '#95b8d1',    // Light variant
          400: '#6d89bc',    // Darker variant
          500: '#5a76a9',
          600: '#4a6596',
          700: '#3a5483',
          800: '#2a4370',
          900: '#1a325d',
        },
        secondary: {
          50: '#f0faf7',
          100: '#e1f5ef',
          200: '#b8e0d2',    // Original secondary
          300: '#d6eadf',    // Light variant
          400: '#a5cdbf',
          500: '#92baac',
          600: '#7fa799',
          700: '#6c9486',
          800: '#598173',
          900: '#466e60',
        },
        accent: {
          50: '#fdf2f6',
          100: '#fbe5ed',
          200: '#eac4d5',    // Original accent
          300: '#ecd5e0',    // Light variant
          400: '#d7b1c2',
          500: '#c49eaf',
          600: '#b18b9c',
          700: '#9e7889',
          800: '#8b6576',
          900: '#785263',
        },
        dark: {
          DEFAULT: '#1f2937',
          light: '#374151',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
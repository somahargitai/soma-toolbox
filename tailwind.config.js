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
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#ffffff',
        },
        // gray: {
        //   50: '#f9fafb',
        //   100: '#f3f4f6',
        //   200: '#e5e7eb',
        //   300: '#d1d5db',
        //   400: '#9ca3af',
        //   500: '#6b7280',
        //   600: '#4b5563',
        //   700: '#374151',
        //   800: '#1f2937',
        //   900: '#111827',
        // },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#151618',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} 
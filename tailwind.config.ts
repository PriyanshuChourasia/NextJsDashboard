import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        white:"#ffffff",
        gray:{
          100:"#f3f4f6",
          200:"#e5e7eb",
          300:"#d1d5db",
          500:"#6b7280",
          700:"#374151",
        },
        blue: {
          200: "#93c5fd",
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        "dark-bg":"#101214",
        "dark-secondary":"#1d1f21",
        "dark-tertiary":"#3b3d40",
        "blue-primary":"#0275ff",
        "stroke-dark":"#2d3135",
        "light-bg":"#DBDBDB"
      },
      backgroundImage:{
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      screens:{
        sm: {min: '300px',max:'640px'},
        md: {min: '641px',max:'768px'},
        lg: {min: '769px',max:'1024px'},
        xl: {min: '1025px'},
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/app/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx}', './src/data/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#050B1A',
        surface: '#0B1633',
        primary: '#1D4ED8',
        accent: '#60A5FA',
        text: '#EFF6FF',
        muted: '#93C5FD',
      },
      boxShadow: {
        glow: '0 0 40px rgba(96, 165, 250, 0.35)',
      },
      backdropBlur: {
        glass: '18px',
      },
    },
  },
  plugins: [],
};

export default config;

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
        background: '#0B0612',
        surface: '#140A24',
        primary: '#4C1D95',
        accent: '#A78BFA',
        text: '#F5F3FF',
        muted: '#C4B5FD',
      },
      boxShadow: {
        glow: '0 0 40px rgba(167, 139, 250, 0.35)',
      },
      backdropBlur: {
        glass: '18px',
      },
    },
  },
  plugins: [],
};

export default config;


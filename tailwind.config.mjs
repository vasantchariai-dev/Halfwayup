/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D3142',
        secondary: '#EF8354',
        accent: '#4ECDC4',
        cream: '#FAF7F2',
        text: '#1A1A1A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

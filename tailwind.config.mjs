/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF4D00',
        dark: '#080808',
        'dark-surface': '#101010',
      },
    },
  },
  plugins: [],
};
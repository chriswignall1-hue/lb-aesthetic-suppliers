/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF7F4',
        'cream-dark': '#F2EDE8',
        coral: '#FF6B4A',
        pink: '#FF3E7E',
        magenta: '#D4148A',
        purple: '#8B1FC8',
        violet: '#5B21B6',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B4A 0%, #FF3E7E 30%, #D4148A 55%, #8B1FC8 80%, #5B21B6 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(255,107,74,0.15) 0%, rgba(255,62,126,0.15) 30%, rgba(212,20,138,0.12) 55%, rgba(139,31,200,0.10) 80%, rgba(91,33,182,0.08) 100%)',
      },
    },
  },
  plugins: [],
};

import typography from '@tailwindcss/typography';
import grid from '@savvywombat/tailwindcss-grid-areas';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
    ],
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        site: ['main aside'],
        'site-small': ['aside', 'main'],
      },
      gridTemplateColumns: {
        site: 'minmax(38rem, 1fr) auto',
        'site-small': '1fr',
      },
    },
  },
  plugins: [typography, grid],
};

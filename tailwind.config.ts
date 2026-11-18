import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FCFCFB',
        surface: { DEFAULT: '#F4F4F1', hover: '#EFEFEA' },
        ink: '#1B1D21',
        muted: '#63676E',
        line: '#E1E1DC',
        accent: { DEFAULT: '#1F6F5C', ink: '#14493D', soft: '#E7EFEC' },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(27, 29, 33, 0.03)',
        'card-hover': '0 6px 16px rgba(27, 29, 33, 0.06)',
        'marker-active': '0 0 0 5px #E7EFEC, 0 0 16px 4px rgba(31, 111, 92, 0.55)',
        glow: '0 0 10px 2px rgba(31, 111, 92, 0.4), 0 0 24px 4px rgba(31, 111, 92, 0.18)',
      },
      transitionTimingFunction: { rise: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
} satisfies Config

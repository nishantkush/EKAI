/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ekai: {
          bg: '#F7F5F0',          // Primary Warm Linen / Alabaster
          surface: '#EBE7DF',     // Secondary Soft Travertine / Warm Greige
          border: '#DCD7CD',      // Border / Hairline Divider (Warm Stone)
          primary: '#1C1B1A',     // Deep Charcoal
          muted: '#6E6A63',       // Warm Slate / Metadata
          accent: '#8FA3B3',      // Steel Blue (from swatch)
          'accent-dark': '#6D8496', // Steel Blue Deep Variant (hover/active)
          'accent-light': '#D6DFE6',// Steel Blue Light Tint
          'accent-subtle': '#EEF2F5', // Steel Blue Subtle
        }
      },
      fontFamily: {
        sans: ['"Roboto"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Roboto"', 'sans-serif'],
        editorial: ['"Roboto"', 'sans-serif'],
        mono: ['"Roboto"', 'sans-serif'],
      },
      letterSpacing: {
        'micro': '0.12em',
        'wide-editorial': '0.18em',
        'ultra-wide': '0.25em',
      },
      lineHeight: {
        'architectural': '1.7',
      },
      boxShadow: {
        'subtle': '0 2px 20px -4px rgba(28, 27, 26, 0.05)',
        'elevated': '0 12px 40px -12px rgba(28, 27, 26, 0.08)',
        'modal': '0 24px 60px -15px rgba(28, 27, 26, 0.15)',
      }
    },
  },
  plugins: [],
}

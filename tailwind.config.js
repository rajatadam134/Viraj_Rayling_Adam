/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF8F5',
          subtle: '#F3EFE9',
          muted: '#EBE5DC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#F7F5F0',
          dark: '#141312',
        },
        hairline: {
          light: '#EAE5DB',
          DEFAULT: '#DDD6C9',
          dark: '#BAAF9E',
        },
        ink: {
          DEFAULT: '#191816',
          secondary: '#5C564D',
          muted: '#8E867A',
          faint: '#BCB5A8',
        },
        brand: {
          terracotta: '#8C482E',
          umber: '#4A3326',
          brass: '#B88B4A',
          sage: '#485844',
          indigo: '#2A3C4D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'crisp': '0 1px 3px rgba(25, 24, 22, 0.05), 0 1px 2px rgba(25, 24, 22, 0.03)',
        'elevated': '0 4px 12px rgba(25, 24, 22, 0.06), 0 1px 3px rgba(25, 24, 22, 0.04)',
        'modal': '0 20px 40px -15px rgba(25, 24, 22, 0.15)',
      }
    },
  },
  plugins: [],
}

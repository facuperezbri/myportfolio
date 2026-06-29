/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        claude: {
          bg: '#1A1B23',
          fg: '#E5E7EB',
          accent: '#FF8C42',
          error: '#EF4444',
          success: '#10B981',
          warning: '#F59E0B',
          blue: '#3B82F6',
          magenta: '#8B5CF6',
          cyan: '#06B6D4',
          muted: '#4B5563',
        },
        p: {
          bg: '#0A0A0F',
          surface: '#111118',
          border: '#1E1E2E',
          text: '#F0F0F5',
          muted: '#6B6B80',
          accent: '#FF8C42',
          purple: '#8B5CF6',
          green: '#10B981',
          red: '#EF4444',
        },
      },
      animation: {
        'cursor-blink': 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

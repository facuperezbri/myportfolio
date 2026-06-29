import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const config = [
  // Only lint source files — not the config file itself
  {
    ignores: [
      '*.mjs',
      '*.js',
      '.next/**',
      'node_modules/**',
    ],
  },
  // Apply next config only to src
  ...[...nextCoreWebVitals, ...nextTypescript].map((c) =>
    c.files ? c : { ...c, files: ['src/**/*.{ts,tsx}'] }
  ),
  // Fix React version detection for bundled plugin
  {
    files: ['src/**/*.{ts,tsx}'],
    settings: {
      react: { version: '19' },
    },
  },
]

export default config

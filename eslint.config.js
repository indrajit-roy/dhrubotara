import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
  {
    rules: {
      // Custom rule overrides
      'react/jsx-no-target-blank': 'off',
      'react/no-unknown-property': 'off',
    },
  },
])

export default eslintConfig

// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
})
  .append({
    rules: {
      // 'style/comma-dangle': ['error', 'always-multiline'],
      'no-irregular-whitespace': 'warn',
      'vue/no-irregular-whitespace': 'warn',
      '@stylistic/space-before-function-paren': ['error', 'always'],
      'curly': ['error', 'all'],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          markers: [
            '#region',
            '#endregion',
            '/',
          ],
        },
      ],
      '@stylistic/comma-dangle': 'off',
    },
  })

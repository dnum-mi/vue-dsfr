// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
}, [
  {
    rules: {
      'test/prefer-lowercase-title': 'off',
      'sort-imports': 'off', // Should be 'error'
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
      'antfu/top-level-function': 'error',
      'style/quote-props': ['error', 'consistent-as-needed'],
      'vue/quote-props': ['error', 'consistent-as-needed'],
      'ts/consistent-type-definitions': 'on',
      'style/arrow-parens': ['error', 'as-needed'],
      'style/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'style/max-statements-per-line': ['error', { max: 1 }],
      'vue/no-irregular-whitespace': 'warn',
      'no-irregular-whitespace': 'warn',
      'perfectionist/sort-imports': 'off', // import/order is better
      'perfectionist/sort-exports': 'off',
      'style/space-before-function-paren': ['error', 'always'],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'curly': ['error', 'all'],
      'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
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
      'style/spaced-comment': [
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
    },
  },
])

import antfu from '@antfu/eslint-config'

// const compat = new FlatCompat({
//   baseDirectory: import.meta.dirname,
// })

export default antfu({
  vue: true,
}, [
  {
    rules: {
      'test/prefer-lowercase-title': 'off',
      'sort-imports': 'off', // Should be 'error'
      'import/order': 'off', // Should be 'error'
      'antfu/top-level-function': 'off', // Should be 'error'
      'style/quote-props': ['error', 'as-needed'], // Should be ['error', 'consistent-as-needed']
      'vue/quote-props': ['error', 'as-needed'], // Should be ['error', 'consistent-as-needed']
      'ts/consistent-type-definitions': 'off', // Should be 'on'
      'style/arrow-parens': 'off', // Should be ['error', 'as-needed']
      'style/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'style/max-statements-per-line': 'off', // Should be 'error'
      'vue/no-irregular-whitespace': 'warn',
      'no-irregular-whitespace': 'warn',
      'style/space-before-function-paren': ['error', 'always'],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      curly: ['error', 'all'],
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
  {
    files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'import/no-anonymous-default-export': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },
])

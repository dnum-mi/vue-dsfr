/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/standard',
    'plugin:storybook/recommended',

  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'no-irregular-whitespace': 1,
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      rules: {
        semi: ['error', 'never'],
        quotes: [2, 'single'],
      },
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/*.{j,t}s?(x)', '**/src/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: [
        'cypress/support/*.{js,ts,jsx,tsx}',
        'cypress/integration/*.{spec,e2e}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec,e2e}.{js,ts,jsx,tsx}',
        'src/**/*.ct.{js,ts,jsx,tsx}',
        '**/src/**/*.e2e.{j,t}s?(x)',
      ],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}

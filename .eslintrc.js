module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/standard', 'plugin:storybook/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': [2, 'always-multiline'],
    'no-irregular-whitespace': 1,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
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
      files: ['**/src/**/*.e2e.{j,t}s?(x)'],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
    },
  ],
}

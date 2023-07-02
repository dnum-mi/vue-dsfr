require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/standard',
    'plugin:storybook/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
    'html',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
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
      files: [
        'cypress/support/*.{js,ts,jsx,tsx}',
        'cypress/integration/*.{spec,e2e}.{js,ts,jsx,tsx}',
        'src/**/*.ct.{js,ts,jsx,tsx}',
        '**/src/**/*.e2e.{j,t}s?(x)',
      ],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
    },
  ],
}

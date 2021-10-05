module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
  ],
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
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/*.{j,t}s?(x)',
        '**/src/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}

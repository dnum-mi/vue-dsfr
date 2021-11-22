module.exports = {
  presets: [[
    '@babel/preset-env',
    {
      targets:
      { node: 'current' },
    },
  ],
  ],
  plugins: [
    '@babel/plugin-syntax-jsx',
  ],
  env: {
    test: {
      plugins: [
        'babel-plugin-transform-import-meta',
      ],
    },
  },
}

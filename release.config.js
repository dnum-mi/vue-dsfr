module.exports = {
  release: {
    branches: [
      '+([0-9])?(.{+([0-9]),x}).x',
      'main',
      'next',
      'next-major',
      { name: 'beta', prerelease: true },
      { name: 'alpha', prerelease: true },
    ],
  },
  assets: ['dist/*.js', 'dist/*.css'],
}

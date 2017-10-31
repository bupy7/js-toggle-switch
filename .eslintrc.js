module.exports = {
  extends: 'standard',
  globals: {
    expect: true,
    chai: true
  },
  env: {
    mocha: true,
    browser: true
  },
  plugins: [
    'chai-friendly'
  ]
};

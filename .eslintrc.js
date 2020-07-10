module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['warn', { args: 'none' }],
    'no-console': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['prettier', 'svelte3'],
};

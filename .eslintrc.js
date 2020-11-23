module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    'no-alert': 0,
    'arrow-body-style': 0,
    'no-unused-vars': 0,
  },
};

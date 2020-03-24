module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': 'off',
    indent: 'off',
  },
};

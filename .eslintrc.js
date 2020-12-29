module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  //自动发现React的版本，从而进行规范react代码
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/display-name': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
  },
};

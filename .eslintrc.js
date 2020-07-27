module.exports = {
  root: true,
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extenstion': 'off',
    'react/jsx-one-expresstion-per-line': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    indent: ['error', 2],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  extends: '@react-native-community',
};

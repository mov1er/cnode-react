module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never',
    }],
    'radix': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
  },
  "env": {
      "browser": true
  },
  "globals": {
  },
}
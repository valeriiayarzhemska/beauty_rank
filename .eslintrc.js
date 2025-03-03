module.exports = {
  root: true,
  env: {
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};

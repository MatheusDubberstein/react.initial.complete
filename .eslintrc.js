module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-import-helpers', 'prettier'],
  rules: {
    // se não tiver em acordo com prettier ira retornar um erro
    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',

    // deixa o react usar o .js e .jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    // ordena as importações
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^prop-types/',
          '/^react/',
          '/^redux/',
          '/^styled/',
          'module',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};

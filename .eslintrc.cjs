// const { flatten } = require('eslint-plugin-vue/lib/utils/index.js');
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    // 'plugin:@typescript-eslint/recommended',
  ],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // indent: ['error', 'tab'],
    // 'linebreak-style': ['error', 'auto'],
    'vue/multi-word-component-names': 'off',
    quotes: 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     semi: true,
    //     useTabs: false,
    //     tabWidth: 2,
    //     trailingComma: 'all',
    //     printWidth: 120,
    //     bracketSpacing: true,
    //     arrowParens: 'avoid',
    //     endOfLine: 'auto',
    //   },
    // ],
  },
};

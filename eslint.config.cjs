/* eslint-disable @typescript-eslint/no-require-imports */
const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    ignores: ['lib/**', 'coverage/**', 'examples/apidoc/**'],
  },
  ...tsEslintPlugin.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.linting.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-param-reassign': ['error'],
      'array-bracket-spacing': ['error', 'never'],
      'linebreak-style': ['error', 'unix'],
      'lines-between-class-members': ['warn', 'always'],
      semi: ['error', 'always'],
      'new-cap': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'no-mixed-spaces-and-tabs': 2,
      'no-use-before-define': [2, 'nofunc'],
      'no-unreachable': ['warn'],
      'no-extra-parens': 'off',
      'no-mixed-operators': 'off',
      quotes: [2, 'single', 'avoid-escape'],
      'block-scoped-var': 2,
      'brace-style': [2, '1tbs', { allowSingleLine: true }],
      'computed-property-spacing': [2, 'never'],
      'keyword-spacing': 2,
      'space-unary-ops': 2,
    },
  },
];

import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-restricted-properties': [
        'error',
        {
          object: 'console',
          property: 'error',
          message:
            'Please use a proper logging system instead of console.error',
        },
      ],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: false,
        },
      ],
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: [
      '**/__tests__/**',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/jest.setup.js',
      '**/__mocks__/**',
    ],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      'dist/**/*',
      'node_modules/**/*',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'webpack.config.cjs',
    ],
  },
  prettier,
];

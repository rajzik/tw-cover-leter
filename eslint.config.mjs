// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
// FIXME: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/891
// import eslintPluginJsxA11y  from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        myCustomGlobal: 'readonly',
      },
    },
  },
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts,astro,cjs,mjs,jsx,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    files: ['**/*.{cjs,cts}'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,js,jsx,mjs}'],
    languageOptions: {
      sourceType: 'module',
    },
  },
  ...tseslint.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  // eslintPluginJsxA11y.configs['flat/jsx-a11y-strict'],
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/text-encoding-identifier-case': 'off',
    },
  },
  eslintConfigPrettier,
);

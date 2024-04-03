
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // ...eslintPluginUnicorn.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {
    }
  },
  eslintConfigPrettier,
);
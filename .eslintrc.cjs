module.exports = {
  parserOptions: {
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
  },
  env: { es6: true },
  extends: ['@yurychang', '@yurychang/typescript', 'prettier'],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'vitest.config.ts',
  ],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-unused-expressions': 'off',
  },
  overrides: [
    {
      files: ['src/vue/*.{vue,ts}', 'demo/vue/*.{vue,ts}'],
      extends: ['plugin:vue/vue3-recommended'],
      parser: 'vue-eslint-parser',
      rules: {
        'plugin:@typescript-eslint/recommended-type-checked': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
};

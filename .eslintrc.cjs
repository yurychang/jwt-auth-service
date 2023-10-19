module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: { es6: true },
  extends: ['@yurychang', '@yurychang/typescript', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};

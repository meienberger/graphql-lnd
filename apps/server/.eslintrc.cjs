module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['../../packages/eslint-config/lib/eslint-config.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};

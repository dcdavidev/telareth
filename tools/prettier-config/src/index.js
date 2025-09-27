/**
 * @see https://prettier.io/docs/configuration
 * @typedef {import("prettier").Config}
 */
const config = {
  plugins: [
    'prettier-plugin-sh',
    'prettier-plugin-toml',
    'prettier-plugin-prisma',
    'prettier-plugin-packagejson',
  ],

  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  endOfLine: 'lf',

  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        parser: 'markdown',
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      options: {
        printWidth: 80,
      },
    },
    {
      files: ['*.toml'],
      options: {
        printWidth: 100,
      },
    },
  ],
};

export default config;

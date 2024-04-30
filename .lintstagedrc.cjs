const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `bun prettier --write ${filenames.join(' ')}`;

const buildCssCommand = (filenames) => `bun stylelint ${filenames.join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.(ts|tsx|js|md|json)': [buildPrettierCommand],
  '*.css': [buildCssCommand],
};

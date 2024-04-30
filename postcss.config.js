const path = require('path');

const { alpha } = require('./src/styles/abstracts/functions');

module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, './src/styles/abstracts'),
    },
    'postcss-simple-vars': {},
    'postcss-preset-env': {
      autoprefixer: { grid: false },
      stage: 0,
      features: {
        clamp: false,
        'logical-properties-and-values': false,
        'media-query-ranges': {
          preserve: true,
        },
        'custom-properties': false,
      },
    },
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-functions': {
      functions: {
        alpha,
      },
    },
  },
};

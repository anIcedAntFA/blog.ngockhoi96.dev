export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'import-notation': 'string',
    'declaration-empty-line-before': null,
    'order/properties-order': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['alpha', 'rem'],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['/^grid.*/', '/place.*/'],
      },
    ],
  },
};

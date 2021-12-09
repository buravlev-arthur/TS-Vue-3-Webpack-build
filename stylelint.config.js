module.exports = {
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.vue$/],
      },
    ],
  ],
  extends: 'stylelint-config-standard-scss',
  rules: {
    'no-empty-first-line': null,
    'no-empty-source': null,
  },
};

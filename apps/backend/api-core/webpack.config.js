const { composePlugins, withNx, createCopyPlugin } = require('@nrwl/webpack');
const { merge } = require('webpack-merge');

module.exports = composePlugins(withNx(), (config) => {
  return merge(config, {
    plugins: [
      new createCopyPlugin([{
        glob: './apps/backend/api-core/features/cases',
        output: 'cases'
      }, {
        glob: './apps/backend/api-core/cucumber.js',
        output: ''
      }])
    ]
  });
});


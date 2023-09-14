// eslint-disable-next-line node/no-unpublished-require
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
};

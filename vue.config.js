const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('styles', path.resolve(__dirname, 'src/assets/style'));
  },
};

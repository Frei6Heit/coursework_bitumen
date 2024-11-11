const path = require('path');

module.exports = function override(config, env) {
  // Настройки для Pug
  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-loader',
  });

  // Настройки для Stylus
  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      'stylus-loader',
    ],
  });

  return config;
};

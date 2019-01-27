const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      UNSPLASH_ACCESS_KEY: JSON.stringify(process.env.UNSPLASH_ACCESS_KEY),
    }),
  ],
};

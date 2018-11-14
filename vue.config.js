const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8087', // http://192.168.50.98:8000
        changeOrigin: true,
        ws: true,  // websocket
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/variables.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('cur')
      .test(/\.(cur)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000,
        name: 'img/[name].[hash:8].[ext]',
      });
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};

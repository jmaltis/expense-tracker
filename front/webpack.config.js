var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8585',
    'webpack/hot/dev-server',
    './src/js/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: '/bundle.js'
  },

  // Allow to import module without specifying the complete path (just need the module name)
  resolve: {
    modulesDirectories : [
      'node_modules'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};

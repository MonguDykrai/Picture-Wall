const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  devServer: {
    open: true,
    port: 3000
  },

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|gif)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}
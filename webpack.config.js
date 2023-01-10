const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    todo: './src/ToDo.js',
    list: './src/todoList.js',
    index: './src/index.js',
    change: './src/changeList.js',
  },
  target: "web",
  devServer: {
    compress: false,
    host: "0.0.0.0",
    port: 3000,
    open: true
  },
  watchOptions: {
    poll: 1000,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

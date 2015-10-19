var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var appList = ['./app/app.tsx'];

if(process.env.NODE_ENV === 'development') {
  appList.unshift('webpack/hot/only-dev-server');
}


module.exports = {
  entry: {
    app: appList
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: './app/index.html'
  })],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    contentBase: './app',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

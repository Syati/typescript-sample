var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var appList = ['./app/index.tsx'];

if(process.env.NODE_ENV === 'development') {
  appList.unshift('webpack/hot/only-dev-server');
}

var currentPath = process.cwd();

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
    root: [
      path.join(currentPath, 'app/assets/stylesheets')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {

    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.less$/, loader: 'style!css!less?strictMath' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  devServer: {
    contentBase: './app',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

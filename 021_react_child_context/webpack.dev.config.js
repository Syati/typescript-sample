var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      './app/App.tsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
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

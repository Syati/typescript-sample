var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var appList = ['./app/client/index.tsx'];
if(process.env.NODE_ENV === 'development') { 
  appList.push('webpack-hot-middleware/client');
}

var currentPath = process.cwd();

module.exports = {
  devtool: 'source-map',  
  entry: {
    app: appList
  },
  output: {
    path: path.resolve(__dirname, "app/static"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),    
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './app/client/index.html'
    })
  ],
  resolve: {
    root: [
      path.join(currentPath, 'app/assets/stylesheets')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader'] },
      { test: /\.less$/, loader: 'style!css!less?strictMath' },
      { test: /\.css$/, loader: 'style!css' },
    ]
  }
};

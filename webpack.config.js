const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: {
  	bundle: __dirname + '/src/index.js',
  	vendor: ['babel-polyfill', 'react', 'react-dom']
  },
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$|.css$/,
        loaders: extractSCSS.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/, 
        loaders: ["sasslint-loader"]
      },
  		{ 
  			test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
  			loader: "url-loader" 
  		},
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|bower_components)/,
  			loader: 'babel-loader',
  			query: {
  				plugins: ['transform-runtime'],
  				presets: ['es2015', 'stage-0', 'react']
  			}
  		}
    ]
  },
  plugins: [
  	extractSCSS,
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.optimize.CommonsChunkPlugin({
    	names: ['vendor', 'manifest']
    }),
  	new webpack.ProvidePlugin({   
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
      })
  ],
	devServer: {
		contentBase: "./dist"
	},
};
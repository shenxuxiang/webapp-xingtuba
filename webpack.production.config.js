var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var pkg = require('./package.json');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/main.jsx'),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + '/build',
        filename: 'js/[name].[chunkhash:8].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test:/\.css$/,
                exclude: /node-modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            }, {
                test:/\.scss$/,
                exclude: /node-modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            }, {
                test:/\.(png|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000&name=image/[name].[chunkhash:8].[ext]'
            }, {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000&name=image/[name].[chunkhash:8].[ext]'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.templ.html'
        }),
        new webpack.BannerPlugin('Copyright 2017'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name].[chunkhash:8].js'
        }),
        new webpack.DefinePlugin({
            __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}

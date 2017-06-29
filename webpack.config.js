var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.jsx'),
    output: {
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    "presets": ['es2015', 'react']
                }
            }, {
                test:/\.css$/,
                exclude: /node-modules/,
                loader: 'style!css!postcss'
            }, {
                test:/\.scss$/,
                exclude: /node-modules/,
                loader: 'style!css!postcss!sass'
            }, {
                test:/\.(png|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000'
            }, {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000'
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
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        }),
        new webpack.DefinePlugin({
            __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3000,
        colors: true
    }

}

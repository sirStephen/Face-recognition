const path = require('path');
const HtmpWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    node: {
        fs: "empty"
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmpWebpackPlugin({
            template: 'app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
};
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        src: './client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './client/index.html'
        }),
    ],
    devServer: {
        static: {
            publicPath: '/',
            directory: path.join(__dirname, '/dist')
        },
        proxy: {
            '/': 'http://localhost:3000',
        },
        hot: true,
        historyApiFallback: true
    },
    devtool: 'source-map'
};
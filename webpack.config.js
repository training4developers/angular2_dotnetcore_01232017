'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcFolder = 'wwwrootsrc';
const distFolder = 'wwwroot';
const tsFolderPath = `./${srcFolder}/ts`;

module.exports = {
    entry: {
        'vendor': `${tsFolderPath}/vendor.ts`,
        'polyfills': `${tsFolderPath}/polyfills.ts`,
        'app': `${tsFolderPath}/main.ts`
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: path.join(__dirname, srcFolder, 'js')
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        },
        {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.html$/,
            loader: 'html'
        },
        {
            test: /\.scss$/,
            exclude: [path.join(__dirname, srcFolder, 'ts')],
            loaders: ['style', 'css', 'sass']
        },
        {
            test: /\.scss$/,
            exclude: [path.join(__dirname, srcFolder, 'scss')],
            loaders: ['raw', 'sass']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, srcFolder, 'images'),
            to: path.join(__dirname, distFolder, 'images')
        }])
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, distFolder, 'js'),
        filename: '[name].js'
    }
};
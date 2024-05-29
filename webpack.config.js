const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') 
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new TerserWebpackPlugin()
    ],
    optimization: {
        minimizer: [new TerserWebpackPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.webp$/,
                type: 'asset/resource'
            }
        ]
    }
};
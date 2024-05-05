const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin()
    ],
    optimization: {
        minimizer: [new TerserWebpackPlugin({})]
    },
    module: {
        rules: [
            {
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ],
                test: /\.css$/
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        // убираем TerserWebpackPlugin из плагинов
        //new TerserWebpackPlugin(),
    ],
    // убираем TerserWebpackPlugin из оптимизации
    //optimization: {
    //    minimizer: [new TerserWebpackPlugin({})]
    //},
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
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
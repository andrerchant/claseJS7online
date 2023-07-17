const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const title = 'Clase JS Forms | '

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: title + 'Login',
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: title + 'Register',
            template: './src/register.html',
            filename: 'register.html',
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
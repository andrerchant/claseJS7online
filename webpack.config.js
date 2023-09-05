const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const title = 'Clase JS Forms | '

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/index.js',
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: title + 'Inicio',
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: title + 'Login',
            template: './src/login.html',
            filename: 'login.html',
        }),
        new HtmlWebpackPlugin({
            title: title + 'Register',
            template: './src/register.html',
            filename: 'register.html',
        }),
        new WebpackManifestPlugin()
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
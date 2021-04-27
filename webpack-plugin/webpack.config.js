// let DonePlugin = require('./plugins/DonePlugin')
// let AssetsPlugin = require('./plugins/AssetsPlugin')
// let ZipPlugin = require('./plugins/ZipPlugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry: './src/index.js',
    externals: {
        'jquery': '$'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}
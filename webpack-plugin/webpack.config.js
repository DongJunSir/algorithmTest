// let DonePlugin = require('./plugins/DonePlugin')
let AssetsPlugin = require('./plugins/AssetsPlugin')
// let ZipPlugin = require('./plugins/ZipPlugin')
module.exports = {
    mode:'development',
    entry: './index.js',
    plugins: [
        // new DonePlugin(),
        new AssetsPlugin()
        // new ZipPlugin()
    ]
}
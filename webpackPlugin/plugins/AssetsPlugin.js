/**
 * 我需要向输出目录里多输出一个文件
 * 你得告诉webpack你输出的文件名和文件内容
 * assets.md
 */
const {RawSource} = require('webpack-sources/lib')
class AssetsPlugin {
    /**
     * compiler代表总的编译对象
     * compilation代表一次编译对象
     * module 一个文件对应一个模块
     * 从入口文件出发，它和它依赖的模块组成一个代码块，chunk.name->main
     * 一般来说一个chunk会生成一个asset，也就是一个资源文件main.js
     * @param {*} compiler 
     */
    apply(compiler) {
        compiler.hooks.emit.tapAsync('AssetsPlugin', (compilation, callback) => {
            let assetLists = ''
            for (let file in compilation.assets) {
                let source = compilation.assets[file].source()
                assetLists += `${file} ${source.length}bytes\r\n`
            }
            // 或者使用RawSource
            compilation.assets['assets.md'] = new RawSource(assetLists)
            // compilation.assets['assets.md'] = {
            //     source() {
            //         return assetLists
            //     }
            // }
            callback()
        })
    }
}
module.exports = AssetsPlugin
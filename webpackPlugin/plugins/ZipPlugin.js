/** 
 * 希望把输出的文件打成一个压缩包做成一个存档文件 
 */
const {RawSource} = require('webpack-sources/lib')
let JSZIP = require('jszip')
const path = require('path')
class ZipPlugin {
    /**
     * 
     * @param {*} compiler 
     */
    apply(compiler) {
        compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
            let zip = new JSZIP()
            for(let filename in compilation.assets) {
                let source = compilation.assets[filename].source()
                zip.file(filename, source)
            }
            zip.generateAsync({type: 'nodebuffer'}).then(content => {
                compilation.assets['assets.zip'] = new RawSource(content)
                callback()
            })
        })
    }
}
module.exports = ZipPlugin
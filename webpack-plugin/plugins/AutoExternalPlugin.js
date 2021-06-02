class AutoExternalPlugin {
    constructor(options) {
        this.options = options;
        this.importedModules = new Set()
    }
    apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('AutoExternalPlugin', (normalModuleFactory) => {
            normalModuleFactory.hooks.parser
            .for('javascript/auto')
            .tap('AutoExternalPlugin', parser => { // babel esprima sacorn
                parser.hooks.import.tap('AutoExternalPlugin', (statement, source) => {
                    this.importedModules.add(source)
                })
                parser.hooks.call.for('require').tap('AutoExternalPlugin',(expression)=> {
                    let value = expression.arguments[0].value;
                    this.importedModules.add(value)
                })
            })
        })
    }
}
module.exports = AutoExternalPlugin
/**
 * 在本插件中我们做什么，分成两步
 * 1.判断一下，查找一下本项目是否用到了某些模块
 * 2.界入，改造生产模块的过程，如果这个模块配置为外部模块，就不需要打包了，会走外部模块的流程。
 *   如果没有配置，就走正常的打包流程。
 */

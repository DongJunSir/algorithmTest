class DonePlugin {
    apply(compiler) {
        compiler.hooks.done.tapAsync('DonePlugin', (stats) => {
            console.log('DonePlugin')
        })
    }
}
module.exports = DonePlugin
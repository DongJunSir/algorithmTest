!(function(prototype) {
    function getDefaultContext(context) {
        context = context || window
        context = Object(context)
        return context
    }
    function call2(context, ...args) {
        context = getDefaultContext(context)
        let fn = Symbol('fn')
        context[fn] = this
        context[fn](...args)
        delete context[fn]
    }
    function apply2(context, args) {
        context = getDefaultContext(context)
        let fn = Symbol('fn')
        context[fn] = this
        context[fn](...args)
        delete context[fn]
    }
    function bind2(context, ...outerArgs) {
        context = getDefaultContext(context)
        return (...args) => this.call2(context, ...outerArgs, ...args)
    }
    prototype.call2 = call2
    prototype.apply2 = apply2
    prototype.bind2 = bind2
})(Function.prototype)

function getName(age, home) {
    console.log(this.name, age, home)
}
let obj = {
    name: 'zhangsan',
    age: 25,
    home: 'beijing'
}
// getName.call2(obj, 25, 'beijing')
// getName.apply2(obj, [25, 'beijing'])
// let getName2 = getName.bind2(obj, 10)
// getName2('beijing')
let index = 0
let stack = []
function next() {
    let fn = stack[index]
    index++
    if (typeof fn === 'function') {
        fn()
    }
}
function task(name) {
    return new T(name)
}
function T(name) {
    stack.push(function () {
        console.log('Hi! This is' + name)
        next()
    })
}
T.prototype.sleep = function (delay) {
    stack.push(function () {
        setTimeout(() => {
            console.log('sleep have run end')
            next()
        }, delay)
    })
    return this
}
T.prototype.eat = function () {
    stack.push(function () {
        console.log('eat have run end')
        next()
    })
    return this
}

task('zhangsan').sleep(1000).eat().sleep(1000).eat()
next()
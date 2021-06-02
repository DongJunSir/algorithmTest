function LazyMan(name) {
    this.task = []
    console.log(`I am ${name}`)
    setTimeout(() => {
        this.next()
    }, 0)
}
LazyMan.prototype.next = function () {
    if (this.task.length > 0) {
        this.task.shift()()
    }
}
LazyMan.prototype.eat = function (food) {
    let self = this
    this.task.push(() => {
        console.log(`eat ${food}`)
        this.next()
    })
    return this
}
LazyMan.prototype.sleep = function (time) {
    let self = this
    this.task.push(() => {
        setTimeout(() => {
            console.log(`睡觉 ${time / 1000} 秒`)
            this.next()
        }, time)
    })
    return this
}
function LazyManInit(name) {
    return new LazyMan(name)
}
LazyManInit('Tom').eat('rice').sleep(1000)
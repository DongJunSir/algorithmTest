function Person(name, age) {
    this.name = name;
    this.age = age
}
Person.prototype = {
    eat() {
        console.log('吃饭')
    }
}
function _new(clazz, ...args) {
    let obj = {}
    obj.__proto__ = clazz.prototype
    clazz.call(obj, ...args)
    return obj
}
let p = _new(Person, 'zhangsan', 18)
console.log(p)
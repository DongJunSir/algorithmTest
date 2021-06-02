function _extends(Child, Father) {
    // 静态继承
    Child.__proto__ = Father
    function Temp() {
    }
    Temp.prototype = Father.prototype
    Temp.prototype.constructor = Child
    Child.prototype = new Temp()
}

var Father = (function() {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.getName = function() {
        console.log(this.name)
    }
    Father.staticFatherName = 'staicFatherName'
    Father.getStaticFatherName = function() {
        console.log(Father.staticFatherName)
    }
    return Father
})()

var Child = (function(_super) {
    _extends(Child, _super)
    function Child(name, age) {
        _super.call(this, name)
        this.age = age
    }
    Child.prototype.getAge = function() {
        console.log(this.age)
    }
    Child.staticChildName = 'staticChildName'
    Child.getStaticChildName = function() {
        console.log(Child.staticChildName)
    }
    return Child
})(Father)

let child = new Child('小明', 10)
child.getName()
child.getAge()
Child.getStaticFatherName()
Child.getStaticChildName()

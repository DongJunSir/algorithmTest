function one() {
    var a = 1;
    function two() {
        var b = 2
        function three() {
            var c = 3
            return () => {
                console.log(a, b, c)
            }
        }
        return three()
    }
    return two()
}
// let fn = one()
// fn()

let globalEC = {
    this: globalThis,
    outer: null,
    ve: { one: '()=>{}', fn: undefined }
}
let oneEC = {
    this: globalThis,
    outer: globalEC,
    ve: { a: 1, two: '()=>{}' }
}
let twoEC = {
    this: globalThis,
    outer: oneEC,
    ve: { b: 2, three: '()=>{}' }
}
let threeEC = {
    this: globalThis,
    outer: twoEC,
    ve: { c: 3 }
}
var closures = [{ c: 3 }, { b: 2 }, { a: 1 }];
let fnEC = {
    this: globalThis,
    outer: globalEC,
    closures: closures,
    ve: {}
}
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC))
function getValue(name, ec) {
    if (name in ec.ve) {
        return ec.ve[name];
    }

    for (let i = ec.closures.length - 1; i >= 0; i--) {
        if (name in ec.closures[i]) {
            return ec.closures[i][name];
        }
    }

    if (ec.outer) {
        return getValue(name, ec.outer);
    }
    return null;
}
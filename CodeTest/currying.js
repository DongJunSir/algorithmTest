function add(a, b, c, d, e) {
    return a + b + c + d + e
}

function currying(fn, outerArgs = []) {
    let len = fn.length
    return function(...args) {
        let newArgs = [...args, ...outerArgs]
        if (len > newArgs.length) {
            return currying(fn, newArgs)
        } else {
            return fn(...newArgs)
        }
    }
}

let sum = currying(add)
console.log(sum(1)(2)(3)(4)(5))
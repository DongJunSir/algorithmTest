function fn() {
    var a = 1;
    let b = 2;
    {//第一个代码块
        let b = 3;
        var c = 4;
        let d = 5;
        console.log(a, b, c, d);
    }
    {//第二个代码块
        let b = 6;
        let d = 7;
        console.log(a, b, c, d);
    }
}
// fn();
// 1.编译阶段 创建globalEC，全局执行上下文
let globalEC = {
    this: globalThis,
    VE: { fn: () => { } }
}
// 2.编译fn，创建fnEC
let fnEC = {
    this: globalEC,
    outer: globalEC,
    VE: { a: undefined, c: undefined },
    LE: [{ b: undefined }]
}
// 3.执行fn
fnEC.VE.a = 1
fnEC.LE[0].b = 2
// 4.执行到第一个块级作用域
fnEC.LE.push({ b: undefined, d: undefined })
fnEC.LE[1].b = 3
fnEC.VE.c = 4
fnEC.LE[1].d = 5
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC), getValue('d', fnEC))
function getValue(name, ec) {
    // 首先查找le
    for (let i = ec.LE.length - 1; i >= 0; i--) {
        if (name in ec.LE[i]) {
            return ec.LE[i][name]
        }
    }
    // 然后查找ve
    if (name in ec.VE) {
        return ec.VE[name]
    }

    // 最后查找outer
    if (ec.outer) {
        return getValue(ec.outer)
    }
    return null
}
// 5.执行到第二个块级作用域
fnEC.LE.pop()
fnEC.LE.push({
    b: undefined,
    d: undefined
});
fnEC.LE[1].b = 6;
fnEC.LE[1].d = 7;
console.log(getValue('a', fnEC), getValue('b', fnEC), getValue('c', fnEC), getValue('d', fnEC));
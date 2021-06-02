// 1.Promise是一个类，类中的构造函数需要传入一个excutor 默认会执行
// 2.executor中有两个参数 分别是resolve reject
// 3.默认创建一个promise 状态是pending 其他连两个状态为fulfilled rejected
// 4.调用成功和失败时，需要传递一个成功的原因和失败的原因
// 5.如果已经成功了就不能失败
// 6.每一个promise实例都有一个then方法
// 7.如果抛出异常按照失败来处理
const Promise = require('./promise.js')
let p = new Promise((resolve, reject) => {
    resolve('成功了')
})
p.then((data) => {
    console.log('success', data)
}, (reason) => {
    console.log('fail', reason)
})


Promise.all = function (prmises) {
    return new Promise((resolve, reject) => {
        let result = []
        function process(index, data) {
            if (index < promises.length) {
                result[i] = data
            } else {
                resolve(result)
            }
        }
        for (let i = 0; i < prmises.length; i++) {
            let p = promises[i]
            if (isPromise(p)) {
                p.then(data => {
                    process(i, data)
                })
            } else {
                process(i, p)
            }
        }
    })
}
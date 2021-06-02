const STATUS = { PENDING: 'PENDING', FULFILLED: 'FULFILLED', REJECTED: 'REJECTED' }
class Promise {
    constructor(executor) {
        this.status = STATUS.PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = []; // 存放成功的回调
        this.onRejectedCallbacks = []; // 存放失败的回调
        const resolve = (val) => {
            if (this.status === STATUS.PENDING) {
                this.status = STATUS.FULFILLED;
                this.value = val
                // 发布执行
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }
        const rejected = (reason) => {
            if (this.status == STATUS.PENDING) {
                this.status = STATUS.REJECTED
                this.reason = reason
                // 发布执行
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, rejected)
        } catch (e) {
            rejected(e)
        }
    }
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === STATUS.FULFILLED) {
                try {
                    let x = onFulfilled(this.value)
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === STATUS.REJECTED) {
                try {
                    let x = onRejected(this.reason)
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === STATUS.PENDING) {
                this.onResolvedCallbacks.push(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolve(X)
                    } catch (e) {
                        reject(e)
                    }
                })
                this.onResolvedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolve(x)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        })
        return promise2
    }
}


module.exports = Promise
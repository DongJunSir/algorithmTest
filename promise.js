function retry(getData, times, delay) {
    return new Promise(function(resolve, reject) {
        function attempt() {
            getData().then(resolve).catch(function(error) {
                console.log(`还有${times}次尝试`)
                if (times === 0) {
                    reject(error)
                } else {
                    times--
                    setTimeout(attempt(), delay)
                }
            })
        }
        attempt()
    })
}

Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let times = 0
        function processData(index, val) {
            result[index] = val
            if (++times === promises.length) {
                resolve(result)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i]
            if (isPromise(p)) {
                p.then(data => {
                    processData(i, data)
                }, reject)
            } else {
                processData(i, p)
            }
        }
    })
}
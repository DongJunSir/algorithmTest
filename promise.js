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
function throttle(func, wait) {
    let previous = 0
    return function() {
        let now = Date.now()
        if (now - previous > wait) {
            func.call(this, arguments)
            previous = now
        }
    }
}
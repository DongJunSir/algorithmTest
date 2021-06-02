setTimeout(function() {
    console.log('setTimeout')
},0)
var p = new Promise(function(resolve, reject) {
    console.log('init promise')
    process.nextTick(function() {
        resolve()
    })    
}).then(function() {
    console.log('promise.then')
})

process.nextTick(function() {
    console.log('nextTick')
})

setImmediate(() => {
    console.log('setImmediate')
})

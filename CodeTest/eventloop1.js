
console.log(1);
 
setTimeout(function() {
    console.log(2);
}, 0);

async function async1() {
    console.log(3);
    await console.log(4);
    console.log(5);
}

async1();

Promise.resolve().then(function() {
    console.log(6);
});

console.log(7);
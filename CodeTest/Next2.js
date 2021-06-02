function LazyMan(name) {
    this.taskList = [];
    console.log(`I am ${name}`);
    setTimeout(() => {
        this.next();
    }, 0)  //setTimeout是异步任务，js会先执行同步任务，这里的同步任务就是把要执行的所有任务推入一个数组。
}
LazyMan.prototype.next = function () {
    if (this.taskList.length > 0) {
        this.taskList.shift()(); //从数组的第一个任务开始执行。
    }
}
LazyMan.prototype.eat = function (food) {
    this.taskList.push(() => {
        console.log(`I am eating ${food}`);
        this.next();  //每个任务执行完弹出下一个任务，这样当前的js执行栈只有这一个任务，就不会出现任务执行顺序错乱。
    })
    return this;
}
LazyMan.prototype.sleep = function (time) {
    this.taskList.push(() => {
        setTimeout(() => {
            console.log(`等待 ${time / 1000} 秒`)
            this.next();
        }, time);
    })
    return this;
}
function LazyManInit(name) {
    return new LazyMan(name)
}
LazyManInit('Tony').eat('rice').sleep(1000).eat('rice')
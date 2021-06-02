
let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// 1.随机取数
function getRandomArrElement(arr, count) {
    let res = [];
    while (res.length < count) {
        // 生成随机index
        let randomIndex = (Math.random() * arr.length) >> 0;
        res.push(arr.splice(randomIndex, 1)[0])
    }
    return res
}
// 2.洗牌算法
// 洗牌算法的思路是
// 先从数组末尾开始，选取最后一个元素，与数组中随机一个位置的元素交换位置
// 然后在已经排好的最后一个元素以外的位置，随机产生一个位置，让该位置元素与倒数第二哥元素进行交换
function shuffle(arr) {
    let len = arr.length;
    while (len) {
        let i = (Math.random() * len--) >> 0;
        let temp = arr[len];
        arr[len] = arr[i]
        arr[i] = temp
    }
    return arr;
}

function getRandomArrElement2(arr, count) {
    let shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index;
    while (i > min) {
        index = Math.floor(Math.random() * (i--));
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp;
    }
    return shuffled.slice(min)
}
console.log(getRandomArrElement2(arr, 5))
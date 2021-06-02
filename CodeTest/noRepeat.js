let targetArr = [1, 2, 3, 1, 2, 3]
// 3.双重便利比对下标
function noRepeat(arr) {
    return arr.filter((v, idx) => idx == arr.lastIndexOf(v))
}
let arr = noRepeat(targetArr)
console.log(arr)
// 4.单遍历  + Object特性
// function noRepeat(arr) {
//     return Object.values(arr.reduce((s, n) => {
//         s[n] = n;
//         return s
//     }, {}))
// }
// let arr = noRepeat(targetArr)
// console.log(arr)
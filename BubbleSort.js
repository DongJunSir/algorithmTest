let arr = [2, 5, 3, 7, 6, 4, 1]
function BubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i <= len - 1; i++) {
        for (var j = 0; j <= len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(BubbleSort(arr))
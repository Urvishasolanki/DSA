// 5. Sum of Array Elements
let arr = [1, 2, 3, 4, 5]
function sumofele(num, l) {
    if (l < 0) {
        return 0;
    }
    return num[l] + sumofele(num, l - 1)

}
console.log(sumofele(arr, arr.length - 1))
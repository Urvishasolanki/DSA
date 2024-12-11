// Write a function getUnique(arr) that takes an array and returns an array of unique elements using a Set.

// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
let arr=[1,2,3,3,4,5]
const set = new Set(arr)
console.log(set)
// Write a function countOccurrences(arr) that uses a Map to count the occurrences of each element in an array.

// Input: [1, 2, 2, 3, 3, 3]
// Output: {1 => 1, 2 => 2, 3 => 3}
let arr = [1, 2, 2, 3, 3, 3];
let myMap = new Map();


arr.forEach((ele) => {
    if(!myMap.has(ele)){
        myMap.set(ele, 1);
    } else {
        myMap.set(ele, myMap.get(ele) + 1);
    }
})

console.log(myMap);
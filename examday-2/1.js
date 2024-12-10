// ### Q1: Find Maximum Element
// Find the largest element in an array

// **Example:**```
// Input:
// 6
// 12 3 45 7 23 9

// Output:
// 45
let arr = [1,2,3,4,5,8,3]
let max = -Infinity;
for(let i=0; i<=arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
  
}
console.log(max)
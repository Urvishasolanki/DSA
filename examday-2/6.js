// ### Q6: Count Vowels
// Count the number of vowels in a given string.

// **Example:**
// ```
// Input:
// hello world

// Output:
// 3
// ```
let arr="hello world";
let count = 0;
for(let i=0; i<=arr.length; i++){
    if(arr[i] == "a" || arr[i] == "o" || arr[i] == "e" || arr[i] == "i" || arr[i] == "u"){
        count++
    }
}
console.log(count)
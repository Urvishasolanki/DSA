// ### Q2: Count Even Numbers
// Count the number of even integers in an array.

// **Example:**
// ```
// Input:
// 5
// 2 3 4 7 8

// Output:
// 3

let arr = [2,3,4,5,6]
let count =0;
for(let i=0; i<=arr.length; i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log(count)
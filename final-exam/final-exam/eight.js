// Write a program to check if there exist two numbers in a 
// sorted array whose sum equals a given target using the two-pointer technique. Example:
// Input: Array: [1, 2, 3, 4, 5, 6], Target: 9
// Output: true (Numbers: 3 and 6). 



let arr = [1, 2, 3, 4, 5, 6];
let left = 0;
let right = arr.length-1;
let target = 9;
let sum = 0;
while(left<=right){
    let sum = arr[left] + arr[right];
    if(sum== target){
        console.log(arr[left],arr[right])
        break;
    }
    if(sum > target){
        right--
    }
    else if(sum <target){
        left++
    }
}
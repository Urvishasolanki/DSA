// Given the array below, update all elements to their squares (element^2) only if the element is an even number. Print the updated array:
const nums = [2, 5, 8, 11, 14];
let ua = []
for(let i=0; i<nums.length;i++){
    if(nums[i]%2==0){
       ua.push(nums[i]*2)
    }
    else{
        ua.push(nums[i])
    }
}
console.log(ua)
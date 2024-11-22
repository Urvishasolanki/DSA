// Write a function to count how many times the number 7 appears in the following array:
const numbers = [7, 3, 7, 8, 2, 7, 4];
let target = 7;
let count = 0;
for(let i=0; i<numbers.length; i++){
  if(numbers[i] == target){
     count++
  }
}
console.log(count)

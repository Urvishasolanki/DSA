// Write a JavaScript function to remove the first occurrence of the number 3 
// from the following array (if it exists) and return the updated array:  
            
const arr = [1, 3, 5, 3, 7, 9];
let arr2 = [];
let target = 3
let index = arr.indexOf(target)

function  fa() {

  for(let i = 0; i<arr.length; i++){
    if(i == index)
    {continue;}
    else{
      arr2.push(arr[i])
    }
  }
    console.log(arr2)

}

fa()

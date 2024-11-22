// Write a function to insert the number 50 into an array of numbers, but only if the array length is less than 5. Test your function with the following array:
let arr = [10, 20, 30, 40,90];


function insert(arr){
    if(arr.length < 5){
        arr.push(50)
        console.log(arr)
    }
    else{
        console.log("length is greater 5")
    }
}
insert(arr)

   



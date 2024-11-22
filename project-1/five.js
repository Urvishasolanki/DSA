// Write a function to modify the array below such that:
                                // Elements at even indices are doubled.
                                // Elements at odd indices are halved.
                                // Return and print the modified array:
const arr = [10, 15, 20, 25, 30]
let ua=[]
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
       ua.push(arr[i]*2)
    }
    else{
        ua.push(arr[i]/2)
    }
}
console.log(ua)

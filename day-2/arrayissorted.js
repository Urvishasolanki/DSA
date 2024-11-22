let arr = [1,2,3,4,5,6]
let arr2 = [2,3,1]
function isSorted(arr){
    for(let x=0; x<arr.length; x++){
        if(arr[x] > arr[x+1]){
            return false;
        }
    }
    return true;
}
console.log(isSorted(arr))
console.log(isSorted(arr2))
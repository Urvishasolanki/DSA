let arr = [1,4,5,6,9,11,15]
let target = 11;
let left = 0;
let right = arr.length-1;
while(left <= right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid] == target){
        console.log(mid)
        break;
    }
    if (arr[mid]>target){
        right= mid -1;
    }
    else if(arr[mid] < target){
        left =  mid +1;
    }

}
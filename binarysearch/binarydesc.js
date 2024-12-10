let arr = [9,7,5,3,2,0]
let target=2;
let left = 0;
let right = arr.length-1;
while(left <= right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]==target){
        console.log(mid);
        break;
    }
    if(arr[mid] < target){
        right = mid -1;
    }
    else if(arr[mid] > target)
    {
        left = mid + 1;
    }
}
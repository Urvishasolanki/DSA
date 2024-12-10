let arr = [2,3,4,4,4,5,6,7,8]
let target = 4;
let left = 0;
let right = arr.length-1;
let ans = -1;
while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid]==target){
        ans = mid;
        left = mid + 1;
    }
    if(arr[mid] < target){
       left  = mid+1;
    }
    else if(arr[mid]> target){
        right = mid-1;
    }
}
console.log(ans)
let arr=[1,2,2,3,5]
let target = 2;
let left = 0;
let right = arr.length;
let ans = arr.length;
while(left < right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid] >= target){
           ans = mid
           right = mid;
    }
   
    else{
        left = mid+1;
    }
}
console.log(ans)
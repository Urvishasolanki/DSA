let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
let start = 0;
let end = arr.length - 1;

while(start <= end){
    let mid = Math.floor((start + end)/2);

    if(arr[mid] == target){
        console.log(mid);
        break;
    }

    if(target < arr[mid]){
        end = mid - 1;
    } else if(target > arr[mid]){
        start = mid + 1;
    }
}
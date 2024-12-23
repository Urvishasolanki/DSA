// Given an array that has been , write a program to find the index of a target value using a modified binary search 
// algorithm. If the target is not found, return -1.Example:
    let arr = [4, 5, 6, 7, 0, 1, 2]
    let left = 0;
    let right = arr.length - 1;
    let target = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

       
        if (arr[mid] === target) {
            console.log(mid);
        }

      
        if (arr[left] <= arr[mid]) {
           
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        } else {
           
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
    }

    console.log(-1); 
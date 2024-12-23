function bs(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (array[mid] == target) {
            console.log(mid); 
        } else if (array[mid] > target) {
            high = mid - 1; 
        } else {
            low = mid + 1; 
        }
    }
    console.log(-1);
}



const arra = [1, 3, 5, 7, 9, 11];
const target = 7;
bs(arra,target)
function bubbleSort(arr) {
   let swap = 0;

    
    for (let i = 0; i <  arr.length - 1; i++) {
       
        for (let j = 0; j <  arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap++;
            }
        }
    }
    console.log(`swap number =`, swap)

    return arr; 
}


const arr = [6, 3, 8, 5, 2];    

console.log(bubbleSort(arr));


let arr = [1, 2, 3, 0, 5, 0, 0, 5, 6];
    let result = []; // 
    let zeroCount = 0; // 

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]); 
        } else {
            zeroCount++;
        }
    }

   
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

console.log(result)


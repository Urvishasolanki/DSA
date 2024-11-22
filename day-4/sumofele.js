// Sum of Each Row
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
 
  for (let row = 0; row < matrix.length; row++) {
    let rowSum = 0; 
    for (let col = 0; col < matrix[row].length; col++) {
      rowSum += matrix[row][col]; 
    }
    console.log(`Sum of row ${row} is: ${rowSum}`);
  }
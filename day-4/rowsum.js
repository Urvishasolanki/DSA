let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Step 2: Calculate the sum of each row
  for (let row = 0; row < matrix.length; row++) {
    let rowSum = 0; // Initialize the sum for the current row
    for (let col = 0; col < matrix[row].length; col++) {
      rowSum += matrix[row][col]; // Add each element of the row
    }
    console.log(`Sum of row ${row} is: ${rowSum}`);
  }
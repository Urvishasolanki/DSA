let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  for (let row = 0; row < matrix.length; row++) {
    let rowString = ""; 
    for (let col = 0; col < matrix[row].length; col++) {
      rowString += matrix[row][col] + " "; 
    }
    console.log(rowString); 
  }
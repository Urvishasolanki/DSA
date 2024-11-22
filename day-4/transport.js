let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
 
  let transpose = [];
  
 
  for (let col = 0; col < matrix[0].length; col++) {
    let newRow = []; 
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]); 
    }
    console.log(newRow) 
  }
  
  
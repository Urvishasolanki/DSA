
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  let target = 5;
  let found = false; 
  
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) {
        console.log(`Element ${target} found at position (${row}, ${col})`);
        found = true;
        break; 
      }
    }
}
    
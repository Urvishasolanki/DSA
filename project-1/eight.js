// Create a 2D array to represent the grid below and write a function to print the sum of its diagonal elements (1 + 5 + 9):
//   1 2 3   4 5 6
//   7 8 9
let a = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
let sum = 0
for(let i=0; i<a.length; i++){
  for(let j=0; j<a[i].length;j++){
      if(a[j]==a[i]){
          console.log(a[i][j])
          sum=sum+a[i][j]
      
      }
    
  }

  
  
}
console.log(sum)
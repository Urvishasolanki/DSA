
// 3. Print Numbers from 1 to N
function printnum(n){
    if(n==0){
        return 0;
    }
    
    printnum(n-1)
    
  console.log(n)
}
printnum(5)
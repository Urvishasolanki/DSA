
// ### Q7: Reverse String

// Reverse the given string.

// **Example:**
// ```
// Input:
// hello

// Output:
// olleh
let str="hello";
let Reversestr = "";
for(let i=str.length-1; i>=0; i--){
  Reversestr += str[i]
}
console.log(Reversestr)
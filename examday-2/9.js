// ### Q9: Convert to Uppercase
// Convert the given string First Letter to uppercase.

// **Example:**
// ```
// Input:
// hello world

// Output:
// Hello World
// ```
// let str = "hello world";
// console.log(str[0].toLocaleUpperCase() + str.slice(1))
function uppercase(){
let str="hello world";
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
}
return words.join(" ");
}
console.log(uppercase())
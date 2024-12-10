let str="hello world python"
let newstr = ""; 
for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        newstr += str[i]; 
    }
}
console.log(newstr)
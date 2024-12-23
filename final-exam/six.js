// Create a program that uses a Map to count the frequency of each character in a string. Also, demonstrate the use of a Set to store only unique characters from the same string.
let str = "heeloo";
let myMap = new Map();
let myset = new Set();
for(let i of str){
    if(myMap.has(i)){
        myMap.set(i,myMap.get(i)+1)
       
    }
    else{
        myMap.set(i,1);
        myset.add(i)
    }
}

console.log(myMap);
console.log(myset)
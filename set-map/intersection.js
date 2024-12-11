let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let mySet1 = new Set(arr1)
let mySet2 = new Set(arr2)

let mySet = new Set();

mySet1.forEach((ele) => {
    if(mySet2.has(ele)){
        mySet.add(ele);
    }
})

console.log(mySet);
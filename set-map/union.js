let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let mySet = new Set(arr1);

arr2.forEach(element => {
    mySet.add(element);
});

console.log(mySet);
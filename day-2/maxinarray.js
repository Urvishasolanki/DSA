let arr = [-1,-5,-9,-20,-41,-25,-36,0]


let max = -Infinity;
for(let x=0; x<arr.length; x++){
    if(max < arr[x]){
        max = arr[x]
    }
}
console.log(max)
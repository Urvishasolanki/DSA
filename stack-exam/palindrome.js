class stack{
    constructor(){
        this.arr = []
    }
    push(ele){
        this.arr.push(ele)
    }
    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.arr.pop()
    }
    isEmpty(){
        // if(this.arr.length == 0){
        //     return true
        // }
        // else{
        //     return false
        // }
        return this.arr.length == 0
    }
    peek(){
        return this.arr[this.arr.length-1]
    }
    size(){
        return this.arr.length
    }
}


let stk = new stack();
let str = "radar"
for(let i=0; i<str.length; i++){
    stk.push(str[i])
}
let strrev = ""
while(stk.isEmpty() == false){
    strrev += stk.pop()

}
console.log(strrev)

if(str ==  strrev){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}
// Write a function to reverse a string using a stack. Do not use built-in string reversal functions. Example:
// Input: "hello"
// Output: "olleh" 
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
let str = "hello"
for(let i=0; i<str.length; i++){
    stk.push(str[i])
}
let strrev = ""
while(stk.isEmpty() == false){
    strrev += stk.pop()

}
console.log(strrev)


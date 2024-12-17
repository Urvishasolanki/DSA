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
  
  
  let arr =  [4, 5, 2, 25]
  let stk = new stack();
  
  for(let i=0; i<arr.length; i++){
    if(arr[i+1]>arr[i]){
      arr[i]=arr[i+1];
      stk.push(arr[i])
    }
    else{
      stk.push(-1)
    }
  }
  console.log(stk)
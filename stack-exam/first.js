// Balance Parenthesis 
function isBalance(str){
    let stack = [];
    
    let obj = {
      ")" : "(",
      "}" : "{",
      ")" : "("
    }
    for(let char of str){
        if(char == "(" || char == "{" || char =="["){
            stack.push(char)
        }
        else if(char=="}" || char == "]" || char == ")"){
            if(stack.length==0 || stack.pop()!=obj[char]){
                return false
            }
        }
    }
    return true
}
let str = "{(())}"
console.log(isBalance(str))
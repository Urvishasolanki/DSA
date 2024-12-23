// Write a function to check if a given string containing parentheses is balanced. The function should return true if the string is balanced and false otherwise. Example:
// Input: "({[]})"
// Output: true
// Input: "([)]"Output: false
function isBalance(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char == '(' || char == '{' || char == '[') {
            
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false; 
            }
        }
    }

   
    return stack.length == 0;
}
console.log(isBalance(" {[]}")); 
console.log(isBalance(" {[]})")); 

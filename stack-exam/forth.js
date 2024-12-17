function isBalanced(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false; 
            }
        }
    }

   
    return stack.length === 0;
}
console.log(isBalanced("a + b * (c - d) + {x / [y + z]}")); 
console.log(isBalanced("a + b * (c - d + {x / [y + z}"));

let queue = [1, 2, 3, 4, 5, 6, 7];

function reverseQueue() {
    let stack = [];
    
    while (queue.length > 0) {
        stack.push(queue.shift());
    }
    
    while (stack.length > 0) {
        queue.push(stack.pop());
    }
    
    return queue;
}

console.log(reverseQueue());

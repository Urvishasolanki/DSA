
function Node(data) {
    this.data = data;
    this.next = null;
}


function countNodes(head) {
    let count = 0;
    let current = head;  // Start from the head

    // Traverse the list
    while (current !== null) {
        count++;  // Increment the count for each node
        current = current.next;  // Move to the next node
    }

    return count;  // Return the total count
}

// Create a linked list manually (Example: 1 -> 2 -> 3 -> 4 -> 5)
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Count the nodes
let totalNodes = countNodes(head);
console.log("Total number of nodes:", totalNodes);  // Output: 5
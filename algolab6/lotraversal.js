class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to perform level order traversal
function levelOrderTraversal(root) {
    if (!root) return;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.value + " ");

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Level Order Traversal: ");
levelOrderTraversal(root);
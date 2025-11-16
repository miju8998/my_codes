class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to perform preorder traversal
function preorderTraversal(node)
{
    // Base case
    if (node === null)
        return;

    // Visit the current node
    console.log(node.data + " ");

    // Recur on the left subtree
    preorderTraversal(node.left);

    // Recur on the right subtree
    preorderTraversal(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
preorderTraversal(root);
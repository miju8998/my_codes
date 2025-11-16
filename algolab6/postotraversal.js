class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to perform postorder traversal
function postorderTraversal(node)
{
    // Base case
    if (node === null)
        return;

    // Recur on the left subtree
    postorderTraversal(node.left);

    // Recur on the right subtree
    postorderTraversal(node.right);

    // Visit the current node
    console.log(node.data);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
postorderTraversal(root);
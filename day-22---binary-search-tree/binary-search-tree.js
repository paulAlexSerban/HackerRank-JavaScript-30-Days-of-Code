// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function getHeight
  this.getHeight = function (root) {

    function calculateHeight(root, maxHeight = -1) {
      if (root) {
        maxHeight += 1;
        return Math.max(calculateHeight(root.left, maxHeight),
          calculateHeight(root.right, maxHeight));
      } else {
        return maxHeight;
      }
    }

    return calculateHeight(root);

  }; // End of function getHeight
}; // End of function BinarySearchTree

const tree = new BinarySearchTree();
let root;

console.log(tree.getHeight(root));
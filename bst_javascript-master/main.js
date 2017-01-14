var BinarySearchTree = require('./bst');

var bst = new BinarySearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.insert(38);
bst.insert(2);

console.log("\n\nIN ORDER");
bst.inOrder(bst.root);
console.log("\n\nPRE ORDER");
bst.preOrder(bst.root);
console.log("\n\nPOST ORDER");
bst.postOrder(bst.root);
console.log("\n\nMINIMUM VALUE");
console.log(bst.getMin());
console.log("\n\nMAXIMUM VALUE");
console.log(bst.getMax());
console.log("\n\nFind node with data 3");
console.log(bst.find(3).data);

console.log("\n\nLevel Order Function");
bst.levelOrder(bst.root);


console.log("\n\nDeleted 45");
bst.delete(45);
bst.inOrder(bst.root);

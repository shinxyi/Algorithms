var Node = require('./node');

var BST = (function(){
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function(data) {
    if(!this.root){
      this.root = new Node(data, null, null);
      return;
    }
    var parent = null;
    var current = this.root;
    while(current){
      parent=current;
      if(data<=current.data){
        current=current.left;
        if(!current){
          parent.left = new Node(data, null, null);
        }
      }else{
        current=current.right;
        if(!current){
          parent.right = new Node(data, null, null);
        }
      }
    }
  };

  BST.prototype.inOrder = function(node) {
    if(!node){ return; }

    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  };

  BST.prototype.preOrder = function(node) {
    if(!node){ return; }

    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  };

  BST.prototype.postOrder = function(node) {
    if(!node){ return; }

    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  };


  return BST;
})();

module.exports = BST;

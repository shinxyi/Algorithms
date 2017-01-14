var Node = require('./node');

var BST = (function(){
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function(data) {
    var node = new Node(data, null, null);
    if(this.root === null) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        var ancestor = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            ancestor.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            ancestor.right = node;
            break;
          }
        }
      }
    }
  };

  BST.prototype.inOrder = function(node) {
    if (node === null) {
      return;
    } else {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  };

  BST.prototype.preOrder = function(node) {
    if (node === null) {
      return;
    } else {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };

  BST.prototype.postOrder = function(node) {
    if (node === null) {
      return;
    } else {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  };

  BST.prototype.getMin = function() {
    var current= this.root;
    while(current.left){
      current=current.left;
    }

    return current;
  }

  BST.prototype.getMax = function() {
    var current= this.root;
    while(current.right){
      current=current.right;
    }

    return current;
  }

  BST.prototype.find = function(data) {
    var current = this.root;
    while(current){
      if(current.data==data){
        return current;
      }else if(data<=current.data){
        current=current.left;
      }else{
        current=current.right;
      }
    }
    return false;
  }

  BST.prototype.delete = function(data){
    if(!this.root){ return false; }
    if(this.root.data == data) { return this.root= null; }
    var found= false;
    var current=this.root;
    while(current){
      if(data==current.left.data){
        var temp=current.left.right;
        current.left=current.left.left;
        current=current.left;
        found=true;
        break;
      }else if(data==current.right.data){
        var temp=current.right.right;
        current.right=current.right.left;
        current=current.right;
        found=true;
        break;
      }

      if(found){
        while(current.right){
          current=current.right;
        }
        current.right=temp;
        return;
      }

      if(data<=current.data){
        current=current.left;
      }else{
        current=current.right;
      }
    }
    return false;
  }

  BST.prototype.levelOrder = function(node){
    var queue =[this.root];
    while(queue.length>0){
      if(queue[0]){
        console.log(queue[0].data);
      }
      if(queue[0].left){
        queue.push(queue[0].left);
      }
      if(queue[0].right){
        queue.push(queue[0].right);
      }
      queue.shift();
    }
  }
  return BST;
})();

module.exports = BST;

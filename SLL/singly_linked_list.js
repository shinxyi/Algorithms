var Node = require('./singly_node');

var SLL = (function(){
  function SLL(){
    this.head = null;
  }

  SLL.prototype.find = function(element) {
    if(!this.head){ return null };

    var current = this.head;

    while(current){
      if(current.element == element){ return current };
      current=current.next;
    }

    return null;
  }

  SLL.prototype.insert = function(newElement, element) {

    if(element === "head"){
      this.head = new Node(newElement);
      return this;
    }

    var node = this.find(element);

    if(node){
      var temp = node.next;
      node.next = new Node(newElement);
      node.next.next = temp;
    }

    return this;

  }

  SLL.prototype.display = function() {
    if(!this.head){ return null };

    var current = this.head;

    while(current){
      console.log(current.element);
      current=current.next;
    }
  }

  SLL.prototype.findPrevious = function(element) {
    if(!this.head){ return null };

    var current = this.head;
    var prev = null;

    while(current){
      if(current.element == element){ return prev };
      prev = current;
      current=current.next;
    }

    return null;

  }

  SLL.prototype.remove = function(element) {
    if(!this.head){ return; }

    if(this.head.element === element){
      this.head = this.head.next;
      return this;
    }

    var prev = this.findPrevious(element);

    if(prev){
      prev.next = prev.next.next;
      return this;
    }

    return this;
  }
  return SLL;
})();

module.exports = SLL;

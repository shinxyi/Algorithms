var Node = require('./trie_node.js')

var Trie = (function(){
  function Trie() {
    this.root = new Node("A", null);
  }

  Trie.prototype.insert = function(word, value) {
    console.log('executing!!');

    if(word[0]!=this.root.chr || word.length<2 ){ return; }
    var prev = this.root;
    var next= -1;
    for(var x=0; x<prev.next.length; x++){
      next = prev.next[x].chr == word[2] ? x : 0;
    }
    var current = this.root.next[next];
    var i=1;

    console.log('checking this.root.next->', this.root.next);

    while(next>-1 && i<word.length){
      if(word[i]==current.chr){
        prev=current;
        if(word[i+1]){
          for(var x=0; x<current.next.length; x++){
            next = current.next[x].chr == word[i+1] ? x : 0;
          }
          current=current.next[next];
          i++;
        }
      }else{
        break;
      }
    }

    current= prev;

    for(var x=i;x<word.length;x++){
      if(x<word.length-1){
        current.next.push(new Node(word[x], null));
        current=current.next[current.next.length-1];
        console.log('added this node ->', current.chr);
      }else{
        current.next.push(new Node(word[x], value));
        console.log('added this LAST node ->', current.next[current.next.length-1].chr);
      }
    }
  }

  Trie.prototype.get = function(word) {
    var current = this.root;
    var i=0;
    var next=0;

    while(current.next.length>0){
      if(word[i+1]){
        for(var x=0; x<current.next.length; x++){
          next = current.next[x].chr == word[i+1] ? x : 0;
        }
        current=current.next[next];
        i++;
      }else{ break; }
    }

    var toReturn = { chr: current.chr, val: current.value};
    return toReturn;
  }
  return Trie;
})();

module.exports = Trie;

var Queue = (function(){
  function Queue() {
    this.dataStore = [];
    this.back = 0;
  }
  Queue.prototype.enqueue = function(item) {
    this.dataStore[this.back]=item;
    this.back++;
  }
  Queue.prototype.dequeue = function() {
    var output = this.dataStore[0];
    for(var x=0;x<this.back-1;x++){
      this.dataStore[x]=this.dataStore[x+1];
    }
    this.back--;
    this.dataStore.length--;
    return output;
  }
  Queue.prototype.display = function() {
    for(var i = 0; i < this.back; i++) {
      console.log(this.dataStore[i]);
    }
  }
  return Queue;
})();
module.exports = Queue;

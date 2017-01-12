// stack.js
var Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype.push = function(item) {
    this.dataStore[this.dataStore.length] = item;
  }
  Stack.prototype.pop = function() {
    this.dataStore.length--;
  }
  Stack.prototype.display = function() {
    console.log(this.dataStore);
  }
  return Stack;
})();
module.exports = Stack;
